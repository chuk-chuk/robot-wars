# Robot Wars
A command line program that takes a string input and returns an output containing the new robots coordinates. Application is written in JavaScript in Node.js using `nodemon` to automatically restart the program. Following the best TDD practices, I opted to use Mocha as my testing framework with Chai assertion library. I have also used Sinon to stub classes. 
I attempted to demonstrate the use object-oriented design to solve the problem. `index.js` acts as the controller and executes the result to the console. 

## Installation

* install Node.js
* clone repository
* cd to root folder
* `npm install` 
* `npm run start`
* Enter a string ```5 5\n 1 2 N\n LMLMLMLMM\n 3 3 E\n MMRMMRMRRM```
* Example of output ```1 3 N\n 5 1 E```

Note: First line of input is the arena size (corresponding to the x and y coordinates), next line is first robot position, the third line is a series of first robot's moves. Lines 4 and 5 are same inputs for the second robot.  

## Test

* `npm run test` 

## Docs

There are a few assumptions to be made.

The upper-right coordinates of the arena are (5,5), the lower-left coordinates are to be (0, 0).

There can be n number of robots in the game and they don't interact with each other. Having said that robots go anywhere within the arena, no collision will be detected. 

If robots attempts to leave the given arena, the console message will be raised and the last possible coordinates will be returned.

User types input on the start of the program by entering a string with new lines and given spaces.

Due to the time given, a validation isn't implemented at the moment, meaning there is no check around the info a user attempts to submit.

Tests are covering all happy paths with various scenarios when testing a game logic.

## Improvements 

- Implement validation of an input.
- Interactive prompt questionnaire: perhaps one of the npm modules(inquirer).
- Raising server errors when rules validations found
- Prevent robots moves into coordinates taken by other robots in the game.
- Wrapping index.js into try/catch block to handle server errors on the start of the app.