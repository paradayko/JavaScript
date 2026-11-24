function rectangleArrayDeclaration (width, heigth) {
    return width * heigth
}

const rectangleArrayExpression = function (width, heigth){
    return width * heigth
}

const rectangleArrayArrow = (width, heigth) => width * heigth

console.log(rectangleArrayDeclaration(5, 10))
console.log(rectangleArrayExpression(4, 10))
console.log(rectangleArrayArrow(3, 10))
