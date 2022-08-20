# nft-info

nft-info is a javascript library for getting information on nft collections like floor price, market cap, number of owners, total number of nfts, total sales, and total volume.

## Installation


```bash
npm i nft-info
```

## Usage

```js
const nftInfo = require('nft-info')

const collection = 'urlCollectionNname' //Make sure to enter the collection url name properly. This is the part after the https://opensea.io/collection/

nftInfo.getFloorPrice(collection) //console.logs the floor price for the inputted collection
nftInfo.getMarketCap(collection) //console.logs the market cap for the inputted collection
nftInfo.getNumberOwners(collection) //console.logs the number of owners for the inputted collection
nftInfo.getTotalNumber(collection) //console.logs the total number of nfts for the inputted collection
nftInfo.getTotalSales(collection) //console.logs the total number of sales for the inputted collection
nftInfo.getTotalVolume(collection) //console.logs the total ether volume for the inputted collection

```

# Examples
```js

const collection = 'boredapeyachtclub' //https://opensea.io/collection/boredapeyachtclub

nftInfo.getFloorPrice(collection) //will console.log 69.42

nftInfo.getMarketCap(collection) //will console.log 950133.6394799055

nftInfo.getNumberOwners(collection) //will console.log 6437

nftInfo.getTotalNumber(collection) //will console.log 10000

nftInfo.getTotalSales(collection) //will console.log 26956

nftInfo.getTotalVolume(collection) //will console.log 651806.4158144317

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Another way to help is my staring our github repo.

## License
[MIT](https://choosealicense.com/licenses/mit/)
