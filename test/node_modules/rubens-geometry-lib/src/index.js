const { Circle } = require("./Figures/Circle");
const { Rectangle } = require("./Figures/Rectangle");
const { Triangle } = require("./Figures/Triangle");
const { findMaxArea } = require("./Figures/utils");

module.exports = {
    Circle,
    Rectangle,
    Triangle,
    findMaxArea
}

/*
const figure1 = new Circle(3);
const figure2 = new Rectangle(10,8);
const figure3 = new Triangle(3,4,5);

console.log(figure1.getData());
console.log(figure2.getData());
console.log(figure3.getData());

const maxArea = findMaxArea([figure1,figure2,figure3])

console.log(maxArea.getData())


 */