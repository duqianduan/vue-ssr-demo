<template>
  <div class='about-view'>
      <p v-text="tips"></p>
  </div>
</template>
<script>
export default {
    asyncData: function({store}) {
        return store.dispatch('getTips');
    },
    computed: {
        tips() {
            return this.$store.state.tips
        }
    }
}
</script>