import { 
    createMemoryHistory, //ts mapisy path en am url
    createWebHistory, //mapis path
    createRouter 
} 
from 'vue-router'

import Haa from '../pages/HAA/Haa.vue'
import Fihirana from '../pages/Fihirana/Fihirana.vue'
import Tsanta from '../pages/Tsanta/Tsanta.vue'
import FihiranaShow from '../pages/Fihirana/FihiranaShow.vue'
import TsantaShow from '../pages/Tsanta/TsantaShow.vue'
import HaaShow from '../pages/HAA/HaaShow.vue'


const routes = [
  { path: '/', component: Fihirana },
  { path: '/fihirana/show/:id', component: FihiranaShow },
  { path: '/haa', component: Haa},
  { path: '/haa/show/:id', component: HaaShow},
  { path: '/tsanta', component: Tsanta},
  { path: '/tsanta/show/:id', component: TsantaShow},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})