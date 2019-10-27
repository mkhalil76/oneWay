import Vue from 'vue'
import Vuex from 'vuex'
import providers from './modules/providers';
import resturants from './modules/resturants';
import countries from './modules/countries';
import categories from './modules/categories';
import menu  from './modules/menu';

Vue.use(Vuex)

const debug = false

export default new Vuex.Store({
  modules: {
    providers,
    resturants,
    categories,
    countries,
    menu
  },
  strict: debug,
})
