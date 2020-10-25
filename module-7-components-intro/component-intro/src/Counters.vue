<template>
    <div class="counters">
        <app-counter v-for="c in 5" :key="c"></app-counter>
    </div>
</template>

<script>
    import CounterComponent from './Counter'
    export default {
        components: {'app-counter': CounterComponent}
    }
</script>

<style>
    div {
        border: 1px solid red;
    }
</style>
