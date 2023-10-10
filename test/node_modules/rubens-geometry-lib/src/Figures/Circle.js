const { BaseFigure } = require("./Base");

class Circle extends BaseFigure {
    constructor(ratio=0) {
        ratio = Math.abs(ratio);
        super();
        this.title = "circle";
        this.perimeter = 2 * Math.PI * ratio;
        this.ratio = ratio;
        this.area =  Math.PI * ratio * ratio;
        this.sides = 1;
    }

    getPI(){
        return Math.PI;
    }

    getData(){
        return {
            id: this.id,
            title: this.title,
            perimeter :this.perimeter,
            ratio : this.ratio,
            area : this.area,
            sides: [this.perimeter]
        }
    }
}

module.exports ={
    Circle
}
