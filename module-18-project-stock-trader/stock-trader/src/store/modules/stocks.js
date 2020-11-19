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
        buyStock({ commit, state }, order) {
            const record = state.stocks.find(e => e.id === order.stockId);
            order.name = record.name;
            commit('buyStock', order);
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
    },
    getters: {
        stocks: state => state.stocks,
    },
}
