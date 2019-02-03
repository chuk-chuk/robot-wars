const expect = require('chai').expect;
const sinon = require('sinon');

const Game = require('../src/game').Game;
const Robot = require('../src/robot').Robot;

describe('game', () => {
    let game;
    let arena;
    let robots = []

    robots.push(sinon.createStubInstance(Robot));
    robots.push(sinon.createStubInstance(Robot));

    beforeEach(() => {
        arena = {max_x:3, max_y:3}
        game = new Game(arena, robots);
    });

    it('should call move method for each robot', () => {
        game.play();
        robots.forEach(robot => {
            sinon.assert.calledOnce(robot.move);
        });
    });

    it('should return new game results for each robot', () => {
        game.result();
        robots.forEach(robot => {
            sinon.assert.calledOnce(robot.getCurrentPosition);
            sinon.assert.calledOnce(robot.getNextHeading);
        });
    });

    it('should return new game results containing two objects with position and heading properties', () => {
        const results = game.result();
        expect(results.length).to.eql(2)
        results.forEach(robot => {
            expect(robot.hasOwnProperty("position")).to.be.true
            expect(robot.hasOwnProperty("heading")).to.be.true
        });
    });

});;