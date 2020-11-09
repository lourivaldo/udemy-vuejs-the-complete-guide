<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
        <hr>
        <p>{{ user.cpf | cpf | reverse}}</p>
	</div>
</template>

<script>
export default {
    filters: {
        cpf(value) {
            return `${value}`
                .replace(/\D/, '')
                .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        }
    },
    data() {
        return {
            user: {
                cpf: '07082187416',
            },
        }
    },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
