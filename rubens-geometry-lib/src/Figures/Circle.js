// Importing BaseFigure and Circle class from ./Base file
const { BaseFigure } = require("./Base");

// Defining Circle class which extends from BaseFigure class
class Circle extends BaseFigure {

    // Constructor taking ratio parameter with default value 0
    constructor(ratio=0) {

        // Adding code for checking if ratio is negative, if so then change it to absolute value
        ratio = Math.abs(ratio);

        // calling the constructor of BaseFigure using super()
        super();

        // setting the properties of the Circle class
        this.title = "circle";
        this.perimeter = 2 * Math.PI * ratio;
        this.ratio = ratio;
        this.area = Math.PI * ratio * ratio;
        this.sides = [this.perimeter];

    }

    // Returning value ofπ
    getPI() {
        return Math.PI;
    }

    // Function for returning data
    getData() {
        // Returning data in the form of object
        return {
            id: this.id,
            title: this.title,
            perimeter: this.perimeter,
            ratio : this.ratio,
            area : this.area,
            sides:  this.sides
        }
    }
}

// Exports Circle class
module.exports = {
    Circle
}
