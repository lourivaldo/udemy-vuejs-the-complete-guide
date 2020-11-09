<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
        <hr>
        <p>{{ user.cpf | cpf | reverse}}</p>
        <input type="text" :value="user.cpf | cpf">
        <hr>
        <Fruits></Fruits>
        <hr>
        <div>
            <ul>
                <li v-for="f in fruits" :key="f">{{ f }}</li>
            </ul>
            <input type="text" v-model="fruit" @keydown.enter="add">
        </div>
        <h1>{{ userLogged }}</h1>
        <h2>{{ global }}</h2>
    </div>
</template>

<script>
import Fruits from './Fruits';
import FruitMixin from './FruitMixin';
import UserMixin from './UserMixin';

export default {
    components: { Fruits },
    mixins: [ FruitMixin, UserMixin ],
    filters: {
        cpf(value) {
            return `${value}`
                .replace(/\D/, '')
                .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        },
    },
    data() {
        return {
            user: {
                cpf: '07082187416',
            },
        }
    },
    created() {
        console.log('App created');
    }
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
input {
    font-size: 2.5rem;
}
</style>
