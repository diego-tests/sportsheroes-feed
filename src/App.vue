<template>
    <section id="app">
        <ActivityCard 
            v-for="activity in activities"
            :key="activity.id"
            :activity="activity"
        />
    </section>
</template>

<script>
import { GET_RECENT_ACTIVITIES } from './store/_actionTypes'
import { mapActions, mapState } from 'vuex'

import ActivityCard from './components/ActivityCard/ActivityCard'


export default {
  name: 'App',
  components: {
    ActivityCard,
  },
  computed: {
    ...mapState(['activities']),
  },
  created() {
    this.GET_RECENT_ACTIVITIES()
  },
  methods: {
    ...mapActions({ GET_RECENT_ACTIVITIES }),
  },
}
</script>
<style lang="scss">
@use './scss/global';
</style>
