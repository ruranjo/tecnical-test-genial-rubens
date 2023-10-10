// Función que devuelve el objeto con la área más grande en la lista de objetos de la figura provide
function findMaxArea(figures) {
  let maxArea = 0
  let maxFigure = null
  // Iterate over the figures and update the area if needed
  figures.forEach(figure => {

    if (figure.area > maxArea) {
      maxArea = figure.area;
      maxFigure = figure;
    }
  })

  // Return the figure with the greatest area
  return maxFigure;
}

  
  
  // Función que devuelve un ID aleatorio de 10 caracteres
  function makeRandomId() {
    // Crea un arreglo de caracteres
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    // Crea una variable para contener el ID resultante
    const length = 10;
    
    let result = '';
    
    // Utiliza un ciclo for para añadir caracteres al ID resultado
    for (let i = 0; i < length; ++i) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    
    // Devuelve el ID resultante
    return result;
  }
  
  // Exporta las funciones por separado
  module.exports = {
    findMaxArea,
    makeRandomId
  };