const expect = require('chai').expect;

const Formatter = require('../src/formatter').Formatter;

describe('formatter', () => {
    let formatter;

    beforeEach(() => {
        formatter = new Formatter();
        input = { x:1, y:2 }
    });

    describe('convertArenaInput ', () => {

        it('should return grid as an object', () => {
            const input = '5 5\n 1 2 N\n LMLMLMLMM';
            const result = formatter.convertArenaInput(input);
            expect(result).to.be.an('object');
            expect(result).to.eql({ max_x:5, max_y:5});
        }); 
    });
  
    describe('convertRobotsInput ', () => {

        it('should return array of robots info', () => {
            const input = '5 5\n 1 2 N\n LMLMLMLMM\n 3 3 E\n MMRMMRMRRM';
            const result = formatter.convertRobotsInput(input);
            expect(result).to.be.an('array');
            expect(result).to.eql([{ position:' 1 2 N', moves:'LMLMLMLMM'}, { position:' 3 3 E', moves:'MMRMMRMRRM'}]);
           
        }); 

    });
    describe('convertPosition ', () => {

        it('should convert string position to object', () => {
            const input = ' 1 2 N';
            const result = formatter.convertPosition(input);
            expect(result).to.eql({position: {x:1, y:2 }, heading: 'N'});
        }); 

    });
    describe('formatResult ', () => {

        it('should convert result to string', () => {
            const input = {position: {x:1, y:2 }, heading: 'N'};
            const result = formatter.formatResult(input);
            expect(result).to.eql('1 2 N');
        }); 
    });
});