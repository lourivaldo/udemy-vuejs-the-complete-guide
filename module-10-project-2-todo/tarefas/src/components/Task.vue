<template>
  <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
    <span class="close" @click.stop="$emit('taskDeleted', task)">X</span>
    <p>{{ task.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      }
    }
  },
}
</script>

<style scoped>
  .task {
    position: relative;
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    border-radius: 8px;
    font-size: 1.7rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .task.pending {
    border-left: 12px solid #8a4652;
    background-color: #ec485f;
  }
  .task.done {
    color: #bab5b5;
    border-left: 12px solid #497455;
    background-color: #4ca56d;
    text-decoration: line-through;
  }
  .pending .close {
    background-color: #B73229;
  }
  .done .close {
    background-color: #0A8F08;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
</style>
