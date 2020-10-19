import Vue from 'vue';
import App from './App.vue';
import SlideUpDown from 'vue-slide-up-down';

Vue.config.productionTip = false;
Vue.component('slide-up-down', SlideUpDown)

new Vue({
  render: h => h(App),
}).$mount('#app');
