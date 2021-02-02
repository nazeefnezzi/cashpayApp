import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// const store = createStore({
//     state() {
//         return{
//             pay: '',
//             total:''

//         }
//     }
// })

const store = new Vuex.Store({
    state: {
        pay: '',
        total: '',
        title: 'cashpay'
    },
    mutations: {
        UPDATE_PAY( state, pay ) {
            state.obj.pay = pay
        }

    }
})

export default store;