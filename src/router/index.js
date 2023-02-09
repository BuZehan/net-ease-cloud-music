import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path:'/',
    name:'Layout',
    component:() => import('@/views/Layout'),

        components:{
          default:() => import('@/views/Discover'),
          Podcasting:() => import('@/views/Podcasting')
        },
        children:[
          {
            path:'/discover',
            components:{
              Discovering:() => import('@/views/Discover/components/discover.vue')
            }
          },
          {
            path:'/view',
            components:{
              Podcasting:() => import('@/views/Podcasting/components/view.vue')
            }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
