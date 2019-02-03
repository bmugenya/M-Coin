const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index,timestamp,data,prevHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();

    }

    calculateHash(){

        return SHA256(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString()
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0,"2019-02-03","Genesis block","0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newBlock){
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    } 
}

let medhaPesa = new Blockchain();
medhaPesa.addBlock(new Block(1,"2019-02-03" ,{ amount : 4}));
medhaPesa.addBlock(new Block(1,"2019-02-03 ",{ amount : 10}));


console.log(JSON.stringify(medhaPesa,null,4));