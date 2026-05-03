import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import MainRoutes from '@/modules/main/routes'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: 'default'
    requiresAuth?: boolean
    guestOnly?: boolean
  }
}

const routes: RouteRecordRaw[] = [
  ...MainRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      layout: 'default',
    },
    component: () => import('@/modules/PError.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'PMain' }
  }

  return true
})

export default router
