import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainRoutes from '@/modules/main/routes.ts'

const routes: Array<RouteRecordRaw> = [
  ...MainRoutes,
  {
    path: '/:pathMatch(.*)*',
    meta: {
      layout: 'default',
    },
    component: () => import('@/modules/PError.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  // Navigation guard here
})
export default router
