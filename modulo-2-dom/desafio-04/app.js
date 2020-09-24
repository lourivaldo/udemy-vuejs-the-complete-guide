new Vue({
	el: '#desafio',
	data: {
        currentEffect: null,
        inputClass: 's-1x',
        inputClass2: 's-1x',
        inputClass3: 'default',
        size: 0,
        progress: 0,
	},
    computed: {
	  bar() {
	      return {
	          width: (this.progress * 3) + 'px',
              height: '30px',
              'background-color': 'red',
	      };
      }
    },
	methods: {
		iniciarEfeito() {
            setInterval(() => {
                this.currentEffect = this.currentEffect === 'encolher' ? 'destaque' : 'encolher';
            }, 1000);
		},
		iniciarProgresso() {
            let i = setInterval(() => {
                this.progress++;
                if (this.progress === 100) {
                    clearInterval(i);
                }
            }, 50);
		}
	}
});
