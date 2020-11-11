<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="message in messages"
    :key="message.text"
		:variant="message.type">{{ message.text }}</b-alert>
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
			<b-list-group-item v-for="(user, id) in users" :key="id">
<!--			<b-list-group-item v-for="user in users" :key="user.id">-->
				<strong>Nome: </strong> {{ user.name }} <br>
				<strong>Email: </strong> {{ user.email }} <br>
				<strong>ID: </strong> {{ id }} <br>
				<!--				<strong>ID: </strong> {{ user.id }} <br>-->
				<b-button variant="warning" size="lg" @click="getUser(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="removeUser(id)" class="ml-2">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messages: [],
			users: [],
			id: null,
			user: {
				name: '',
				email: '',
			}
		}
	},
	methods: {
		clear() {
			this.user.name = '';
			this.user.email = '';
			this.id = null;
			this.messages = [];
		},
		save() {
			// this.$http.post('users.json', this.user).then(() => {
			// 	this.clear()
			// })
			const method = this.id ? 'patch' : 'post'
			const url = this.id ? `/${this.id}.json` : '.json';
			this.$http[method](`/users${url}`, this.user).then(() => {
				this.clear()
				this.messages.push({
					text: 'Salvo com sucesso!',
					type: 'success',
				})
			})
		},
		getUsers() {
			this.$http('users.json').then(res => {
				this.users = res.data;
			})

			// this.$http.defaults.headers.common['Authorization'] = 'Bearer 1234'
		},
		getUser(id) {
			this.id = id
			this.user = {...this.users[id]}
		},
		removeUser(id) {
			this.$http.delete(`/users/${id}.json`).then(() => {
				this.clear()
			}).catch(() => {
				this.messages.push({
					text: 'Problema ao excluir',
					type: 'danger',
				})
			})
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
