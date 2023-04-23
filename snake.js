// Snake
//  -queue for snake body (2d Array)
//  - draw() - draw the grid with snakes body
//  - move() - take in a direction, manipulate queue

class Snake {
    constructor() {
        this.snakeBody = [
            [4,1],
            [4,2],
            [4,3],
            [4,4],
        ];
    }

    move(direction){
        const delta = {
            up: [-1,0],
            down: [1,0],
            left: [0,-1],
            right: [0,1],
        };
        const currentHead = this.snakeBody[this.snakeBody.length - 1];
        const [currRow, currCol] = currentHead;
        const [ changeRow, changeCol ] = delta[direction];
        const newHead = [currRow+changeRow, currCol+changeCol];
        this.snakeBody.push(newHead);
        this.snakeBody.shift();
    }

    draw(){
        const grid = [];
        for(let i = 0; i < 20; i++){
            const row = [];
            for (let j = 0; j < 20; j++){
                row.push(' ');
            }
            grid.push(row);
        }
        // Draw Snake
        this.snakeBody.forEach((pos) => {
            const [row, col] = pos;
            grid[row][col] = '~';
        })
        // Clear Screen
        console.clear();
        // Draw Grid
        grid.forEach(row => console.log(row.join('|')))
    }

    play(){
        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', (keypress) => {
            if(keypress === 'w') this.move('up')
            if(keypress === 'a') this.move('left')
            if(keypress === 's') this.move('down')
            if(keypress === 'd') this.move('right')
            if(keypress === '\u0003') process.exit();
            this.draw();
        });
    }
}

const game = new Snake();
game.play();