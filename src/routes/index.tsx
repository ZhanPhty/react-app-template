// import basicLayout from '@/layouts/BasicLayout'
import Home from '@/views/home/index'
import Children from '@/views/home/children'

// import home from './home'


export default [
  {
    path: '/',
    exact: true,
    component: Home,
    requiresAuth: false,
  },
  {
    path: '/home',
    exact: true,
    component: Children,
    requiresAuth: false,
  }
]
