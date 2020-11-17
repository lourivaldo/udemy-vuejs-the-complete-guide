<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Price: {{ stock.price }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Amount" type="number" v-model.number="quantity"/>
                <v-btn @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)" class="green darken-3 white--text">Buy</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: {
            stock: {
                required: true,
            }
        },
        data() {
            return {
                quantity: 0,
            }
        },
        methods: {
            ...mapActions({
                'doBuyStock': 'buyStock'
            }),
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };
                this.doBuyStock(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style>

</style>

