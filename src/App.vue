<template>
    <section id="app">
        <h1>Activity feed</h1>
        <ul class="days">
            <transition-group name="tr-day">
                <DayActivities 
                    v-for="day in days" 
                    :key="day.id"
                    :date="day.date"
                    :activities="day.activities"
                />
            </transition-group>
        </ul>
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
@use './scss/color';

#app {
    margin: auto;
    max-width: 60rem;
    padding: 1.5rem;
}

h1 {
    color: color.$black;
    font-size: 2rem;
    font-weight: 800;
    margin: 2rem 0;
}

.days {
    background: #f2f5f6;
    padding: 1.5rem;
}

.loader-wrapper {
    margin: 2rem auto;
    max-width: 10rem;
}

.tr-day-enter-active,
.tr-day-leave-active {
    transition: transform 500ms;
}

.tr-day-enter,
.tr-day-leave-to {
    transform: translateY(50%);
}
</style>