import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myCalendars from '@/components/myCalendars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myCalendars',
      name: 'myCalendars',
      component: myCalendars
    }
  ]
})
