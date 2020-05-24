<template>
    <li class="day">
        <h2>{{ formattedDate }}</h2>
        <div class="activities">
            <transition-group name="tr-appear">
                <ActivityCard
                    v-for="activity in activities"
                    :key="activity.id"
                    :activity="activity"
                />
            </transition-group>
        </div>
    </li>
</template>
<script>
import ActivityCard from './ActivityCard/ActivityCard'
import { isToday, isYesterday, format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default {
  components: {
    ActivityCard,
  },
  props: {
    date: {
      type: Date,
      required: true,
    },
    activities: {
      type: Array,
      required: true,
    },
  },
  computed:{
    formattedDate() {
      if (isToday(this.date)) {
        return 'Aujourd\'hui'
      }
      if (isYesterday(this.date)) {
        return 'Hier'
      }
      return format(this.date, 'EEEE d LLLL', { locale: fr })
    },
  },
}
</script>
<style lang="scss" scoped>
.day {
    list-style: none;

    & + & {
        margin: 2rem 0 0;
    }
}

h2 {
    color: #b2b3b3;
    font-weight: 800;
    margin: 1rem 0;

    &:first-child {
        margin: 0 0 1rem;
    }
}

.tr-appear-enter-active,
.tr-appear-leave-active {
    transition: transform 500ms;
}

.tr-appear-enter,
.tr-appear-leave-to {
    transform: translateY(50%);
}
</style>