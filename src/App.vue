<template>
    <section id="app">
        <DayActivities 
            v-for="day in days" 
            :key="day.id"
            :date="day.date"
            :activities="day.activities"
        />
    </section>
</template>

<script>
import { GET_RECENT_ACTIVITIES } from './store/_actionTypes'
import { ACTIVITIES_PER_DAY } from './store/_getterTypes'
import { mapActions, mapGetters } from 'vuex'

import DayActivities from './components/DayActivities/DayActivities'

export default {
  name: 'App',
  components: {
    DayActivities,
  },
  computed: {
    ...mapGetters({ days: ACTIVITIES_PER_DAY }),
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
