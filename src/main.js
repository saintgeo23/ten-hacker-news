import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import VueHead from 'vue-head';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import storage from './store';
import routes from './router';

Vue.use(Vuex);
Vue.use(Router);
Vue.use(VueHead);

const store = new Vuex.Store(storage);
const router = new Router(routes);
sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router,
});

export { app, router, store };
