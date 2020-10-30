<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuario <strong>{{ idade }}</strong> </p>
        <button @click="editarIdade">Alterar idade</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    idade: Number,
  },
  methods: {
    editarIdade() {
      // this.idade = 30;
      // this.$emit('idadeMudou', 30);
      barramento.alterarIdade(++this.idade);
    }
  }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
