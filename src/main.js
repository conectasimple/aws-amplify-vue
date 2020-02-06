// Import ES6 Promise
import 'es6-promise/auto'

// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'

import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'

import { domain, count, prettyDate, pluralize } from './filters'

/*
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
*/

import AppView from './components/App.vue'
import Amplify from '@aws-amplify/core'
import awsExports from '@/aws-exports';

Amplify.configure(awsExports);
Vue.prototype.$Amplify = Amplify // <- This line is important
 
import AWSAppSyncClient from "aws-appsync"
import VueApollo from 'vue-apollo'

const config = {
  url: 'https://psjb5eava5hgheajor2ncomfdi.appsync-api.us-east-2.amazonaws.com/graphql',
  region: 'us-east-2',
  auth: {
    type: 'API_KEY',
    apiKey: 'da2-qpvor76zorat3og3kxci7nu2py',
  }
}

const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    }
  }
}

const client = new AWSAppSyncClient(config, options)
const appsyncProvider = new VueApollo({
  defaultClient: client
})
Vue.use(VueApollo)


Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(VueRouter)

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    (!router.app.$store.state.token || router.app.$store.state.token === 'null')
  ) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

sync(store, router)

// Check local storage to handle refreshes
if (window.localStorage) {
  var localUserString = window.localStorage.getItem('user') || 'null'
  var localUser = JSON.parse(localUserString)

  if (localUser && store.state.user !== localUser) {
    store.commit('SET_USER', localUser)
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

Vue.config.productionTip = false
//Vue.use(BootstrapVue)

new Vue({
  el: '#root',
  router: router,
  provide: appsyncProvider.provide(),
  store: store,
  render: h => h(AppView)
})
 