import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/rank'
import Recomm from '../components/recomm/recomm'
import Search from '../components/search/search'
import Singer from '../components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recomm'
    },
    {
      path: '/recomm',
      name: '',
      component: Recomm
    },{
      path: '/singer',
      name: '',
      component: Singer
    },{
      path: '/rank',
      name: '',
      component: Rank
    },{
      path: '/search',
      name: '',
      component: Search
    }
  ]
})
