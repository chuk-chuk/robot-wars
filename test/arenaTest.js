const expect = require('chai').expect;
const Arena = require('../src/arena').Arena;

describe('arena', () => {
    let arena;
    let gridSize;

    beforeEach(() => {
        arena = new Arena({ max_x: 5, max_y: 5 });
        gridSize = arena.getGridSize()
    });

    it('should return the grid size', () => {
        expect(gridSize).to.eql({ max_x: 5, max_y: 5 })
    });

    it('should be a type of object', () => {
        expect(gridSize).to.be.an('object');
    })
});;
