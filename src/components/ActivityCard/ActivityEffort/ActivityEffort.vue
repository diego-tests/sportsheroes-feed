<template>
    <div class="card-effort">
        <div 
            v-if="isWalking"
            class="steps"
        >
            {{ distance }} pas
        </div>
        <div 
            v-else
            class="distance"
        >
            {{ distance }} - {{ time }}
        </div>
    </div>
</template>
<script>
import { formattedDistance, addSpacesAndComma, formattedDuration } from './formattedUnits'
export default {
  props: {
    effort: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isWalking() {
      return this.effort.type === 'Walking'
    },
    distance() {
      if (this.isWalking) {
        return addSpacesAndComma(this.effort.steps)
      }
      return formattedDistance(this.effort.distance)
    },
    time() {
      return formattedDuration(this.effort.duration)
    },
  },
}
</script>