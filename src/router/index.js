import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import bar from '../components/bar.vue'
import ec from '../components/ec.vue'
// import app from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '#'
  },
  {
    path: '/ec',
    name: 'ec',
    component: ec
  }
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  routes
})

export default router
