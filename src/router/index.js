import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarchartView from '../views/BarchartView.vue'
import LinechartView from '../views/LinechartView.vue'
import InteractiveBarchartView from '../views/InteractiveBarchartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/barchart',
      name: 'barchart',
      component: () => import('../views/BarchartView.vue')
    },
    {
      path: '/linechart',
      name: 'linechart',
      component: () => import('../views/LinechartView.vue')
    },
    {
      path: '/interactivebar',
      name: 'interactivebar',
      component: () => import('../views/InteractiveBarchartView.vue')
    },
    {
      path: '/animatedbar',
      name: 'animatedbar',
      component: () => import('../views/AnimatedBarchartView.vue')
    }
  ]
})

export default router
