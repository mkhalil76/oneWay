import Vue from 'vue';

// initial state
const state = {
  all: [],
  active: {},
  roles: [],
  permissions: [],
  cities:[],
  locations:[],
  errors: null
}

// getters
const getters = {
}

// actions
const actions = {
  ['countries'] ({ commit, state }) {
    commit('CLEAR_ERRORS')

    return (Vue.axios.get('constants/countries')).then ((res) => {
      commit('GET_ALL_COUNTRIES', res);
    })
    .catch ((res) => {
      commit('GET_COUNTRIES_ERROR', res);
    })
  },
  ['countries.citiesList'] ({ commit, state }, country_id) {
    return (Vue.axios.get('constants/cities/'+country_id)).then((res) => {
        commit('GET_COUNTRY_CITIES', res);
    }).catch((res) => {
        commit('GET_COUNTRY_CITIES_ERROR', res);
    })
  },
  ['countries.locationList'] ({commit, state}, country_id) {
    return (Vue.axios.get('constants/locations/'+country_id)).then((res) => {
        commit('GET_CITY_LOCATIONS', res);
    }).catch((res) => {
        commit('GET_CITY_LOCATIONS_ERROR', res);
    })
  }
}

// mutations
const mutations = {
    GET_ALL_COUNTRIES (state, res) {
    if (res) {
        state.all = res.data;
    }
    },
    GET_COUNTRY_CITIES (state, res) {
        if (res) {
            state.cities = res.data
        }
    },
    GET_CITY_LOCATIONS(state,res) {
        if (res) {
            state.locations = res.data
        }
    },
    //ERRORS
    GET_COUNTRIES_ERROR (state, err) {
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
