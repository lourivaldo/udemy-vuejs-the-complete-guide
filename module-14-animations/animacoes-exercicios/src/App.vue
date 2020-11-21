<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
        <hr>
        <b-button variant="primary" @click="exibir = !exibir" class="mb-4">Mostrar Mensagem</b-button>
        <transition name="fade" appear>
<!--            <b-alert class="" variant="info" :show="exibir">{{ msg }}</b-alert>-->
            <b-alert class="" variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

<!--        <transition name="slide">-->
<!--            <b-alert class="" variant="info" show v-if="exibir">{{ msg }}</b-alert>-->
<!--        </transition>-->

        <transition name="slide" type="animation" appear>
            <b-alert class="" variant="info" show v-show="exibir">{{ msg }}</b-alert>
        </transition>

        <transition
                enter-active-class="animated bounce"
                leave-active-class="animated shake">
            <b-alert class="" variant="info" show v-show="exibir">{{ msg }}</b-alert>
        </transition>

        <hr>
        <b-select v-model="tipoAnimacao" class="mb-4">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </b-select>
        <transition :name="tipoAnimacao">
            <b-alert class="" variant="info" show v-show="exibir">{{ msg }}</b-alert>
        </transition>
	</div>
</template>

<script>

export default {
    data() {
        return {
            msg: 'Mensagem para usuario',
            // exibir: true,
            exibir: false,
            tipoAnimacao: 'fade',
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
	font-size: 1.5rem;
}

/* FADE */
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

/*.fade-enter-to {*/
/*    opacity: 1;*/
/*}*/

/*.fade-leave {*/
/*    opacity: 1;*/
/*}*/

/* SLIDE */
@keyframes slide-in {
    from {
        transform: translateY(40px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(40px);
    }
}
.slide-enter-active {
    animation: slide-in 1s ease;
    transition: opacity 1s;
}
.slide-leave-active {
    animation: slide-out 1s ease;
    transition: opacity 1s;
}
.slide-enter, .slide-leave-to {
    opacity: 0;
}

</style>
