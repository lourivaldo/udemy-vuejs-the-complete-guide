<template>
<div class="usuario-editar">
    <h2>Usuário Editar</h2>
		<hr>
		<p><strong>ID</strong> {{ id }} / {{ $route.params.id }}</p>
</div>
</template>

<script>
export default {
	props: ['id'],
}
</script>

<style>
</style>
