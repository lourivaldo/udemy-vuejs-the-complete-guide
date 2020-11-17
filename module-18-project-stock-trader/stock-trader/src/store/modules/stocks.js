import stocks from '../../data/stocks';

export default {
    state: {
        stocks: [],
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
    },
    actions: {
        /* eslint-disable */
        buyStock({ commit }, order) {
            commit();
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
    },
    getters: {
        stocks: state => state.stocks,
    },
}
