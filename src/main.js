import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {Home} from './components/Home.vue'

const NotFound = { template: '<h2>Page Not Found</h2>' }
const About = { template: '<h2>About Page</h2>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '*', component: NotFound }
];


new Vue({
  mode: "history",
  routes: routes,
  render: h => h(App),
}).$mount('#app')
