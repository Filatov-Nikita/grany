import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../pages/Main.vue'

const routes = [
  {
    path: '',
    name: 'main',
    component: Main
  },

  {
    path: '/flats',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'flats.params',
        component: () => import('@/pages/FlatsSelectionParams.vue'),
      }
    ]
  },

  {
    path: '/purchase',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'purchase',
        component: () => import('@/pages/Purchase.vue'),
      }
    ]
  },

  {
    path: '/about',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('@/pages/About.vue'),
      }
    ]
  },

  {
    path: '/progress',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'progress',
        component: () => import('@/pages/Progress.vue'),
      }
    ]
  },

  {
    path: '/location',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'location',
        component: () => import('@/pages/Location.vue'),
      }
    ]
  },

  {
    path: '/gallery',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'gallery',
        component: () => import('@/pages/Gallery.vue'),
      }
    ]
  },

  {
    path: '/contacts',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'contacts',
        component: () => import('@/pages/Contacts.vue'),
      }
    ]
  },

  {
    path: '/developer',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'developer',
        component: () => import('@/pages/Developer.vue'),
      }
    ]
  },

  {
    path: '/documents',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'documents',
        component: () => import('@/pages/Documents.vue'),
      }
    ]
  },

  {
    path: '/news',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'news',
        component: () => import('@/pages/News.vue'),
      }
    ]
  },

  {
    path: '/creditcalc',
    component: () => import('@/layouts/PrimaryLayout.vue'),
    children: [
      {
        path: '',
        name: 'credit-calc',
        component: () => import('@/pages/CreditCalc.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
