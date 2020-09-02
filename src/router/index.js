import Vue from 'vue'
import VueRouter from 'vue-router'
import { protectedRoute } from './config'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: protectedRoute
})

export default router
