const { Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('22e9763a26234f2120f6cb97ac991fd111cd1b914a60c1306e643a21dee49e3f');
const myWalletAddress = myKey.getPublic('hex');


let mCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key goes here',10);
tx1.signTransaction(myKey);
mCoin.addTransactions(tx1)



console.log("\n Starting the minner....");
mCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Mugenya is', mCoin.getBalanceOfAddress(myWalletAddress));












