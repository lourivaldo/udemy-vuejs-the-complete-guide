<template>
  <div>
    <div class="tasks">
      <template v-if="tasks.length">
        <task v-for="task in tasks" :key="task.title" :task="task" @taskDeleted="$emit('taskDeleted', $event)"/>
      </template>
      <p v-else class="no-tasks">Sua vida está em dia!</p>
    </div>
  </div>
</template>

<script>
import Task from './Task';

export default {
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      currentTask: {title: null, pending: true},
    }
  },
  methods: {
    addTask(task) {
      if (!task.title) return;
      this.tasks.push(task);
      this.currentTask = {title: null, pending: true};
    },
  }
}
</script>

<style>
  .tasks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }
  .no-tasks {
    color: #AAA;
    font-size: 1.7rem;
  }
</style>
