<template>
    <div id="app">
        <h1>Calculator</h1>
        <Calculator/>
    </div>
</template>

<script>
import Calculator from './main/Calculator'

export default {
  name: 'App',
  components: { Calculator },
}
</script>

<style>
    body {
        margin: 0;
    }
    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,34,148,0.9720247005988024) 63%, rgba(0,212,255,1) 100%);
    }
</style>
