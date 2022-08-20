const axios = require('axios').default;

async function getFloorPrice(collection,price){

    if (collection == '') {
        return console.log("Please provide a url collection name. This is the part after the https://opensea.io/collection/")
      }
      axios.get(`https://api.opensea.io/api/v1/collection/${collection}/stats`)
          .then(async resp => { 
        
            await console.log(resp.data.stats.floor_price)

          })
      .catch(async err => {
              // Handle Error Here
              console.error(`The collection "${collection}" does not exist. Make sure to enter the collection url name properly. This is the part after the https://opensea.io/collection/`);
          });

}
//bob returns Promise {undefined}
module.exports = getFloorPrice
