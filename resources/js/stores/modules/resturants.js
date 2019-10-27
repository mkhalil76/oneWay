import Vue from 'vue';

// initial state
const state = {
  all: [],
  active: {},
  roles: [],
  permissions: [],
  menu_item : {},
  kitchens:[],
  update:[],
  errors: null,
  edit:{},
  delete:{},
}

// getters
const getters = {
}

// actions
const actions = {
  ['resturants.for_provider'] ({ commit, state }) {
    commit('CLEAR_ERRORS')

    if (state.all.length) {
        return commit('GET_FOR_PROVIDER');
    }

    return (Vue.axios.get('resturents')).then ((res) => {
      commit('GET_FOR_PROVIDER', res);
    })
    .catch ((res) => {
      commit('GET_FOR_PROVIDER_ERROR', res);
    })
  },

    ['resturants.new'] ({commit, state}, data) {
        commit('CLEAR_ERRORS')

        return (Vue.axios.post('resturants/post', data)).then ((res) => {
            commit('NEW_RESTURANT', res);
        })
        .catch ((res) => {
            commit('RESTURANT_ERROR', res);
        })
    },
    ['resturants.update'] ({commit,state}, data) {
        return (Vue.axios.post('resturants/update', data)).then ((res) => {
            commit('UPDATE_RESTURANT', res);
        })
        .catch ((res) => {
            commit('RESTURANT_ERROR', res);
        })
    },
    ['resturants.newMenuItem'] ({commit, state}, data) {
        commit('CLEAR_ERRORS');

        return (Vue.axios.post('resturants/new-menu-item', data)).then((res) => {

            commit('NEW_MENU_ITEM', res);
        }).catch ((res) => {
            commit('MENU_ITEM_ERROR', res);
        })
    },
    ['resturants.menuToEdit'] ({commit, state}, id) {
        commit('CLEAR_ERRORS');

        return (Vue.axios.get('resturants/get-menu-info', id)).then((res) => {
            commit('EDIT_MENU_ITEM', res);
        }).catch ((res) => {
            commit('EDIT_ITEM_ERROR', res);
        })
    },
    ['resturants.kitchens'] ({commit, state}) {
        return (Vue.axios.get('constants/kitchens')).then((res) => {
            commit('GET_kITCHEN', res);
        }).catch ((res) => {
            commit('GET_kITCHEN_ERROR', res);
        })
    },
    ['resturants.edit'] ({commit, state},id) {
        return (Vue.axios.get('resturants/get-info/'+id))
            .then((res) => {
                commit('RESTURANT_EDIT', res);
            })
            .catch((res) => {
                commit('RESTURANT_EDIT_ERROR', res);
            });
    },
    ['resturants.Delete'] ({commit,state}, id) {
        return (Vue.axios.get('resturants/delete/'+id))
            .then((res) => {
                commit('RESTURANT_DELETE', res);
            }).catch((res) => {
                commit('RESTURANT_DELETE_ERROR', res);
            });
    },

}

// mutations
const mutations = {
    GET_FOR_PROVIDER (state, res) {
        if (res) {
            state.all = res.data;
        }
    },
    NEW_RESTURANT (state,res) {
        if (res) {
            state.active = res.data;
        }
    },
    UPDATE_RESTURANT (state, res) {
        if (res) {
            state.active = res.data;
        }
    },
    NEW_MENU_ITEM (state,res) {
        if (res) {
            state.menu_item = res.data;
        }
    },
    EDIT_MENU_ITEM (state, res) {
        if (res) {
            state.menu_item = res.data.items;
        }
    },
    GET_kITCHEN (state, res) {
        if (res) {
            state.kitchens = res.data
        }
    },
    RESTURANT_EDIT (state, res) {
        if (res) {
            state.edit = res.data
        }
    },
    RESTURANT_DELETE (state, res) {
        if (res) {
            state.delete = res.data.status
        }
    },
    //ERRORS
    GET_FOR_PROVIDER_ERROR (state, err) {
        state.errors = err.response.data;
    },
    MENU_ITEM_ERROR (state, err) {
        if (err) {
            state.errors = err.response.errors;
        }
    },
    RESTURANT_EDIT_ERROR (state,err) {
        if (err) {
            state.errors = err.response.errors;
        }
    },
    EDIT_ITEM_ERROR (state, err) {
        if (err) {
            state.error = err.response.errors;
        }
    },
    RESTURANT_ERROR (state, err) {
        state.errors = err.response.errors;
    },
    CLEAR_ERRORS (state) {
        state.errors = null
    },
    RESTURANT_EDIT_ERROR(state, err) {
        state.errors = err.response.errors
    },
    RESTURANT_DELETE_ERROR (state,err) {
        state.delete = err.response.errors
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
