class Formatter {

    convertArenaInput(input){
        const formatedArenaInput = input.split('\n').shift().split(' ');
        const grid = {
            max_x: parseInt(formatedArenaInput[0]),
            max_y: parseInt(formatedArenaInput[1])
        };
        return grid;
    }

    convertRobotsInput(input){
        const results = [];
        const inputArray = input.split('\n');
        const lengthArr = inputArray.length-1//4
        var i;
        for(i = 1; i < lengthArr; i = i+2){
            results.push({position:inputArray[i], moves:inputArray[i+1].trim()})
        }
        return results;
    }

    convertPosition(position){
        const obj = position.trim().split(' ')
        return {
            position: {x:parseInt(obj[0]), y:parseInt(obj[1])},
            heading:obj[2]
        } 
    }

    formatResult(result){
        return result.position.x + ' ' + result.position.y + ' ' + result.heading;   
    }
}

module.exports.Formatter = Formatter

