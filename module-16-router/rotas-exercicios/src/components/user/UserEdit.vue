<template>
<div class="usuario-editar">
    <h2>Usuário Editar</h2>
    <hr>
    <p><strong>ID</strong> {{ id }} / {{ $route.params.id }}</p>
    <p><strong>Completo</strong> {{ $route.query.complete ? 'S' : 'N' }}</p>
    <p><strong>Idioma</strong> {{ $route.query.lang }}</p>
    <button primario>Confirmar</button>
    <div id="rodape">
        <h3>Curso vue</h3>
    </div>
</div>
</template>

<script>
export default {
	props: ['id'],
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>
