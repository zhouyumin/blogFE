import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Main',
        component: () => import('@/layout/MainPage.vue'),
      },
      {
        name: 'blog',
        path: '/blog/:id',
        component: () => import('@/layout/Blog.vue'),
      },
      {
        path: '/archive',
        component: () => import('@/layout/Archive.vue'),
      },
      {
        path: '/category',
        component: () => import('@/layout/category/Category.vue'),
        children: [
          {
            path: '',
            component: () => import('@/layout/category/CategoryList.vue'),
          },
          {
            name: 'category',
            path: ':category',
            component: () => import('@/layout/category/CategoryDetail.vue'),
          },
        ],
      },
      {
        path: '/about',
        component: () => import('@/layout/About.vue'),
      },
      {
        path: '/search/:keyword',
        name: 'search',
        component: () => import('@/layout/Search.vue'),
      },
    ],
  },
  {
    path: '/admin/:id?',
    component: () => import('@/layout/Admin.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/components/NotFound.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/blog')) {
    window.scrollTo(0, 300)
  } else if (
    to.path == '/' ||
    to.path == '/archive' ||
    to.path == '/category'
  ) {
    window.scrollTo(0, 0)
  }
  next()
})
export default router
