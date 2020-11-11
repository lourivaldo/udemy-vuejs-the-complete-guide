<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="user.name"
				placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-model="user.email"
        placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="save" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="getUsers" size="lg" variant="success" class="ml-2">Listar</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="user in users" :key="user.id">
				<strong>Nome: </strong> {{ user.name }} <br>
				<strong>Email: </strong> {{ user.email }} <br>
				<strong>ID: </strong> {{ user.id }} <br>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			user: {
				name: '',
				email: '',
			}
		}
	},
	methods: {
		save() {
			this.$http.post('users.json', this.user).then(() => {
				this.user.name = '';
				this.user.email = '';
			})
		},
		getUsers() {
			this.$http('users.json').then(res => {
				this.users = res.data;
			})

			this.$http.defaults.headers.common['Authorization'] = 'Bearer 1234'
		},
	},
	// created() {
		// this.$http.post('users.json', {
		// 	name: 'Lourivaldo',
		// 	email: 'loro@gmail.com'
		// }).then(res => {
		// 	console.log(res)
		// })
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
