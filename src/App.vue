<template>
    <div id="app" />
</template>

<script>
import { GET_RECENT_ACTIVITIES } from './store/_actionTypes'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
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
