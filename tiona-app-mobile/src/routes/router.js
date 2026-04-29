import { 
    createMemoryHistory, //ts mapisy path en am url
    createWebHistory, //mapis path
    createRouter 
} 
from 'vue-router'

import Haa from '../pages/HAA/Haa.vue'
import Fihirana from '../pages/Fihirana/Fihirana.vue'
import Tsanta from '../pages/Tsanta/Tsanta.vue'


const routes = [
  { path: '/fihirana', component: Fihirana },
  { path: '/haa', component: Haa},
  { path: '/tsanta', component: Tsanta},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})