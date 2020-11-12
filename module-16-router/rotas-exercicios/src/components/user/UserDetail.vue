<template>
<div class="usuario-detalhe">
    <h2>Usuário Detalhe</h2>
		<hr>
		<p><strong>ID</strong> {{ id }}</p>
		<router-link tag="button" :to="`/user/${id}/edit`" primario>
			Editar
		</router-link>
</div>
</template>

<script>
export default {
	props: ['id'],
}
</script>

<style>
</style>
