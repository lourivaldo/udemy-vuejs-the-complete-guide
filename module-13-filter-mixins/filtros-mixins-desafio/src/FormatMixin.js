export default {
    computed: {
        formattedTags() {
            return this.tags.replace(/ /g, ',');
        },
        phraseWordsSize() {
            return this.phrase.split(' ').map(word => `${word} (${word.length})`).join(' ');
        },
    },
}
