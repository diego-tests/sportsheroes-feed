<template>
    <section id="app">
        <DayActivities 
            v-for="day in days" 
            :key="day.id"
            :date="day.date"
            :activities="day.activities"
        />
        <div
            ref="bottom"
            class="loader-wrapper"
        >
            <LoadingAnimation v-if="isFetching" />
        </div>
    </section>
</template>

<script>
import { GET_RECENT_ACTIVITIES, FETCH_NEW_PAGE } from './store/_actionTypes'
import { ACTIVITIES_PER_DAY } from './store/_getterTypes'
import { mapActions, mapState, mapGetters } from 'vuex'

import DayActivities from './components/DayActivities/DayActivities'
import LoadingAnimation from './components/LoadingAnimation'

export default {
  name: 'App',
  components: {
    DayActivities,
    LoadingAnimation,
  },
  data() {
    return {
      observer: new IntersectionObserver(this.onPageEnd),
    }
  },
  computed: {
    ...mapGetters({ days: ACTIVITIES_PER_DAY }),
    ...mapState({ isFetching: state=> state.isFetching }),
  },
  created() {
    this.GET_RECENT_ACTIVITIES()
  },
  mounted() {
    this.observer.observe(this.$refs.bottom)
  },
  methods: {
    ...mapActions({ 
      GET_RECENT_ACTIVITIES, 
      FETCH_NEW_PAGE, 
    }),
    onPageEnd() {
      this.FETCH_NEW_PAGE()
    },
  },
}
</script>
<style lang="scss">
@use './scss/global';
</style>
<style lang="scss" scoped>
.loader-wrapper {
    margin: 1rem auto;
    max-width: 20rem;
}
</style>