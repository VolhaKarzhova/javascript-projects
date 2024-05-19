function makeLine(size, char = "#") {
    let line = [];
    for(let index = 0; index < size; index++) {
        line.push(char);
    }
    return line.join("");
}

console.log(makeLine(10));

function makeSquare(size){
    return makeRectangle(size, size);
}

console.log(makeSquare(8));

function makeRectangle(width, height) {
    let rectangle = "";
    for(let index = 0; index < height; index++) {
        rectangle += "\n".concat(makeLine(width, 8));
    } 
    return rectangle;
}

console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let downwardStairs = "";
    for(let index = 0; index < height; index++) {
        downwardStairs += "\n".concat(makeLine(index+1));
    }
    return downwardStairs;
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    for(index = 0; index < numSpaces; index++) {
        spaceLine += " ";
    }
    return spaceLine.concat(makeLine(numChars)).concat(spaceLine);
}

console.log(makeSpaceLine(5, 1));

function makeIsoscelesTriangle(height) {
    let triangle = "";
    for(let index = 0; index < height; index++) {
        triangle += "\n".concat(makeSpaceLine(height - index - 1, 2 * index + 1));
    }
    return triangle;
}

console.log(makeIsoscelesTriangle(8));

function makeDiamond(height) {
    let triangle = makeIsoscelesTriangle(height);
    return triangle.concat("\n").concat(triangle.split('').reverse().join(''));
}

console.log(makeDiamond(4));