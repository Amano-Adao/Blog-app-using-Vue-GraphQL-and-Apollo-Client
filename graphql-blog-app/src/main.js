import { createApp } from 'vue'
import App from './App.vue'

// ...

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'http://localhost:3333/graphql'
})

// create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// install the vue plugin
Vue.use(VueApollo)

// ...

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

// update Vue instance by adding `apolloProvider`
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  template: '<App/>',
  components: { App }
})


createApp(App).mount('#app')
