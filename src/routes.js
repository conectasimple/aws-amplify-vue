import DashView from './components/Dash.vue'
import NotFoundView from './components/404.vue'
import DashboardView from './components/views/Dashboard.vue'
import Login from '@/components/acceso/Login.vue'
import Alertas from '@/components/alertas/Alertas.vue'
import CalibracionPh from '@/components/calibraciones/CalibracionPh.vue'
//DashView
// Routes
const routes = [  
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Panel de Control',
        meta: {description: '',id:1}
      }
    ]
  }, 
  {
    path: '/alerts',
    component: DashView,
    children: [
      {
        path: 'alerts',
        alias: '',
        component: Alertas,
        name: 'Configuración Alertas',
        meta: {description: '',id:2}
      }
    ] 
  },
  {
    path: '/calibrations/ph',
    component: DashView,
    children: [
      {
        path: 'calibrations/ph',
        alias: '',
        component: CalibracionPh,
        name: 'Calibracion Sensor de Ph',
        meta: {description: '',id:3}
      }
    ]
  }, 
  {
    path: '/calibrations',
    component: CalibracionPh,
    meta: {description: '1',id:4}    
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  },
  
]

export default routes
