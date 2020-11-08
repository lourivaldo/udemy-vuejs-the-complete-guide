<template>
	<div id="app">
		<h1>Diretivas</h1>
		<h3 v-highlight>Usando diretivas</h3>
		<h3 v-highlight="'blue'">Usando diretivas</h3>
		<h3 v-highlight="color">Usando diretivas</h3>
		<h3 v-highlight:back="color">Usando diretivas</h3>
		<h3 v-highlight:back.timeout="color">Usando diretivas</h3>
		<h3 v-highlight-local:back.timeout="{color1: 'green', timeout: 5000}">Usando diretivas</h3>
		<h3 v-highlight-local:back.timeout.rotate="{color1: 'green', color2: 'red', timeout: 2000, interval: 1000}">
            Usando diretivas
        </h3>
	</div>
</template>

<script>
export default {
	directives: {
		'highlight-local': {
			bind(el, binding) {
				const applyColor = color => {
					if (binding.arg === 'back') {
						el.style.backgroundColor = color;
					} else {
						el.style.color = color;
					}
				};

				let timeout = 0;
				if (binding.modifiers['timeout']) timeout = binding.value.timeout;

				const color1 = binding.value.color1;
				const color2 = binding.value.color2;
				let currentColor = color1;

				setTimeout(() => {
					if (binding.modifiers['rotate']) {
						setInterval(() => {
							currentColor = currentColor === color1 ? color2 : color1;
							applyColor(currentColor);
						}, 500);
					} {
						applyColor(binding.value.color1);
					}

				}, timeout);
			}
		}
	},
	data() {
		return {
			color: 'yellow',
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
</style>
