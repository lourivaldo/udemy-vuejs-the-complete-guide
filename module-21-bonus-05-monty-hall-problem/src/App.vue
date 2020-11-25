<template>
  <div id='app'>
      <h1>Problema de Monty Hall</h1>
      <Gift />
  </div>
</template>

<script>
import Gift from './components/Gift';

export default {
  name: 'App',
  components: { Gift },
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,34,148,0.9720247005988024) 63%, rgba(0,212,255,1) 100%);
}
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}
</style>
