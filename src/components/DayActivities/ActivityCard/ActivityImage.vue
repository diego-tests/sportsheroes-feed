<template>
    <img
        :src="imgSrc"
        :alt="type"
        class="type-image"
        @error="imgNotFound"
    >
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isImageMissing: false,
    }
  },
  computed: {
    imgSrc() {
      if(this.isImageMissing) {
        return `${process.env.BASE_URL}images/default.png`
      }
      return `${process.env.BASE_URL}images/${this.type.toLowerCase()}.png`
    },
  },
  methods: {
    imgNotFound() {
      this.isImageMissing = true
    },
  },
}
</script>