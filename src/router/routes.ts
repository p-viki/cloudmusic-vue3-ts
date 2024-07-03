import {RouteRecordRaw} from 'vue-router'

const routes : RouteRecordRaw[] = [
    { 
        path: '/',
        name: 'Home',
        component: () => import('../pages/home.vue')
    }
  ]

  export default routes