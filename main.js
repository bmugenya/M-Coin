const { Blockchain, Transaction} = require('./blockchain');
let mCoin = new Blockchain();
mCoin.createTransactions(new Transaction('address1','address2',100));
mCoin.createTransactions(new Transaction('address1','address2',50));

console.log("\n Starting the minner....");
mCoin.minePendingTransactions("Mugenya-address");

console.log('\nBalance of Mugenya is', mCoin.getBalancedOfAddress('Mugenya-address'));


console.log("\n Starting the minner again....");
mCoin.minePendingTransactions("Mugenya-address");

console.log('\nBalance of Mugenya is', mCoin.getBalancedOfAddress('Mugenya-address'));













