const Game = require('./src/game').Game;
const Robot = require('./src/robot').Robot;
const Arena = require('./src/arena').Arena;
const Actions = require('./src/actions').Actions;
const Formatter = require('./src/formatter').Formatter;
const Presenter = require('./src/presenter').Presenter;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let formatter = new Formatter();

rl.question('Enter input string: ', (answer) => {
    console.log('\033c') // clears console for Mac iOS only
    console.log(answer);
    console.log();
    
    const arenaSize = formatter.convertArenaInput(answer);

    const robotsInfo = formatter.convertRobotsInput(answer);

    let arena = new Arena(arenaSize);

    let actions = new Actions();

    const robots = [];

    robotsInfo.forEach(info => {
        let robotPosition = formatter.convertPosition(info.position);
        let robot = new Robot(robotPosition.position, info.moves, robotPosition.heading, actions)
        robots.push(robot);
    });

    let game = new Game(arena, robots);

    game.play();

    const finishGame = game.result();

    let presenter = new Presenter();
    
    presenter.displayResult(finishGame, formatter);
});
