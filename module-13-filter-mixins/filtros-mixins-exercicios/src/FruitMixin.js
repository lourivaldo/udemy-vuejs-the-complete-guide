export default {
    data() {
        return {
            fruit: '',
            fruits: [
                'banana',
                'apple',
                'orange'
            ],
        }
    },
    methods: {
        add() {
            this.fruits.push(this.fruit);
            this.fruit = ''
        }
    }
}
