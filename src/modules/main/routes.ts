import { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    name: 'PMain',
    meta: {
      layout: 'default',
    },
    component: () => import('@/modules/main/views/PIndex.vue'),
  },
  {
    path: '/form',
    name: 'PFormValidation',
    meta: {
      layout: 'default',
    },
    component: () => import('@/modules/main/views/PForm.vue'),
  },
]

export default routes
