const axios = require('axios').default;

async function getTotalNumber(collection){

    if (collection == '') {
        return console.log("Please provide a url collection name. This is the part after the https://opensea.io/collection/")
      }
      axios.get(`https://api.opensea.io/api/v1/collection/${collection}/stats`)
          .then(async resp => { 
        
              price =  Number(resp.data.stats.total_supply)
              //console.log(resp.data)
              console.log(resp.data.stats.total_supply)
          })
      .catch(async err => {
              // Handle Error Here
              console.error(`The collection "${collection}" does not exist. Make sure to enter the collection url name properly. This is the part after the https://opensea.io/collection/`);
          });

}

module.exports = getTotalNumber