<template>
    <li class="activity">
        <div class="left">
            <ActivityImage :type="activity.type" />
            <div class="text">
                <h3>{{ $t(`activities.${activity.type}`) }}</h3>
                <ActivityEffort :effort="effort" />
            </div>
        </div>
        <ActivityCredits :points="activity.points" />
    </li>
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
<style lang="scss" scoped>
@use '../../../scss/color';

.activity {
    background: white;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;

    & + & {
        margin: 1rem 0 0;
    }
}

.left {
    align-items: stretch;
    display: flex;
}

.text {
    color: color.$grey-1;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: space-between;
    margin: 0 0 0 1rem;
}

h3 {
    color: color.$black;
    font-size: 1.5rem;
    font-weight: 800;
}
</style>