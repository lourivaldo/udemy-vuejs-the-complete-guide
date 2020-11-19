import stocks from '../../data/stocks';

export default {
    state: {
        stocks: [],
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            })
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
        randomizeStocks({commit}) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks: state => state.stocks,
    },
}
