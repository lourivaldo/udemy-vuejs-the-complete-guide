<template>
    <div class="counter">
        <span>{{ counters }}</span>
        <button @click="add">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script>
    export default {
        name: 'counter',
        data() {
            return {
                counters: 1,
            }
        },
        methods: {
            add() {
                this.counters++;
            },
            sub() {
                this.counters--;
            }
        }
    }
</script>

<style>
    .counter span {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    .counter button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #FFF;
        margin-left: 10px;
        outline: none;
    }
</style>
