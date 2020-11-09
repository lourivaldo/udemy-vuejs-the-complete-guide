<template>
    <div>
        <ul>
            <li v-for="f in fruits" :key="f">{{ f }}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
</template>

<script>
import FruitMixin from './FruitMixin';

export default {
    mixins: [ FruitMixin ],
}
</script>

<style>

</style>
