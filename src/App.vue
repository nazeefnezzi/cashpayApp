<template>
  <div id="app">

    <div class="body">

        <div class="child header">

          <h3> {{ $store.state.title }} </h3>
          

        </div>

        <div class="child input">

          <inputcomponent v-on:changebutton="updateBtn($event)"></inputcomponent>

        </div>

        <div class="child">

          <p>  </p>
          <a href="#">Bar</a> |
          <router-link to="/ec">EC</router-link> |
          <router-link to="/ec">CreditCard</router-link> |
          <router-link to="/ec">Gutschein</router-link> |
          <router-link to="/ec">Sonstiegs</router-link>

          <!--router-view></router-view-->


          <div  class="barpanal">
            <div class="mini-section">
              <button> € {{ btn_five }} </button>
              <button> € {{ btn_four }} </button>
              <button> € {{ btn_three}} </button>
              <button> € {{ btn_two }}</button>
              <button> € {{ btn_one }}</button>
              
            </div>
            <div class="mini-section">
               <div class="number-btn">
                <button v-on:click="inputDigit(7)">7</button>
                <button v-on:click="inputDigit(8)">8</button>
                <button v-on:click="inputDigit(9)">9</button>

              </div>
              <div class="number-btn">
                  <button v-on:click="inputDigit(4)">4</button>
                  <button v-on:click="inputDigit(5)">5</button>
                  <button v-on:click="inputDigit(6)">6</button>
              </div>
              <div class="number-btn">
                  <button v-on:click="inputDigit(1)">1</button>
                  <button v-on:click="inputDigit(2)">2</button>
                  <button v-on:click="inputDigit(3)">3</button>
              </div>
              <div class="number-btn">
                  <button @click="back"> 🔙 </button>
                  <button v-on:click="inputDigit(0)">0</button>
                  <button v-on:click="inputDigit('00')">00</button>
              </div>

            </div>
            <div class="mini-section">

              <button class="paybtn"> Zahlen</button>

            </div>
            
          </div>


        </div>
    
      </div>


      <!--router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link-->
    
    <!--router-view/-->
  </div>
</template>


 <script>
import Inputcomponent from './components/inputcomponent.vue'

 export default {
   name: 'app',

   data() {
     return {
            inputamount: '',
            btn_one: 0,
            btn_two: 0,
            btn_three: 0,
            btn_four: 100,
            btn_five: 200,
            showbarpanel : false
        }
   },

   components: {
      Inputcomponent

   },
   methods: {

        // ...mapMutations([
        //     'ADD_PAY'
        // ]),

        // inputDigit(digit) {
        //     this.inputamount = digit;
        // }
        inputDigit: function(digit) {
            this.inputamount = this.inputamount + digit;
            //this.ADD_PAY(this.inputamount)
            
        },
        back: function() {
            this.inputamount = this.inputamount.slice(0, -1)
        },
        decimal: function(){
            
            this.inputamount = this.inputamount.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            
        },
        updateBtn(btn_one) {
          this.btn_one = btn_one
          this.btn_two = Math.ceil(btn_one)
          //this.btn_three = Math.ceil(btn_one)+10
          let buttonThree = Math.ceil(btn_one) % 10;
          let roundingtoten = 10 - buttonThree

          this.btn_three = Math.ceil(btn_one) + roundingtoten;
        }

    }
   
 }
 </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.body {
  background: #2c3e50;
  height: 98vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
}
.child {
  background: white;
  height: 20vh;
  width: 60%;
  margin-top: 10px;
}

.child:nth-child(1){
  height: 10vh;
}

.child:nth-child(3){
  height: 40vh;
}

a {
  text-decoration: none;
  color: #071a52;
  font-size: 18px;
  padding: 2px;
  border-radius: 5px 5px 0px 0px;
}

a:hover {
  font-weight: bold;
}
a:focus {
  background: #17b978;
}

.barpanal {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
}

.mini-section {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  
}

.mini-section:nth-child(1){
  width: 20%;
  background: chartreuse;
  align-items: center;
}
.mini-section:nth-child(1) button {
  border: none;
  margin: 6px;
  padding: 3px;
  width: 6rem;
  background: #303a52;
  border: 2px solid white;
  color: white;
}

.mini-section:nth-child(2){
  width: 40%;
  background: chartreuse;
  align-items: center;
}
.mini-section:nth-child(2) button {

    height: 2.5rem;
    width: 3rem;
    margin: 3px 2px 2px 2px;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    background: #303a52;
    border: 2px solid white;
    color: white;

}

.paybtn {

    border: solid 2px white;
    width: 8rem;
    height: 2rem;
    background: #303a52;
    color: white;
    

}



</style>
