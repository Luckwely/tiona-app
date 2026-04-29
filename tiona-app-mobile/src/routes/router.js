import { 
    createMemoryHistory, //ts mapisy path en am url
    createWebHistory, //mapis path
    createRouter 
} 
from 'vue-router'

import Tsanta from '../pages/Tsanta/Tsanta.vue'
import Haa from '../pages/HAA/Haa.vue'
import Fihirana from '../pages/Fihirana/Fihirana.vue'


const routes = [
  { path: '/fihirana', component: Fihirana },
  { path: '/haa', component: Haa},
  { path: '/fihirana/show/:id', component: FihiranaShow },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})