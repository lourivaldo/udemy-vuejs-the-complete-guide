<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }} <small>(Price: {{ stock.price | currency }}) | Qtd: {{ stock.quantity }}</small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Amount" type="number" v-model.number="quantity"/>
                <v-btn class="blue darken-3 white--text"
                       @click="sellStock"
                       :error="insufficientQuantity || !Number.isInteger(quantity)"
                       :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                       > {{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell'}}</v-btn>
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
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            },
        },
        methods: {
            ...mapActions({
                'doSellStock': 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };
                this.doSellStock(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style>

</style>

