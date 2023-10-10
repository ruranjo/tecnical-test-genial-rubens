const { BaseFigure } = require("./Base");

class Triangle extends BaseFigure {
    constructor(l1=0,l2=0,l3=0) {
        
        const areaHeron = (a, b, c) =>{
            const s = (a+b+c)/2;
            const coef = s* (s - a ) * (s -  b) * (s - c)
            if(coef <= 0){
                return 0;  
            } 

            return  Math.sqrt(coef);
        
        }

        super();
        this.title = "triangle";
        this.l1 = Math.abs(l1);
        this.l2 = Math.abs(l2);
        this.l3 = Math.abs(l3);
        this.perimeter = l1+l2+l3;
        this.area =  areaHeron(l1,l2,l3);
        this.sides = [l1,l2,l3];
        this.isRealTriangle = areaHeron(l1,l2,l3) > 0 ? true : false;
    }

    getData(){
        return {
            id: this.id,
            title: this.title,
            perimeter :this.perimeter,
            area : this.area,
            sides : this.sides,
            isRealTriangle: this.isRealTriangle
        }
    }
}


module.exports ={
    Triangle
}