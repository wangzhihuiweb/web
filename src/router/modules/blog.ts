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
            {
              path: '/blog/promise',
              name: 'promise',
              component: () => import('@/views/blog/promise.vue'),
              meta: {
                title: 'promise',
              },
            },
            {
              path: '/blog/questionbank',
              name: 'questionbank',
              component: () => import('@/views/blog/questionbank.vue'),
              meta: {
                title: 'questionbank',
              },
            },
            {
              path: '/blog/regular',
              name: 'regular',
              component: () => import('@/views/blog/regular.vue'),
              meta: {
                title: 'regular',
              },
            },
            {
              path:"/blog/css",
              name:"CSS",
              component: () => import('@/views/blog/css/index.vue'),
              children:[
                {
                  path:'/blog/css',
                  redirect: '/blog/css/CSSFlex'
                },
                {
                  path: 'CSSFlex',
                  component: () => import('@/views/blog/css/CSS Flex 布局.vue'),
                  name: 'CSSFlex',
                },
                {
                  path: 'CSSGrid',
                  component: () => import('@/views/blog/css/CSS Grid 布局.vue'),
                  name: 'CSSGrid',  
                },
              ]
            }
        ]
      }
]