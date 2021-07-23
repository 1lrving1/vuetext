/*
 * @Author: your name
 * @Date: 2021-07-20 15:53:46
 * @LastEditTime: 2021-07-21 09:17:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test01\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/views/shouye.vue'
import second from '@/views/second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/Shouye',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/second',
      name: 'second',
      component: second
    }
  ]
})
