import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

/* eslint-disable */

const Api = axios.create({
    baseURL: "https://wejapabackend.herokuapp.com/api/",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Vue.$cookies.get('we_japaTK')
    }
})

export default {
    // Login User
    login (userData) {
        return Api.post('/developer/login', userData)
    },
    // get all jobs
    getJobs (userID) {
        return Api.get('/job/all')
    },
    // getJobDetails
    getJobDetails (jobID) {
        return Api.get(`/job/${jobID}`)
    }
}