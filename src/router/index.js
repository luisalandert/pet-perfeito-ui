import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import UserForm from '../views/UserForm.vue'
import OngForm from '../views/OngForm.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path:'/signUp/user',
    name: 'UserSignUp',
    component: UserForm,
  },
  {
    path:'/signUp/ong',
    name: 'OngSignUp',
    component: OngForm,
  },
  {
    path:'/user/profile',
    name: 'Profile',
    component: UserProfile,
  },
]

const router = new VueRouter({
  routes
})

export default router
