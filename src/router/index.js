import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/in/Cards.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import('../views/in/Groups.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/out/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/out/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes
})

router.beforeEach( (to, from, next) => {
  if ( to.path === '/login' && auth.currentUser ) {
    next( '/' );
    return;
  }
  if ( to.matched.some( record => record.meta.requiresAuth ) && !auth.currentUser ) {
    next( '/login' );
    return;
  }
  next();
});

export default router
