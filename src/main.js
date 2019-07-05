import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from "./routes";
import { store } from "./store/store";
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

// firebase 数据库根链接
Vue.http.options.root = 'https://vue-stocks-trade-19926.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
