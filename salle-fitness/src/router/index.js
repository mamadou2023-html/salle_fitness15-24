import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/page_connexion/login.vue'
import utilisateurs from '@/components/utilisateur/listeUtilisateur.vue'
import profile from '@/components/utilisateur/profileUtilisateur.vue'
import  update from '@/components/utilisateur/miseAjourUtilisateur.vue'
import newUtilisateur from '@/components/utilisateur/ajoutUtilisateur.vue'
import about from '@/views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      component: utilisateurs
    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
      path: '/newUtilisateur',
      name: 'newUtilisateur',
      component: newUtilisateur
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about

      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
