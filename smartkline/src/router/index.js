import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/users/login/Login'
import Register from '@/pages/users/register/Register'
import PersonCenter from '@/pages/users/personcenter/PersonCenter'
import Select from '@/pages/users/selectcodes/Select'
import About from '@/pages/users/about/About'
import Reading from '@/pages/reading/Reading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/personcenter',
      name: 'PersonCenter',
      component: PersonCenter
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/reading',
      name: 'Reading',
      component: Reading
    }
  ]
})
