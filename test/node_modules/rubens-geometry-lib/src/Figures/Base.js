
const {makeRandomId} = require('./utils')

class BaseFigure {
    constructor() {
        this.id = makeRandomId();
        this.title ="figure";
        this.area = 0;
        this.perimeter = 0;
        this.sides = [];
    }

    
    getArea() {
      return this.area;
    }
    
    getPerimeter() {
      return this.perimeter;
    }
    
    getSides() {
      return this.sides
    }

    getTitle() {
        return this.title;
    }
}


module.exports ={
    BaseFigure
}

/*
arregleme los errores y comentemelo en ingles: 

class BaseFigure {
    constructor() {
        
        const makeRandomId = () => {
            let result = ''
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < 10; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
           }
           return result;
        }

        this.id = makeRandomId();
        this.area = 0;
        this.perimeter = 0;
        this.sides = [];
    }

    
    getArea() {
      return this.area;
    }
    
    getPerimeter() {
      return this.perimeter;
    }
    
    getLados() {
      return this.sides
    }
}



*/