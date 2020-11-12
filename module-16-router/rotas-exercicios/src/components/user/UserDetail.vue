<template>
<div class="usuario-detalhe">
    <h2>Usuário Detalhe</h2>
		<hr>
		<p><strong>ID</strong> {{ id }}</p>
<!--		<router-link tag="button" :to="`/user/${id}/edit`" primario>-->
		<router-link tag="button"
            :to="{ name: 'user-edit',
            params: {id},
            query: {complete: false, lang: 'en'},
             hash:'#rodape'}" primario>
			Editar
		</router-link>
</div>
</template>

<script>
export default {
	props: ['id'],
    beforeRouteEnter(to, from, next) {
        // console.log(this.id);// não carregou o componente nesse ponto do ciclo de vida
        console.log('beforeRouteEnter UserDetail');

        // next(vm => {
        //     console.log(vm.id);
        // });

        const auth = true;
        auth ? next() : next(false)
    }
}
</script>

<style>
</style>
