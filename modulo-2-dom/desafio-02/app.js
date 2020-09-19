new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Hi');
        },
        updateValor(evt) {
            this.valor = evt.target.value;
        }
    }
});
