
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    all: {
      falg: ''
    },
    show: '',
    count: 0,
    url: ''
  },
  mutations: {
    changes (state, all) {
      state.all = all
    },
    add (state, all) {
      state.count++
      console.log(state.count)
      if (state.count > 0) {
        state.show = true
        //     // localStorage.setItem('shu', JSON.stringify(state.all.count))
        //     // state.all.count = localStorage.getItem(state.all.count)
      }
    },
    sub (state, all) {
      state.count--
      if (state.count < 0 || state.count === 0) {
        state.count = 0
        state.show = false
        //     // localStorage.setItem('shu', JSON.stringify(state.all.count))
        //     // state.all.count = localStorage.getItem(state.all.count)
      }
    },
    playurl (state, url) {
      state.url = url
    }
  },
  actions: {}

})
