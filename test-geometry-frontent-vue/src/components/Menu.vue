<template>

  <div class="options-menu" v-if="state === 'MENU'">
    <div class="menu" v-if="selectedOption === 'MENU'">
      <div class="title">
        <h2>Rubens Geometry</h2>
      </div>
      <div class="options" >
        <button @click="selectOption(options[1])">CREATE FIGURE</button>
        <button @click="selectOption(options[2])">SEE ALL FIGURES</button>
        <button @click="selectOption(options[3])">BIGGER FIGURE</button>
      </div>
    </div>

    <div class="" v-if="selectedOption === 'CREATE'">
      <h2>CREATE</h2>
      <div class="options" >
        <button @click="selecteOptionsFigures(optionsFigures[0])">CIRCLE</button>
        <button @click="selecteOptionsFigures(optionsFigures[1])">TRIANGLE</button>
        <button @click="selecteOptionsFigures(optionsFigures[2])">RECTANGLE</button>
        <button @click="selectOption(options[0])">BACK MENU</button>
      </div>
      
    </div>
    
    <div class="" v-if="selectedOption === 'SEE'">
      <h2>SEE</h2>
      <div>
        <ul>
          <div v-for="(figure, index) in listFigures" :key="index">
            <div class="" v-if="figure.title === 'circle'">
              <div class="card">
                <h4>ID: {{ figure.id }}</h4>
                <h3>FIGURE: {{ figure.title }}</h3>
                <h4>PERIMETER: {{ figure.perimeter }}</h4>
                <h4>RATIO{{ figure.ratio }}</h4>
                <h4>AREA{{ figure.area }}</h4>
              </div>
            </div>
            <div class="" v-if="figure.title === 'rectangle'">
              <div class="card">
                <h4>ID: {{ figure.id }}</h4>
                <h3>FIGURE: {{ figure.title }}</h3>
                <h4>PERIMETER: {{ figure.perimeter }}</h4>
                <h4>AREA{{ figure.area }}</h4>
              </div>
            </div>
            <div class="" v-if="figure.title === 'triangle'">
              <div class="card">
                <h4>ID: {{ figure.id }}</h4>
                <h3>FIGURE: {{ figure.title }}</h3>
                <h4>PERIMETER: {{ figure.perimeter }}</h4>
                <h4>AREA{{ figure.area }}</h4>
              </div>
            </div>
          </div>
        </ul>
      </div>

      <button @click="selectOption(options[0])">BACK MENU</button>
    </div>

    <div class="" v-if="selectedOption === 'GETAREA'">
      <h2>GET AREA</h2>
      <button @click="selectOption(options[0])">BACK MENU</button>
    </div>

    
  </div>

  <div class="options-menu" v-if="state === 'GETDATA'">
    <div class="menu">
      
      <div class="title">
        <h2>DATA OF: {{ selectedOptionsFigures }}</h2>
      </div>

    <div class="" v-if="selectedOptionsFigures === 'CIRCLE'">
      <h2>CIRCLE</h2>
      <div class="inputs">
        <input type="number" v-model="ratio" name="" id="">
        <button v-on:click="handleCrationCircle">GUARDAR FIGURA</button>
        <button @click="returnBackdefaultValuesMenu()">BACK MENU</button>
      </div>
    </div>
    
    <div class="" v-if="selectedOptionsFigures === 'TRIANGLE'">
      <h2>TRIANGLE</h2>
      <div class="inputs">
        <input type="number" v-model="l1" name="" id="" placeholder="l1">
        <input type="number" v-model="l2" name="" id="">
        <input type="number" v-model="l3" name="" id="">
        <button v-on:click="handleCrationTriangle">GUARDAR FIGURA</button>
        <button @click="returnBackdefaultValuesMenu()">BACK MENU</button>
      </div>
      
    </div>

    <div class="" v-if="selectedOptionsFigures === 'RECTANGLE'">
      <h2>RECTANGLE</h2>
      <div class="inputs">
        <input type="number" v-model="base" name="" id="">
        <input type="number" v-model="height" name="" id="">
        <button v-on:click="handleCrationRectangle">GUARDAR FIGURA</button>
        <button @click="returnBackdefaultValuesMenu()">BACK MENU</button>
      </div>
    </div>
    </div>
  </div>

  <div class="options-menu" v-if="state === 'BIGGEST'">
      <h2>BIGGEST FIGURE IS: </h2>
      <div class="card" v-if="biggesFigureArea">
                <h4>ID: {{ biggesFigureArea.id }}</h4>
                <h3>FIGURE: {{ biggesFigureArea.title }}</h3>
                <h4>PERIMETER: {{ biggesFigureArea.perimeter }}</h4>
                <h4>AREA{{ biggesFigureArea.area }}</h4>
      </div>
      <div class="card" v-if="!biggesFigureArea">
                <h2>NO HAY NINGUNA FIGURA AUN</h2>
      </div>

      <button @click="returnBackdefaultValuesMenu()">BACK MENU</button>
  </div>
</template>

<script>
  import {Circle, Triangle, Rectangle, findMaxArea}  from 'rubens-geometry-lib'

export default {
  
  data() {
    return {
      listFigures:[],
      options: ["MENU","CREATE", "SEE", "GETAREA"],
      optionsFigures: ["CIRCLE","TRIANGLE", "RECTANGLE"],
      selectedOption: "MENU",
      selectedOptionsFigures : "",
      stateActions:["MENU","GETDATA","BIGGEST"],
      state:"MENU",
      ratio:0,
      l1:0,
      l2:0,
      l3:0,
      base:0,
      height:0,
      biggesFigureArea:{}
    }
  },
  methods: {
    selectOption(option) {
      console.log(option)
      this.selectedOption = option;
      if(option === "GETAREA"){
        if(this.listFigures){
          this.biggesFigureArea = findMaxArea(this.listFigures);
        }else{
        }

        this.state = 'BIGGEST';
        
      }
    },
    selecteOptionsFigures(option) {
      console.log(option)
      this.state = "GETDATA";
      this.selectedOptionsFigures = option;
    },
    handleCrationCircle() {
      const newCircle = new Circle(this.ratio);
      console.log(newCircle);
      this.listFigures.push(newCircle.getData());
      console.log(this.listFigures);
      this.ratio=0;
      this.returnBackdefaultValuesMenu();
    },
    handleCrationTriangle() {
      const newTriangle = new  Triangle(this.l1,this.l2,this.l3);
      console.log(newTriangle);
      this.listFigures.push(newTriangle.getData());
      console.log(this.listFigures);
      this.l1=0;
      this.l2=0;
      this.l3=0;
      this.returnBackdefaultValuesMenu();
    },
    handleCrationRectangle() {
      const newRectangle = new  Rectangle(this.base,this.height);
      console.log(newRectangle);
      this.listFigures.push(newRectangle.getData());
      console.log(this.listFigures);
      this.base=0;
      this.height=0;
      this.returnBackdefaultValuesMenu();
    },
    returnBackdefaultValuesMenu(){
      this.selectedOption = "MENU",
      this.selectedOptionsFigures = "",
      this.state = "MENU"
    },
    
    
  }
}
</script>

<style scoped>
.options-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.options-menu button {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  background: #333;
  color: #fff;
}

.options-menu button:hover {
  background: #666;
  color: #fff;
}

.options{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.card{
  border: 1px solid tomato;
}
</style>
