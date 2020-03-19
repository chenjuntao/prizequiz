import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    role: ''
  },
  getters:{
    getName: state=>{
      return state.name;
    },
    getRole: state=>{
      return state.role;
    }
  },
  mutations: {
    // setName: state=>{

    // },
    // setRole: state=>{
      
    // }
  },
  actions: {
  },
  modules: {
  }
})
