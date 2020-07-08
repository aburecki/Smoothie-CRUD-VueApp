import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import AddSmothie from '../components/AddSmothie.vue'
import EditSmoothie from '../components/EditSmoothie.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/add-smoothie',
    name: 'AddSmothie',
    component: AddSmothie
  },
  {
    path: '/edit-smoothie/:smoothie_slug',
    name: 'EditSmoothie',
    component: EditSmoothie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
