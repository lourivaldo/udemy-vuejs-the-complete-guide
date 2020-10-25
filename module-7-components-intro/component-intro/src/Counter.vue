<template>
    <div class="counter">
        <span>{{ counters }}</span>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <div>SCOPE</div>
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

<style scoped>
    div {
        border: 1px solid blue;
    }

    span {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #FFF;
        margin-left: 10px;
        outline: none;
    }
</style>
