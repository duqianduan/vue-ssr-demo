<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    }
}
</script>