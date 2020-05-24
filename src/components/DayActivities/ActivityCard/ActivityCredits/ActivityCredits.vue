<template>
    <div class="credits">
        <div
            class="credits"
        >
            Crédits: <span data-testid="credits">{{ credits }} </span>
        </div>
        <div
            class="points"
        >
            Points: <span data-testid="points">{{ points }}</span>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    points: {
      type: Number,
      required: true,
    },
  },
  computed: {
    credits() {
      return parseInt(this.points / 5)
    },
  },
}
</script>