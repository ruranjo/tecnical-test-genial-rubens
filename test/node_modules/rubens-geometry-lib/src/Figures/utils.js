const  findMaxArea = (figures) => {
    let maxArea = 0;
  
    let maxFigure = null;
  
    figures.forEach(figure => {
      if (figure.getArea() > maxArea) {
        maxArea = figure.getArea();
        maxFigure = figure;
      }
    });
  
    return maxFigure;
}

const makeRandomId = () => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

module.exports = {
    makeRandomId,
    findMaxArea
}

