<template>
<div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <p><strong>ID</strong> {{ id }}</p>
    <button sucesso @click="goHome">Ir para home</button>
</div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },
    // watch: {
    //   $route(to, from) {
    //       this.id = to.params.id;
    //   }
    // },
    methods: {
        goHome() {
            // this.$router.push('/')
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>
</style>
