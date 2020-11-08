<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
        <button v-quando:click="callback">Executar</button> <br>
        <button v-quando:mouseenter="callback">Mouse Enter</button><br>
        <button v-quando:mouseleave="callback">Mouse Enter</button>
	</div>
</template>

<script>
export default {
    directives: {
        'quando': {
            bind(el, binding) {
            // el.addEventListener('click', () => {
            //     if (binding.value) {
            //         binding.value();
            //     }
            // });
                const event = binding.arg;
                const callback = binding.value;
                el.addEventListener(event, () => {
                  if (callback) callback();
                });
            },
        },
    },
	methods: {
        callback() {
            alert('OK');
        }
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
