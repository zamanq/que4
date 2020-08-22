import Vue from 'vue'
import Vuex from 'vuex'

import localStorage from './api/localStorageService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        categories: [],
        dataFields: ['posts', 'categories']
    },
    mutations: {
        setState(state, { field, data }) {
            Vue.set(state, field, data)
        },
        addPost(state, newPost) {
            state.posts.push(newPost)
        },
        addCategory(state, newCategory) {
            state.categories.push(newCategory)
        },
        deletePost(state, postIndex) {
            state.posts.splice(postIndex, 1)
        },
        deleteCategory(state, categoryIndex) {
            state.categories.splice(categoryIndex, 1)
        },
    },
    actions: {
        addPost({ commit, dispatch }, newPost) {
            commit('addPost', newPost)
            dispatch('savePosts')
        },
        addCategory({ commit, dispatch }, newCategory) {
            commit('addCategory', newCategory)
            dispatch('savePosts')
        },
        deletePost({ commit, dispatch }, postIndex) {
            commit('deletePost', postIndex)
            dispatch('savePosts')
        },
        deleteCategory({ commit, dispatch }, categoryIndex) {
            commit('deleteCategory', categoryIndex)
            dispatch('savePosts')
        },
        checkStorage({ state, commit }) {
            state.dataFields.forEach(field => {
                let data = localStorage.checkStorage(field)

                // LocalStorage did not find the data, reset it
                if (data === null) data = []
                commit('setState', { field, data })
            })
        },
        savePosts({ state }) {
            state.dataFields.forEach(field => localStorage.saveToStorage(field, state[field]))
        }
    }
})
