import Vue from 'vue';

// initial state
const state = {
    manu_to_edit: {},
    updatedMenu:{},
    errors: null,
    deleteMenu:{}
  }

// getters
const getters = {

}

// actions
const actions = {
    ['menu.menuToEdit'] ({commit, state}, id) {

        commit('CLEAR_ERRORS');

        return (Vue.axios.get('resturants/get-menu-info/'+id)).then((res) => {
            commit('GET_MENU_ITEM', res);
        }).catch ((res) => {
            commit('GET_MENU_ITEM_ERROR', res);
        })
    },
    ['manu.EditMenuItem'] ({commit, state}, data) {
        return (Vue.axios.post('resturants/edit-menu-item', data)).then((res) => {
            commit('EDIT_MENU_ITEM', res);
        }).catch ((res) => {
            commit('EDIT_MENU_ITEM_ERROR', res);
        })
    },
    ['manu.DeleteMenuItem'] ({commit, state}, id) {
        return (Vue.axios.get('resturants/delete-menu-item/'+id)).then((res) => {
            commit('DELETE_MENU_ITEM', res);
        });
    }
}

// mutations
const mutations = {
    GET_MENU_ITEM (state, res) {
        if (res) {
            state.manu_to_edit = res.data;
        }
    },
    EDIT_MENU_ITEM (state, res) {
        if (res) {
            state.updatedMenu = res.data;
        }
    },
    DELETE_MENU_ITEM (state, res) {
        if (res) {
            state.deleteMenu = res.data.status
        }
    },
    // ERROR
    GET_MENU_ITEM_ERROR (state,err) {
        if (err) {
            state.error = err.response.errors;
        }
    },
    EDIT_MENU_ITEM_ERROR (state, err) {
        if (err) {
            state.error = err.response.errors
        }
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
