class Game {
    constructor(arena, robots) {
        this.robots = robots;
        this.arena = arena;
    }

    play() {
        this.robots.forEach(robot => {
            robot.move(this.arena);
        });
    }

    result() {
        const result = [];
        this.robots.forEach(robot => {
            const outputPosition = robot.getCurrentPosition();
            const outputHeading = robot.getNextHeading();
            result.push({position: outputPosition, heading: outputHeading})
        });
        return result;
    }
}
exports.Game = Game;

