export const blogRouter=[
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog/index.vue'),
        meta: {
          title: '首页',
        },
        children: [
            {
              path: '/blog/knowsystem',
              name: 'knowsystem',
              component: () => import('@/views/blog/knowsystem.vue'),
              meta: {
                title: '前端知识体系导图',
              },
            },
            {
              path: '/blog/vue3setup',
              name: 'vue3setup',
              component: () => import('@/views/blog/vue3setup.vue'),
              meta: {
                title: 'Vue3与Vue2对比使用',
              },
            },
            {
              path: '/blog/payment',
              name: 'payment',
              component: () => import('@/views/blog/payment.vue'),
              meta: {
                title: '第三方支付',
              },
            },
        ]
      }
]