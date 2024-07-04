import {RouteRecordRaw} from 'vue-router'

const routes : RouteRecordRaw[] = [
    { 
        path: '/',
        name: 'Home',
        component: () => import('../pages/home.vue'),
        redirect: '/trending',
        children: [
            {
                path: '/trending',
                name: 'Trending',
                component: () => import('../pages/trending.vue')
            }
        ]
    }
  ]

  export default routes