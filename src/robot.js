class Robot {
    constructor(position, moves, heading, actions) {
        this.position = position;
        this.moves = moves;
        this.heading = heading;
        this.actions = actions;
    }

    getCurrentPosition() {
        return this.position;
    }

    getNextHeading() {
        return this.heading;
    }

    move(arena) {
        [...this.moves].forEach(nextAction => {
            if (nextAction === "M") {
                this.position = this.actions.go(arena, this.heading, this.position);
            } else {
                this.heading = this.actions.rotate(this.heading, nextAction);
            }
        });
    }
}

module.exports.Robot = Robot;
