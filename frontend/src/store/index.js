import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex);
const mutations = {
  SET_USER: 'set user'
}

const store =new Vuex.Store ({
  state: {
    user: null,
    product: null
  },
  
  mutations: {
    [mutations.SET_USER](state, user)
  {
      state.user = user
    },
     SET_PRODUCTS(state, products) {
      state.products = products
    },
  
  },

  actions: {
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },
     async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    //async fetchProducts() {
     // return (await axios.get('/api/products')).data
    //},
   
     async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) { 
        throw e
      }
    },
     async delivery({ state, dispatch }, productId) {
    const date=await axios.post(`/api/users/${state.user._id}/delivery`, {
        _id: productId,
    }).data
       console.log("the date is",date)
        //window.alert(`hey you will got it on ${date.data}`)
       // await dispatch('fetchCourses')
    },
     
    async fetchProducts({ commit }) {
      const products = (await axios.get('/api/products')).data
      commit('SET_PRODUCTS', products)
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async addProduct(store, product) {
      return axios.post('/api/products', product)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    }

  },
  
  modules: {},
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}