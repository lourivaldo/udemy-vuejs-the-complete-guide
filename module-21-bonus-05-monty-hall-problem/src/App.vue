<template>
  <div id='app'>
      <h1>Problema de Monty Hall</h1>
      <div class="form">
          <div v-if="!started">
              <label for="doorsAmount">Quantas Portas?</label>
              <input type="text" id="doorsAmount" size="3"
                     v-model.number="doorsAmount">
          </div>
          <div v-if="!started">
              <label for="selectedDoor">Qual é a porta premiada?</label>
              <input type="text" id="selectedDoor" size="3"
                     v-model.number="selectedDoor">
          </div>
          <button v-if="!started" @click="started = true">Iniciar</button>
          <button v-if="started" @click="started = false">Reiniciar</button>
      </div>
      <div class="doors" v-if="started">
          <div v-for="i in doorsAmount" :key="i">
            <Door :has-gift="i === selectedDoor" :number="i"/>
          </div>
      </div>
  </div>
</template>

<script>
import Door from './components/Door';

export default {
  name: 'App',
  components: { Door },
  data() {
    return {
        started: false,
        doorsAmount: 3,
        selectedDoor: null
    }
  },
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
}

button, input {
    color: black;
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

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
