import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyParty from '../views/MyParty.vue'

import WhatParty from '../views/CreateParty/WhatParty.vue'
import HowApply from '../views/CreateParty/HowApply.vue'
import PartyIntro1 from '../views/CreateParty/PartyIntro1.vue'
import PartyIntro2 from '../views/CreateParty/PartyIntro2.vue'
import WhatPeople from '../views/CreateParty/WhatPeople.vue'
import RegisterImage from '../views/CreateParty/RegisterImage.vue'
import LoginView from '../views/Security/LoginView.vue'

import FindParty from '../views/FindParty/FindPartyView.vue'
import PartyDetails from '../views/PartyDetails.vue'
import CategoryList from '../views/FindParty/CategoryList.vue'


const routes = [

  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/my-party',
    
    component: MyParty
  },
  {
    path: '/find-party/category-details',
    
    component: CategoryList
  },
  {
    path: '/party-details/:id',
    
    component: PartyDetails
  },

  {
    path: '/create-party/what-party',
    component: WhatParty
  },
  
  {
    path: '/create-party/how-apply',
    component: HowApply
  },
  
  {
    path: '/create-party/party-intro-1',
    component: PartyIntro1
  },

  {
    path: '/create-party/party-intro-2',
    component: PartyIntro2
  },
  
  {
    path: '/create-party/what-people',
    component: WhatPeople
  },
  
  {
    path: '/create-party/register-image',
    component: RegisterImage
  },

  {
    path: '/login',
    component: LoginView  
  },

  {
    path: '/find-party/',
    component: FindParty
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
