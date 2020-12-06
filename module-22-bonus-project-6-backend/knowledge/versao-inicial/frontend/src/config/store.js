import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenuVisible: true,
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (isVisible === undefined) {
                this.isMenuVisible = !this.isMenuVisible;
            } else {
                this.isMenuVisible = isVisible;
            }
        }
    },
})
