import HDWalletProvider from "truffle-hdwallet-provider";
import Web3 from 'web3'
const mnemonic = "melody gap water world roast until between worry only ring urban air";
let provider = new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/e5702e9ae7b043afa15c683f23c73cde');

export default new Web3(provider);