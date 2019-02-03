const expect = require('chai').expect;
const Robot = require('../src/robot').Robot;
const Actions = require('../src/actions').Actions;
const sinon = require('sinon');

describe('robot', () => {
    let robot;
    let position;
    let moves;
    let heading;
    let actions;

    beforeEach(() => {
        position = { x: 1, y: 2 };
        moves = 'LMR';
        heading = 'N';
        actions = sinon.createStubInstance(Actions);
        robot = new Robot(position, moves, heading, actions);
    });

    it('should return robot current position', () => {
        const position = robot.getCurrentPosition();
        expect(position).to.eql({ x: 1, y: 2 })
    });

    it('should return robot current position as an object', () => {
        const position = robot.getCurrentPosition();
        expect(position).to.be.an('object');
    });

    it('should return robot next heading', () => {
        const heading = robot.getNextHeading();
        expect(heading).to.eql('N');
    });

    it('should return robot next heading as a string', () => {
        const heading = robot.getNextHeading();
        expect(heading).to.be.a('string');
    });

    it('should call move method go for each action "M"', () => {
        robot.move({});
        sinon.assert.calledOnce(actions.go);
    });

    it('should call move method rotate for each action "L/R"', () => {
        robot.move({});
        sinon.assert.calledTwice(actions.rotate);
    });
    
});
