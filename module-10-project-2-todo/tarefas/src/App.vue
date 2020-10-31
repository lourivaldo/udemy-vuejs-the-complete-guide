<template>
	<div id="app">
		<h1>Tarefas</h1>
    <progress-bar :progress="progress"></progress-bar>
    <new-task @taskAdded="addTask"></new-task>
    <task-list :tasks="tasks"
               @taskDeleted="deleteTask"
               @taskStateChanged="toggleTaskState"></task-list>
	</div>
</template>

<script>
import ProgressBar from './components/TasksProgress'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'

export default {
  components: { ProgressBar, TaskList, NewTask },
  data() {
    return {
      tasks: [
        // {title: 'Tarefa 1', pending: true},
        // {title: 'Tarefa 2', pending: false},
        // {title: 'Tarefa 3', pending: false},
      ],
    }
  },
  created() {
    const json = localStorage.getItem('tasks');
    const tasks = JSON.parse(json);
    this.tasks = Array.isArray(tasks) ? tasks : [];
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;
      return Math.round(done / total * 100) || 0;
    }
  },
  watch: {
    tasks: {
      deep: true, // Very good!!!!
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      },
    },
  },
  methods: {
    addTask(task) {
      const sameName = t => t.title === task.title;
      if (!this.tasks.some(sameName)) {
        task.pending = true;
        this.tasks.push(task);
      }
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) this.tasks.splice(index, 1);
    },
    toggleTaskState(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) this.tasks[index].pending = !this.tasks[index].pending;
    },
  }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
