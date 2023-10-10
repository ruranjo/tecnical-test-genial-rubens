// Importing makeRandomId function from ./utils file
const {makeRandomId} = require('./utils');

class BaseFigure {
    constructor() {
        // Assign a random ID using the makeRandomId function
        this.id = makeRandomId();

        // Assign default values to the properties of the base figure
        this.title = "figure";
        this.area = 0;
        this.perimeter = 0;
        this.sides = [];

    }

    getArea() {
        // Calculate the area of the figure based on its properties
        return this.area;
    }

    getPerimeter() {
        // Calculate the perimeter of the figure based on its properties
        return this.perimeter;
    }

    getSides() {
        // Return an array of sides of the figure
        return this.sides;
    }

    getTitle() {
        // Return the title of the figure
        return this.title;
    }
}

module.exports = {
    BaseFigure,
};

