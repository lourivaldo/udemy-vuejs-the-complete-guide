<template>
<div class="usuario-editar">
    <h2>Usuário Editar</h2>
		<hr>
		<p><strong>ID</strong> {{ id }} / {{ $route.params.id }}</p>
		<p><strong>Completo</strong> {{ $route.query.complete ? 'S' : 'N' }}</p>
		<p><strong>Idioma</strong> {{ $route.query.lang }}</p>
</div>
</template>

<script>
export default {
	props: ['id'],
}
</script>

<style>
</style>
