import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {  SET_ACTIVITIES, SET_IS_FETCHING, SET_SKIP } from './_mutationTypes'
import { GET_RECENT_ACTIVITIES, FETCH_NEW_PAGE } from './_actionTypes'
import { ACTIVITIES_PER_DAY } from './_getterTypes'
import activitiesPerDayReducer from './helpers/activitiesPerDayReducer'

Vue.use(Vuex)

const API_URL = process.env.VUE_APP_API_URL
const USER = process.env.VUE_APP_USER_ID
const limit = process.env.VUE_APP_LIMIT
const DEFAULT_PARAMS = {
  limit,
  sort: '-date',
  skip: 0, 
  type: process.env.VUE_APP_TYPES,
}

export default new Vuex.Store({
  state: {
    activities: null,
    skip: 0,
    isFetching: false,
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
    [SET_IS_FETCHING](state, isFetching) {
      state.isFetching = isFetching
    },
    [SET_SKIP](state, skip) {
      state.skip = skip
    },
  },
  actions: {
    [GET_RECENT_ACTIVITIES]({ commit }) {
      const storedActivities = localStorage.getItem('activities')

      if (storedActivities) {
        commit(SET_ACTIVITIES, JSON.parse(storedActivities))
      }

      const params = DEFAULT_PARAMS

      commit(SET_IS_FETCHING, true)

      axios(`${API_URL}/v3/users/${USER}/activities`, { params })
        .then(res => commit(SET_ACTIVITIES, res?.data?.results))
        .catch(err=> console.error(err))
        .finally(()=> commit(SET_IS_FETCHING, false))
      
    },
    async [FETCH_NEW_PAGE]({ commit, state }) {
      if (state.isFetching || !state.activities) {
        return
      }
      commit(SET_IS_FETCHING, true)
      
      const params = {
        ...DEFAULT_PARAMS,
        skip: state.skip + parseInt(limit),
      }
        
      let newPage
      let newSkip
        
      try {
        const data = (await axios(`${API_URL}/v3/users/${USER}/activities`, { params }))?.data
        newPage = data?.results
        newSkip = data?.metaData?.skip
      } catch(err) {
        console.warn(err)
      }
        
      commit(SET_IS_FETCHING, false)
        
      if (!newPage) {
        return
      }
      commit(SET_SKIP, newSkip)
      commit(SET_ACTIVITIES, [...new Set([...state.activities, ...newPage])])
        
    },

  },
  getters: {
    [ACTIVITIES_PER_DAY](state) {
      return state.activities.reduce(activitiesPerDayReducer, [])
    },
  },
})
