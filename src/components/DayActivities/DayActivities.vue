<template>
    <section>
        <h2>{{ formattedDate }}</h2>
        <ActivityCard
            v-for="activity in activities"
            :key="activity.id"
            :activity="activity"
        />
    </section>
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