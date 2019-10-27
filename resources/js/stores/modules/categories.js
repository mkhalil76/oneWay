import Vue from 'vue';

// initial state
const state = {
  all: [],
  active: {},
  roles: [],
  permissions: [],
  menu_category:[],
  errors: null
}

// getters
const getters = {
}

// actions
const actions = {
  ['categories'] ({ commit, state }) {
    commit('CLEAR_ERRORS')

    if (state.all.length) {
        return commit('GET_ALL_CATEGORIES');
    }

    return (Vue.axios.get('constants/categories')).then ((res) => {
      commit('GET_ALL_CATEGORIES', res);
    })
    .catch ((res) => {
      commit('GET_CATEGORIES_ERROR', res);
    })
  },
  ['categories.menuItemCategory'] ({commit, state}) {
    commit('CLEAR_ERRORS')
    if (state.menu_category.length) {
        return commit('GET_MENU_CATEGORIES');
    }
    return (Vue.axios.get('constants/menu-categories')).then ((res) => {
        commit('GET_MENU_CATEGORIES', res);
      })
      .catch ((res) => {
        commit('GET_MENU_CATEGORIES_ERROR', res);
      })
  }
}

// mutations
const mutations = {
    GET_ALL_CATEGORIES (state, res) {
    if (res) {
        state.all = res.data;
    }
    },
    GET_MENU_CATEGORIES (state, res) {
        if (res) {
            state.menu_category = res.data
        }
    },

    //ERRORS
    GET_CATEGORIES_ERROR (state, err) {
        state.errors = err.response.data;
    },
    GET_MENU_CATEGORIES_ERROR (state, err) {
        state.errors = err.response.data;
    },
  CLEAR_ERRORS (state) {
    state.errors = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
