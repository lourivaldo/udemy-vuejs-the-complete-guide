<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuario: <strong>{{ inverterNome() }}</strong></p>
<!--        <p>Nome do usuario: <strong>{{ nomeAlternativo }}</strong></p>-->
      <p>Idade do usuario <strong>{{ idade }}</strong> </p>
      <button @click="reiniciarNome">Reiniciar Nome</button>
      <button @click="reiniciarNomeCallback">Reiniciar Nome Callback</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  // props: ['userName'],
  // props: {
  //   userName: [String/*, Array*/]
  // },
  props: {
    userName: {
      type: String,
      // required: true,
      default: 'Padrão',
      // default: function () {
      //   return Array(10).fill(0).join(',');
      // },
    },
    idade: Number,
    reiniciarFn: Function
  },
  data() {
    return {
      // userName: '' // conflito de nome
      nomeAlternativo: this.userName,
    };
  },
  methods: {
    inverterNome() {
      return this.userName.split('').reverse().join('');
    },
    reiniciarNome() {
      this.userName = 'Loro';
      this.$emit('nomeMudou', {
        nome: 'Loro',
      });
    },
    reiniciarNomeCallback() {
      this.userName = 'Loro';
      this.reiniciarFn(this.userName);
    }
  },
  created() {
    barramento.quandoIdadeMudar((idade) => {
      console.log('idadeMudou', idade);
      this.idade = idade;
    });
  }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
