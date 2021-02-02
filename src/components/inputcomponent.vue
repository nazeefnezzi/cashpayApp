<template>
  <div class="inputcomponent">

    <div class="child-input">
     <p> € <span>
       <input type="number" v-model="topay" placeholder="topay" v-on:keyup.enter="changeBtn"> 
       </span> 
     </p>
    </div>
    <div class="child-input">
      <p> € <span><input type="number" v-model="paid" placeholder="paid" ></span> </p>

    </div>
    
    
    
    
    
      
  </div>
</template>

<script>
import { mapState } from 'vuex' 

export default {
  name: 'inputcomponent',
  // props: {
  //   propsinput: 'topay'
  // },
  // props: {
  //   btn: ['btn']
  // },
  
  data() {
    return {
      topay: '',
      paid: ''
    }
  },
  computed: {
    ...mapState({
    custom: 'title'
    

  }),
  get() {
    return this.$store.state.obj.pay
  },
  set(topay) {
    return this.$store.commit('UPDATE_PAY', topay)
  }

  }, 
  methods: {

    updatePay: function() {
      this.topay
    },
    changeBtn() {
      this.$emit('changebutton', this.topay) 
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inputcompnent {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 100%;
}
.child-input{
  width: 100%;
  margin: 10px;

}

input {
  direction: rtl;
  border: none;
  border-radius: 5px;
  background: #cabbe9;
  width: 15rem;
  height: 2.5rem;
}

input[type=number]::-webkit-inner-spin-button, 
 input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input:focus {
   border-bottom: double 5px #16b8f3;
   outline: none;
 }



</style>
