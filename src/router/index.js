import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import UserForm from '../views/UserForm.vue'
import OngForm from '../views/OngForm.vue'
import UserProfile from '../views/UserProfile.vue'
import PetProfile from '../views/PetProfile.vue'
import OngProfile from '../views/OngProfile.vue'
import Feed from '../views/Feed.vue'
import PetForm from '../views/PetForm.vue'
import Login from '../views/Login.vue'
import Ongs from '../views/Ongs.vue'
import OngDetails from '../views/OngDetails.vue'

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
    path:'/login',
    name:'Login',
    component: Login,
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
  {
    path:'/pet/profile/:petId',
    name: 'PetProfile',
    component: PetProfile,
    props: true
  },
  {
    path:'/feed',
    name: 'Feed',
    component: Feed,
  },
  {
    path:'/new/pet',
    name: 'PetForm',
    component: PetForm,
  },
  {
    path:'/ong',
    name:'Ong',
    component: Ongs
  },
  {
    path:'/ong/profile',
    name:'OngProfile',
    component: OngProfile
  },
  {
    path:'/ong/InstitutoAmparoAnimal',
    name:'OngDetails',
    component: OngDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
