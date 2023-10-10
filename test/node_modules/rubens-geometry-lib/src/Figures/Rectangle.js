const { BaseFigure } = require("./Base");

class Rectangle extends BaseFigure {
    constructor(base,height) {
        
        super();
        this.title = "rectangle";
        this.base = Math.abs(base);
        this.height = Math.abs(height);
        this.perimeter = 2*base + 2 * height;
        this.area =  base*height;
        this.sides = [base,base,height,height];
    }

    getData(){
        return {
            id: this.id,
            title: this.title,
            perimeter :this.perimeter,
            area : this.area,
            sides : this.sides,
            base : this.base, 
            height : this.height 
        }
    }
}

module.exports ={
    Rectangle
}