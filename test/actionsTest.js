const expect = require('chai').expect;

const Actions = require('../src/actions').Actions;

describe('actions', () => {
    let position;
    let arena;

    beforeEach(() => {
        actions = new Actions();
        position = { x:1, y:2 }
        arena = {getGridSize: () => {return { max_x:3,max_y:3 } }}
    });

    describe('actions go that does not change heading position', () => {

        it('should change y position by plus one if facing N', () => {
            const heading = 'N';
            actions.go(arena, heading, position);
            expect(position).to.eql({ x:1, y:3 })
        });

        it('should not change y position by plus one if facing N and leaving grid borders', () => {
            const heading = 'N';
            const positionCollision = { x:2, y:3 }
            
            actions.go(arena, heading, positionCollision);
            expect(positionCollision).to.eql({ x:2, y:3 })
        });

        it('should change y position by minus one if facing S', () => {
            const heading = 'S'
            actions.go(arena, heading, position);
            expect(position).to.eql({ x:1, y:1 })
        });

        it('should not change y position by minus one if facing S and leaving grid border', () => {
            const heading = 'S';
            const positionCollision = { x:1, y:0 }
            actions.go(arena, heading, positionCollision);
            expect(positionCollision).to.eql({ x:1, y:0 })
        });

        it('should change x position by plus one if facing E', () => {
            const heading = 'E';
            actions.go(arena, heading, position);
            expect(position).to.eql({ x:2, y:2 })
        });

        it('should not change x position by plus one if facing E and leaving the grid', () => {
            const heading = 'E';
            const positionCollision = { x:3, y:1 }
            actions.go(arena, heading, positionCollision);
            expect(positionCollision).to.eql({ x:3, y:1 })
        });

        it('should change x position by minus one if facing W', () => {
            const heading = 'W';
            actions.go(arena, heading, position);
            expect(position).to.eql({ x:0, y:2 })
        });

        it('should not change x position by minus one if facing W and leave the grid', () => {
            const heading = 'W';
            const positionCollision = { x:0, y:1 }
            actions.go(arena, heading, positionCollision);
            expect(positionCollision).to.eql({ x:0, y:1 })
        });

    });

    describe('actions rotate that not change x/y position', () => {

        it('should change heading to W if facing N and turning L', () => {
            const heading = 'N'
            const turnDirection = 'L'
            const next = actions.rotate(heading, turnDirection);
            expect(next).to.eql('W')
        });

        it('should change heading to E if facing N and turning R', () => {
            const heading = 'N'
            const turnDirection = 'R'
            const next = actions.rotate(heading, turnDirection);
            expect(next).to.eql('E')
        });

        it('should change heading to E if facing S and turning L', () => {
            const heading = 'S'
            const turnDirection = 'L'
            const next = actions.rotate(heading, turnDirection);
            expect(next).to.eql('E')
        });

        it('should change heading to W if facing S and turning R', () => {
            const heading = 'S'
            const turnDirection = 'R'
            const next = actions.rotate(heading, turnDirection);
            expect(next).to.eql('W')
        });

    });
});