export const notFound = [
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '找不到此页面',
      isHide: true,
    },
  }
]