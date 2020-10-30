<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
<!--            <app-usuario-info />-->
            <bla-bla :userName="nome" @nomeMudou="nome = $event.nome" :reiniciarFn="reiniciarFn"/>
<!--            <bla-bla />-->
<!--            <app-usuario-info :userName="1" />-->
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import BlaBla from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { BlaBla, AppUsuarioEditar },
    data () {
      return {
       nome: 'Loro',
      }
    },
    methods: {
      alterarNome() {
        this.nome = 'Ana';
      },
      reiniciarFn(nome) {
        this.nome = nome;
      }
    }
}
</script>

<style scoped>
  button {
    background-color: #42b983;
    border: none;
    border-radius: 0;
    color: white;
  }
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
