const Home = () => import('@/views/home/index.vue')
export const homeRouter=[
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        redirect: '/home/visitchart',
        meta: {
          title: '首页',
        },
        children: [
            {
              path: '/home/visitchart',
              name: 'visitchart',
              component: () => import('@/views/home/visitchart.vue'),
              meta: {
                title: '访问图表',
              },
            },
            {
                path: '/home/projectchart',
                name: 'projectchart',
                component: () => import('@/views/home/projectchart.vue'),
                meta: {
                  title: '参与项目'
                },
              },
              {
                path: '/home/knowledge',
                name: 'knowledge',
                component: () => import('@/views/home/knowledge.vue'),
                meta: {
                  title: '知识体系'
                },
              },
              {
                path: '/home/viewingitems/:id',
                name: 'viewingitems',
                component: () => import('@/views/home/viewingitems.vue'),
                meta: {
                  title: '观赏项目'
                },
              }
        ]
      }
]