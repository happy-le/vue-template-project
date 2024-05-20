import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/Calligraphy'
    },
    {
      path: '/ProgressRing',
      name: 'ProgressRing',
      component: () => import('../views/ProgressRing/HelloWorld.vue')
    },
    {
      path: '/StudyTool',
      name: 'StudyTool',
      component: () => import('../views/StudyTool/StudyTool.vue')
    },
    {
      path: '/Calligraphy',
      name: 'Calligraphy',
      component: () => import('../views/Calligraphy/indexPage.vue')
    }
  ]
})

export default router
