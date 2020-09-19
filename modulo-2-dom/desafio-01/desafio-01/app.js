new Vue({
    el: '#desafio',
    data: {
        name: 'Loro',
        age: 26,
        img: 'https://br.vuejs.org/images/logo.png',
    },
    methods: {
        tripleAge() {
            return this.age * 3;
        },
        random() {
            return Math.random();
        },
    },
});