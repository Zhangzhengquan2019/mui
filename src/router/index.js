import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/view/home.vue')
    },
    // home下路由
    { path: '/home/news', name: 'news', query: { id: 1 }, component: () => import('../components/home/news.vue'), meta: { keepAlive: true } },
    { path: '/home/fenxiang', name: 'fenxiang', component: () => import('../components/home/fenxiang'), meta: { keepAlive: true } },
    { path: '/home/shops', name: 'shops', component: () => import('../components/home/shops'), meta: { keepAlive: true } },
    { path: '/home/liuyan', name: 'liuyan', component: () => import('../components/home/liuyan'), meta: { keepAlive: true } },
    { path: '/home/vid', name: 'vid', component: () => import('../components/home/vid'), meta: { keepAlive: true } },
    { path: '/home/lianxi', name: 'lianxi', component: () => import('../components/home/lianxi'), meta: { keepAlive: true } },
    { path: '/member', name: 'member', component: () => import('../components/view/member'), meta: { keepAlive: true } },
    { path: '/shopcar', name: 'shopcar', component: () => import('../components/view/shopcar'), meta: { keepAlive: true } },
    {
      path: '/music', name: 'music', component: () => import('../components/view/music'), meta: { keepAlive: true },
      children: [
        {
          path: '/',
          name: 'faxian',
          component: () => import('../components/music/faxian'), meta: { keepAlive: true }
        },
        {
          path: '/music/faxian',
          name: 'faxian',
          component: () => import('../components/music/faxian'), meta: { keepAlive: true }
        },
        {
          path: '/music/mv',
          name: 'mv',
          component: () => import('../components/music/mv'), meta: { keepAlive: true }
        },
        {
          path: '/music/tuijian',
          name: 'tuijian',
          component: () => import('../components/music/tuijian'), meta: { keepAlive: true }
        },
        {
          path: '/music/newsm1',
          name: 'newsm1',
          component: () => import('../components/music/newsm1'), meta: { keepAlive: true }
        }
      ]
    },
    { path: '/music/search', name: 'search', component: () => import('../components/music/search') }

  ]
})
