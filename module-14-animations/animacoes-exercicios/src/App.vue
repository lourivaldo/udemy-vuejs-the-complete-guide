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

<!--        <transition name="slide" type="animation" appear>-->
<!--            <b-alert class="" variant="info" show v-show="exibir">{{ msg }}</b-alert>-->
<!--        </transition>-->

<!--        <transition-->
<!--                enter-active-class="animated bounce"-->
<!--                leave-active-class="animated shake">-->
<!--            <b-alert class="" variant="info" show v-show="exibir">{{ msg }}</b-alert>-->
<!--        </transition>-->

<!--        <hr>-->
<!--        <b-select v-model="tipoAnimacao" class="mb-4">-->
<!--            <option value="fade">Fade</option>-->
<!--            <option value="slide">Slide</option>-->
<!--        </b-select>-->
<!--        <transition :name="tipoAnimacao" mode="out-in">-->
<!--            <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>-->
<!--            <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>-->
<!--        </transition>-->

<!--        <hr>-->
<!--        <button class="btn btn-success" @click="exibir2 = !exibir2">Alternar</button>-->
<!--        <transition-->
<!--            :css="false"-->
<!--            @before-enter="beforeEnter"-->
<!--            @enter="enter"-->
<!--            @after-enter="afterEnter"-->
<!--            @enter-cancelled="enterCancelled"-->

<!--            @before-leave="beforeLeave"-->
<!--            @leave="leave"-->
<!--            @after-leave="afterLeave"-->
<!--            @leave-cancelled="leaveCancelled">-->
<!--            <div v-if="exibir2" class="caixa"></div>-->
<!--        </transition>-->

<!--        <hr>-->
<!--        <div class="mb-4">-->
<!--            <b-button class="mr-2" variant="primary"-->
<!--                      @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>-->
<!--            <b-button variant="secondary"-->
<!--                      @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>-->
<!--        </div>-->
<!--        <transition name="fade" mode="out-in">-->
<!--            <component :is="componenteSelecionado"></component>-->
<!--        </transition>-->

        <hr>
        <b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
        <transition-group name="slide" tag="div">
            <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
                <b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
            </b-list-group>
        </transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
    components: { AlertaInfo, AlertaAdvertencia },
    data() {
        return {
            alunos: ['Robberto', 'Julia', 'Loro', 'isla'],
            msg: 'Mensagem para usuario',
            // exibir: true,
            exibir: false,
            exibir2: true,
            tipoAnimacao: 'fade',
            larguraBase: 0,
            componenteSelecionado: 'AlertaInfo'
        }
    },
    methods: {
        adicionarAluno() {
            const s = Math.random().toString(36).substring(2);
            this.alunos.push(s)
        },
        removerAluno(indice) {
            this.alunos.splice(indice, 1);
        },
        animar(el, done, negativo) {
            let rodada = 1;
            const temp = setInterval(() => {
                const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : +rodada * 10)
                el.style.width = `${novaLargura}px`;
                rodada++;
                if (rodada > 30) {
                    clearInterval(temp)
                    done()
                }
            }, 20)
        },
        /* ENTER */
        beforeEnter(el) {
            console.log('beforeEnter')
            this.larguraBase = 0
            el.style.width = `${this.larguraBase}px`
        },
        enter(el, done) {
            console.log('enter');
            // done();
            this.animar(el, done, false)

        },
        afterEnter(el) {
            console.log('afterEnter')
        },
        enterCancelled() {
            console.log('enterCancelled')
        },
        /* LEAVE */
        beforeLeave(el) {
            console.log('beforeLeave')
            this.larguraBase = 300
            el.style.width = `${this.larguraBase}px`
        },
        leave(el, done) {
            console.log('leave')
            this.animar(el, done, true)
        },
        afterLeave(el) {
            console.log('afterLeave')
        },
        leaveCancelled() {
            console.log('leaveCancelled')
        },
    },
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

.caixa {
    height: 100px;
    width: 300px;
    margin: 30px auto;
    background-color: lightgreen;
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
    position: absolute;
    width: 100%;
}
.slide-enter, .slide-leave-to {
    opacity: 0;
}
.slide-move {
    transition: transform 1s;
}
</style>
