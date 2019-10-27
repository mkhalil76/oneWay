import Vue from 'vue';

// initial state
const state = {
  all: [],
  active: {},
  roles: [],
  resturants:[],
  permissions: [],
  menus:[],
  errors: null
}

// getters
const getters = {
}

// actions
const actions = {
    ['providers.getResturants'] ({ commit, state }) {
        commit('CLEAR_ERRORS')
        return (Vue.axios.get('resturants')).then ((res) => {
          commit('GET_RESTURANTS', res);
        })
        .catch ((res) => {
          commit('GET_RESTURANTS_ERROR', res);
        })
    },
    ['providers.getResturantsMenu'] ({commit, state}, id) {
        commit('CLEAR_ERRORS');

        return (Vue.axios.get('resturants/menu/'+id)).then ((res) => {
            commit('GET_RESTURANTS_MENU', res);
        }).catch ((res) => {
            commit('GET_RESTURANTS_MENU_ERRORS', res);
        })
    },
    ['providers'] ({ commit, state }) {
    commit('CLEAR_ERRORS')

    if (state.active.length) {
        return commit('GET_PROVIDER_INFO');
    }

    return (Vue.axios.get('user')).then ((res) => {
      commit('GET_PROVIDER_INFO', res);
    })
    .catch ((res) => {
      commit('GET_USER_ERROR', res);
    })
  },
}

// mutations
const mutations = {
    GET_PROVIDER_INFO (state, res) {
    if (res) {
        state.active = res.data;
    }
    },

    GET_RESTURANTS (state, res) {
        if (res) {
            state.resturants = res.data;
        }
    },
    GET_RESTURANTS_MENU (state, res) {
        if (res) {
            state.menus = res.data
        }
    },
    //ERRORS
    GET_USER_ERROR (state, err) {
        state.errors = err.response.data;
    },
    GET_RESTURANTS_ERROR (state, err) {
        state.errors = err.response.data.error;
    },
    GET_RESTURANTS_MENU_ERRORS (state, err) {
        state.errors = err.response.data.error;
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
