import Web3 from 'web3';
const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/e5702e9ae7b043afa15c683f23c73cde'
)

const accessMetaMask = async () => {
    try {
        await window.ethereum.enable()
        return new Web3(window.web3.currentProvider)
    } catch (e) {
        return new Web3(provider)
    }

}

export default accessMetaMask