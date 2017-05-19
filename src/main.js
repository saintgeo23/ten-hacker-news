// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import App from './App';
import storage from './store'

Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.Store(storage);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
