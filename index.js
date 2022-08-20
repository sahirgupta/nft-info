const axios = require('axios').default;
const getFloorPrice = require('./functions/getFloorPrice')
const getMarketCap = require('./functions/getMarketCap')
const getNumberOwners = require('./functions/getNumberOwners')
const getTotalNumber = require('./functions/getTotalNumber')
const getTotalSales = require('./functions/getTotalSales')
const getTotalVolume = require('./functions/getTotalVolume')


module.exports = {getFloorPrice, getMarketCap, getNumberOwners, getTotalNumber, getTotalSales, getTotalVolume}

