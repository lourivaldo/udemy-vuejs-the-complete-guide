<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Início</a>
            </router-link>
            <router-link to="/user/1000" tag="li" active-class="active">
                <a>Usuário</a>
            </router-link>
            <router-link to="/user/2000" tag="li" active-class="active">
                <a>Usuário 2</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
</style>
