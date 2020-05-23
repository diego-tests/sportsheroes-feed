<template>
    <article>
        <ActivityImage :type="activity.type" />
        <h3>{{ activity.type }}</h3>
        <ActivityEffort :effort="effort" />
        <ActivityCredits :points="activity.points" />
    </article>
</template>
<script>
import ActivityImage from './ActivityImage'
import ActivityEffort from './ActivityEffort/ActivityEffort'
import ActivityCredits from './ActivityCredits/ActivityCredits'
export default {
  components: {
    ActivityImage,
    ActivityEffort,
    ActivityCredits,
  },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
  computed: {
    effort() {
      return {
        type: this.activity?.type,
        distance: this.activity?.distance, 
        duration: this.activity?.duration, 
        steps: this.activity?.steps,
      } 
    },
  },
}
</script>