
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');
import 'core-js/es6/promise'
import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from '@/js/routes.js';
import App from '@/js/views/App';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from "vee-validate";
import Vuelidate from 'vuelidate'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import store from './stores/index';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = 'http://localhost:8001/api/';

Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.use(VeeValidate,{
    // This is the default
    inject: true,
    // Important to name this something other than 'fields'
    fieldsBagName: 'veeFields',
    // This is not required but avoids possible naming conflicts
    errorBagName: 'veeErrors'
  });
Vue.use(VueAxios, axios);
Vue.use(VueToast,{
    position:'top-right'

});
Vue.router = Routes;
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

const app = new Vue({
    el:'#app',
    router:Routes,
    store,
    render:h => h(App)
});

export default app;
