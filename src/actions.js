class Actions {

    go (arena, heading, position) {
        if(heading === "N") {
            if (position.y < arena.getGridSize().max_y){
                position.y++;
            } else {
                this.logWallCollision();
            }
        }
        if(heading === "S") {
            if (position.y > 0){
                position.y--;
            } else {
                this.logWallCollision();
            }
        }

        if(heading === "E") {
            if (position.x < arena.getGridSize().max_x){
                position.x++;
            } else {
                this.logWallCollision();
            }
        }

        if(heading === "W") {
            if (position.x > 0){
                position.x--;
            } else {
                this.logWallCollision();
            }
        }
        return position;
    }

    rotate (currentHeading, turnDirection) {
        switch(currentHeading) {
            case 'N':
                return turnDirection === 'L' ? 'W' : 'E';
            case 'S':
                return turnDirection === 'L' ? 'E' : 'W';
            case 'W':
                return turnDirection === 'L' ? 'S' : 'N';
            case 'E':
                return turnDirection === 'L' ? 'N' : 'S';
            default:
                return currentHeading;
        }
    };

    logWallCollision () {
        console.log('You can not make current move, there is a wall, rotate instead!')
    };
}

module.exports.Actions = Actions;