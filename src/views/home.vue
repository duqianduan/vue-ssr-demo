<template>
  <div class='home-view'>
      <p>This is home view</p>
      <button @click="goAbout">About</button>
  </div>
</template>

<script>
export default {
    created() {
        console.log('home view created.');
    },
    
    methods: {
        goAbout() {
            this.$router.push({
                path: '/about'
            });
        }
    },
}
</script>

<style scoped>
.home-view {
    color: red;
}
</style>