<template>
    <div id="app">
        <h1>Filtros & Mixins (Desafio)</h1>
        <hr>
        <!-- Exercício 1 -->
        <!-- Construir um filtro local que troca espaços por vírgula -->
        {{ tags | formatTags }}
        <hr>
        <!-- Exercício 2 -->
        <!-- Filtro global que conta o tamanho de cada palavra e adiciona o
            valor na string final -->
        <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
        {{ phrase | words-size}}
        <hr>
        <!-- Exercício 3 -->
        <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
        {{ formattedTags }}
        <hr>
        {{ phraseWordsSize }}
        <hr>
        <!-- Exercício 4 -->
        <!-- Compartilhe a propriedade computada via mixin -->

    </div>
</template>

<script>
    import FormatMixin from './FormatMixin';

    export default {
        mixins: [FormatMixin],
        filters: {
            formatTags(value) {
                return value.replace(/ /g, ',');
            },
        },
        data() {
            return {
                tags: 'Clothes Dresses Hats',
                phrase: 'Pedro é legal',
            }
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
        font-size: 2.5rem;
    }
</style>
