<template>
    <div class="main">
        <div class="section">
            <button>200</button>
            <button>110</button>
            <button>100</button>
            <button>99</button>
            <button>actual</button>
            
        </div>
        <div class="section">

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
        <div class="section">

            <button class="paybtn"> Zahlen</button>
            
        </div>
    </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

export default {
    name: 'bar',
    data() {
        return {
            inputamount: ''
        }
    },
    // computed: {
    //     ...mapState([
    //         'pay'
    //     ])
    // },
    methods: {

        // ...mapMutations([
        //     'ADD_PAY'
        // ]),

        // inputDigit(digit) {
        //     this.inputamount = digit;
        // }
        inputDigit: function(digit) {
            this.inputamount = this.inputamount + digit;
            this.ADD_PAY(this.inputamount)
            
        },
        back: function() {
            this.inputamount = this.inputamount.slice(0, -1)
        },
        decimal: function(){
            
            this.inputamount = this.inputamount.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            
        }

    }
}
</script>


<style scoped>

.main {
    display: flex;
    background:#17b978;
    width: 96%;
    margin: auto;
    justify-content: center;
    align-items: center;

}
.section {
    margin: 3px 10px 2px 10px;
    width: 10rem;
}

.section:nth-child(1) {

    display: flex;
    flex-direction: column;
    justify-content: center;
    background: none;


}

.section:nth-child(1) button {
    border: 2px white solid;
    height: 2rem;
    margin: 2px;
    background: #303a52;
    font-weight: bolder;
    color: white;
    width: 5rem;
}
.section:nth-child(1) button:focus {
    background: #22d1ee;
    outline: none;
    color: #0e153a ;
}
.section:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    
}
.section:nth-child(2) button {

    height: 2.5rem;
    width: 3rem;
    margin: 3px 2px 2px 2px;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    background: #303a52;
    border: 2px solid white;
    color: white;

}
.section:nth-child(2) button:active {
    background: #22d1ee;
    outline: none;
    color: #0e153a;
    border: none;
    transition: ease;
}
.section:nth-child(2) button:focus {
    outline: none;
    
}


.paybtn {

    border: solid 2px white;
    width: 8rem;
    height: 2rem;
    background: none;
    color: white;
    

}

.paybtn:hover {
    background: #22d1ee;
    border: 2px solid white;
}

</style>