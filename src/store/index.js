import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {  SET_ACTIVITIES } from './_mutationTypes'
import { GET_RECENT_ACTIVITIES } from './_actionTypes'
import { ACTIVITIES_PER_DAY } from './_getterTypes'
import activitiesPerDayReducer from './helpers/activitiesPerDayReducer'

Vue.use(Vuex)

const API_URL = process.env.VUE_APP_API_URL
const USER = process.env.VUE_APP_USER_ID
const DEFAULT_PARAMS = {
  limit : process.env.VUE_APP_LIMIT,
  sort: '-date',
  skip: 0, 
  type: process.env.VUE_APP_TYPES,
}

export default new Vuex.Store({
  state: {
    activities: null,
    page: null,
  },
  mutations: {
    [SET_ACTIVITIES](state, activities) {
      state.activities = activities
      try{
        localStorage.setItem('activities', JSON.stringify(activities))
      } catch(err) {
        console.warn('localStorage may not be accessible or is full')
        console.warn(err)
      }
    },
  },
  actions: {
    [GET_RECENT_ACTIVITIES]({ commit }) {
      const storedActivities = localStorage.getItem('activities') 

      if (storedActivities) {
        commit(SET_ACTIVITIES, JSON.parse(storedActivities))
      }

      const params = DEFAULT_PARAMS

      axios(`${API_URL}/v3/users/${USER}/activities`, { params })
        .then(res => commit(SET_ACTIVITIES, res?.data?.results))
        .catch(err=> console.error(err))

    },
  },
  getters: {
    [ACTIVITIES_PER_DAY](state) {
      return state.activities.reduce(activitiesPerDayReducer, [])
    },
  },
})
