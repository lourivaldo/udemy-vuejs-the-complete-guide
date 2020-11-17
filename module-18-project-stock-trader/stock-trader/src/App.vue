<template>
	<v-app>
        <Header/>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Header from './components/Header';
import { mapActions } from 'vuex';

export default {
    components: { Header },
    methods: {
        ...mapActions(['initStocks'])
    },
    created() {
        this.initStocks();
    },
}
</script>

<style>

</style>

