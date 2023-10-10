const { BaseFigure } = require('./Base'); // Importa la clase BaseFigure de ./.Base

class Rectangle extends BaseFigure { // Clase Rectango, que hereda de BaseFigure
    constructor(base, height) { // Constructor de Rectástulo, toma dos argumentos: base y height
        super(); // Llama al constructor de la clase padre, en este caso, BaseFigure

        this.title = "rectangle"; // Asignment of value of "rectangle" to the property title of the object

        this.base = Math.abs(base); // Assignment of the absolute value of base to the property base of the object

        this.height = Math.abs(height); // Assignment of the absolute value of height to the property height of the object

        this.perimeter = 2 * base + 2 * height; // Calculation of perimeter (2*base + 2*height) and assignment to property perimeter

        this.area = base * height; // Calculation of area (base*height) and assignment to property area

        this.sides = [base, base, height, height]; // Storea lista con las cuatro esquinas del rectánulo (base, base, height, height)

    }

    getData() { // Función que devuelve datos del objeto rectángulo en un objeto JSON
        return {
            id: this.id, // Returned object has a new property id
            title: this.title, // Returned property title
            perimeter: this.perimeter, // Returned property perimeter
            area: this.area, // Returned property area
            sides: this.sides, // Returned property sides
            base: this.base, // Returned property base
            height: this.height, // Returned property height
        };
    }
}

module.exports = {
    Rectangle
}
