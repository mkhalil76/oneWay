import Vue from 'vue'
import Router from 'vue-router'

//components
const Resturants = () => import('@/js/components/resturants/Index')
const ResturantCreate = () => import('@/js/components/resturants/Create');
const MenuItem = () => import('@/js/components/resturants/Menu');
const NewMenuItem = () => import('@/js/components/resturants/NewMenuItem');
const EditMenu = () => import('@/js/components/resturants/EditMenu');
const EditResturant = () => import('@/js/components/resturants/EditResturant');
// Containers
const DefaultContainer = () => import('@/js/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/js/views/Dashboard')

const Colors = () => import('@/js/views/theme/Colors')
const Typography = () => import('@/js/views/theme/Typography')

//const Charts = () => import('@/js/views/Charts')
const Widgets = () => import('@/js/views/Widgets')

// Views - Components
const Cards = () => import('@/js/views/base/Cards')
const Forms = () => import('@/js/views/base/Forms')
const Switches = () => import('@/js/views/base/Switches')
const Tables = () => import('@/js/views/base/Tables')
const Tabs = () => import('@/js/views/base/Tabs')
const Breadcrumbs = () => import('@/js/views/base/Breadcrumbs')
const Carousels = () => import('@/js/views/base/Carousels')
const Collapses = () => import('@/js/views/base/Collapses')
const Jumbotrons = () => import('@/js/views/base/Jumbotrons')
const ListGroups = () => import('@/js/views/base/ListGroups')
const Navs = () => import('@/js/views/base/Navs')
const Navbars = () => import('@/js/views/base/Navbars')
const Paginations = () => import('@/js/views/base/Paginations')
const Popovers = () => import('@/js/views/base/Popovers')
const ProgressBars = () => import('@/js/views/base/ProgressBars')
const Tooltips = () => import('@/js/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/js/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/js/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/js/views/buttons/Dropdowns')
const BrandButtons = () => import('@/js/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/js/views/icons/Flags')
const FontAwesome = () => import('@/js/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/js/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/js/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/js/views/notifications/Alerts')
const Badges = () => import('@/js/views/notifications/Badges')
const Modals = () => import('@/js/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/js/views/pages/Page404')
const Page500 = () => import('@/js/views/pages/Page500')
const Login = () => import('@/js/views/pages/Login')
const Register = () => import('@/js/views/pages/Register')

// Users
const Users = () => import('@/js/views/users/Users')
const User = () => import('@/js/views/users/User')

Vue.use(Router);


export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
          auth: false
      }
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      meta:{
        auth:true
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          meta:{
            auth:true
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        //
        {
          path: 'resturants',
          redirect: '/resturants/index',
          name: 'Resturants',
          component: {
            render (c) { return c('router-view') }
          },
          meta:{
            auth:true
          },
          children: [
            {
              path: 'index',
              name: 'Index',
              component: Resturants
            },
            {
                path:'create',
                name:'Create',
                component:ResturantCreate
            },
            {
                path:'Mene-item/:id',
                name:'menu items',
                component:MenuItem
            },
            {
                path:'resturant-edit/:id',
                name:'resturant_edit',
                component:EditResturant
            },
            {
                path:':id/new-menu-Item',
                name:'New Menu Item',
                component:NewMenuItem
            },
            {
                path:'menu-item-edit/:id',
                name:'Menu Edit',
                component:EditMenu
            }
          ]
        },
        //
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets,
          meta:{
            auth:true
          },
        },
        {
          path: 'users',
          meta: {
            label: 'Users',
            auth:true,
          },

          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          meta:{
            auth:true,
          },
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          meta:{
            auth:true,
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          meta:{
            auth:true,
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          meta:{
            auth:true,
          },
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      meta: {
        auth: false
      },
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
