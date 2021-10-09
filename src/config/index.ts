const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    snipeit: {
        token:  process.env.TOKEN,
        url:  process.env.URL
    }
};  