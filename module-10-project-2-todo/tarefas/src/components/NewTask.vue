<template>
  <div class="new-task">
    <input v-model="title" type="text" @keydown.enter="add" class="form-element" placeholder="Nova tarefa?"/>
    <button class="form-element" @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    add() {
      if (!this.title) return;
      this.$emit('taskAdded', {title: this.title});
      this.title = '';
    },
  }
}
</script>

<style scoped>
  .new-task {
    margin: 35px;
  }
  .form-element {
    outline: none;
    font-size: 2rem;
    border: 1px solid #FFF;
    padding: 5px 10px 8px;
    color: #FFF;
  }
  input.form-element {
    width: 500px;
    background: #FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  button.form-element {
    width: 50px;
    border-left: none;
    background-color: #2196F3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
</style>
