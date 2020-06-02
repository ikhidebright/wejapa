import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/Services/Event.service.js'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    loading: false,
    successmessagealert: null,
    successalert: false,
    errormessagealert: null,
    erroralert: false,
    jobs: null
  },
  mutations: {
    setUser(state, item) {
      state.user = item
    },
    // set loder
    Loader (state, item) {
      state.loading = item
    },
    // set jobs
    Jobs (state, item) {
      state.jobs = item
    },
    // setErrorAlert
    setErrorAlert (state, item) {
      state.errormessagealert = item.errormessagealert
      state.erroralert = item.erroralert
    },
    // setSuccessAlert
    setSuccessAlert (state, item) {
      state.successmessagealert = item.successmessagealert
      state.successalert = item.successalert
    },
  },
  actions: {
    // login
   async Login ({ commit, dispatch }, payload) {
     try {
       commit("Loader", true)
       let response = await Api.login(payload)
       if (response.status === 200 && response.data.success === true && response.data.data.developer.status === "Approved") {
         commit("setUser", [{
           id: response.data.data.developer._id,
           name: response.data.data.developer.name,
           email: response.data.data.developer.email,
           phone: response.data.data.developer.phone,
           github: response.data.data.developer.github,
           resume: response.data.data.developer.resume
         }])
         Vue.$cookies.set('we_japaTK', response.data.data.token, '12d')
         router.push('/dashboard')
         commit("Loader", false)
       } else {
         commit("Loader", false)
         await dispatch("Error", {
          errormessagealert: "Error",
          erroralert: true
        })
       }
     } catch (e) {
       commit("Loader", false)
       await dispatch("Error", {
         errormessagealert: e,
         erroralert: true
        })
      }
    },
    // get getJobs
    async getJobs ({ commit }) {
      try {
        let response = await Api.getJobs()
        console.log(response)
        if (response.status === 200 && response.data.success === true) {
          commit("Jobs", response.data.data.jobs)
        } else {
          await dispatch("Error", {
            errormessagealert: 'Error getting Jobs',
            erroralert: true
           })
        }
      } catch (e) {
        commit("Loader", false)
        await dispatch("Error", {
          errormessagealert: e,
          erroralert: true
         })
       }
    },
    // dispatch error component
    Error ({ commit }, payload) {
      commit("setErrorAlert", payload)
    },
    // dispatch success component
    Success ({ commit }, payload) {
      commit("setSuccessAlert", payload)
    }
  },
  modules: {
  }
})
