import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'MyAccount', component: () => import('@/pages/MyAccount.vue') },
  { path: '/users', name: 'Users', component: () => import('@/pages/Users.vue') },
]

// a user without the right to manage users is sent to the own account; Keycloak decides on every call anyway
const router = createRouter({ history: createWebHistory('/admin'), routes })
router.beforeEach((to) => (to.name === 'Users' && !window.can_manage_users ? { name: 'MyAccount' } : true))

export default router
