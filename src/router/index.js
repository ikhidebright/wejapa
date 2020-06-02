import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Job from '../views/Job.vue'
import Dashboard from '../views/Dashboard.vue'
import Jobs from '../views/Jobs.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
    beforeEnter (to, from, next) {
      store.dispatch({
        type: 'getJobs'
      })
      next()
    }
  },
  {
    path: '/job/:id',
    name: 'Job',
    component: Job
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
