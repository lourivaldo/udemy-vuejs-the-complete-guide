const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    auth: {
        authSource: 'admin'
    },
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
};
mongoose.connect('mongodb://mongo/knowledge_stats', options)
    .catch(e => {
        const msg = 'Não foi possivel conectar com Mongo';
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
    });
