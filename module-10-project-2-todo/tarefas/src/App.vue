<template>
	<div id="app">
		<h1>Tarefas</h1>
    <progress-bar></progress-bar>
    <new-task @taskAdded="addTask"></new-task>
    <task-list :tasks="tasks"></task-list>
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'

export default {
  components: { ProgressBar, TaskList, NewTask },
  data() {
    return {
      tasks: [
        {title: 'Tarefa 1', pending: true},
        {title: 'Tarefa 2', pending: false},
        {title: 'Tarefa 3', pending: false},
      ],
    }
  },
  methods: {
    addTask(task) {
      const sameName = t => t.title === task.title;
      if (!this.tasks.some(sameName)) {
        task.pending = true;
        this.tasks.push(task);
      }
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
