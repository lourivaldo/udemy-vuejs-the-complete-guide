<template>
    <div>
			<rotulo nome="Nome">
				<input type="text" :value="value.name" @input="updateName" />
			</rotulo>
			<rotulo nome="Sobrenome">
				<input type="text" :value="value.surname" @input="updateSurname" />
			</rotulo>
    </div>
</template>

<script>
import Rotulo from '../components/Rotulo.vue'

export default {
		components: { Rotulo },
    props: {
			value: {
				type: Object,
				required: true,
			}
    },
	methods: {
		updateName(event) {
			this.$emit('input', {
				name: event.target.value,
				surname: this.value.surname
			})
		},
		updateSurname(event) {
			this.$emit('input', {
				name: this.value.name,
				surname: event.target.value
			})
		}
	},
}
</script>

<style scoped>
    .rotulo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }

    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
    }


    input:focus {
        border: 1px solid #BBB;
    }
</style>
