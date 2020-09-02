import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import LayoutDefault from '@/components/layouts/LayoutDefault'
import Videos from '@/views/Videos.vue'
import Billing from '@/views/Billing.vue'

export const protectedRoute = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: LayoutDefault,
    meta: {
      title: 'Home',
      group: 'apps',
      icon: ''
    },
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/home/dashboard',
        component: Dashboard,
        meta: {
          title: 'Dashboard',
          group: 'apps',
          icon: 'dashboard'
        }
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/home/videos',
        component: Videos,
        meta: {
          title: 'Videos',
          group: 'apps',
          icon: 'movie'
        }
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/home/billing',
        component: Billing,
        meta: {
          title: 'Billing',
          group: 'apps',
          icon: 'monetization_on'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
