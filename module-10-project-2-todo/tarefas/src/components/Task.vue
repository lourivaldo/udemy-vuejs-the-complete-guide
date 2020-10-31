<template>
  <div class="task" :class="stateClass">
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
</style>
