// imports the BaseFigure class from the file ./Base
const { BaseFigure } = require("./Base");

// Triangle is a subclass of BaseFigure
class Triangle extends BaseFigure {
    // calculateArea is a method of the Triangle class that calculates the area of a triangle given
    // its three sides using the Heron formula
    calculateArea = (a, b, c) => {
        const s = (a + b + c) / 2;
        const coef = s * (s - a) * (s - b) * (s - c);
        // check if the coefficient is less than or equal to zero
        if (coef <= 0) {
            return 0;
        } else {
            return Math.sqrt(coef);
        }
    };
    
    // the constructor of the Triangle class
    constructor(l1 = 0, l2 = 0, l3 = 0) {
        // call the constructor of the BaseFigure class
        super();
        // set the title of the triangle to "triangle"
        this.title = "triangle";
        // set the value of the sides of the triangle to the abs
        // values of the three sides
        this.l1 = Math.abs(l1);
        this.l2 = Math.abs(l2);
        this.l3 = Math.abs(l3);
        // calculate the perimeter and area of the triangle
        this.perimeter = l1 + l2 + l3;
        this.area = this.calculateArea(l1, l2, l3);
        // store the sides and perimeter
        this.sides = [l1, l2, l3];
    };

    // returns an object with the properties id, title, perimeter, area, sides, and isRealTriangle, which
    // indicates if the triangle is real (has a positive area) or not
    getData() {
        return {
            id: this.id,
            title: this.title,
            perimeter: this.perimeter,
            area: this.area,
        };
    }
};

// exports the Triangle class
module.exports = {
    Triangle
};
