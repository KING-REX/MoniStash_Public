import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about-us',
            name: 'about-us',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/views/BlogView.vue')
        },
        {
            path: '/blog-details',
            name: 'blog-details',
            component: () => import('@/views/BlogDetailsView.vue')
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: () => import('@/views/FaqView.vue')
        },
        {
            path: '/career-page',
            name: 'career-page',
            component: () => import('@/views/CareerView.vue')
        }
    ]
})

export default router
