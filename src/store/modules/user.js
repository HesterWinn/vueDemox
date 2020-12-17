import { logout } from '@/api/index'
import { getToken } from '@/utils/author'

const state = {
    tokken: getToken()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    logout({ commit, state, dispatch, rootGetters }) {
        return new Promise(async(resolve, reject) => {
            dispatch('resetToken').then(res => {
                resolve({

                })
            })
        })
    }
}

function resetToken({ commit }, payload) {
    return new Promise(resolve => {
        commit('SET_TOKEN', '')
    })
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
