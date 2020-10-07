<template>
  <div id="app">
      <h1>Counters</h1>
      {{ counters }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          counters: 0,
      }
  }
}
</script>

<style>
</style>
