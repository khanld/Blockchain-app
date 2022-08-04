import * as actionTypes from './actionTypes'
import accessMetaMask from '../../web3'
import abi from '../../contracts/Factory.json'
import { dispatchedAction } from '../utils'
import erc20ABI from '../../contracts/ERC-20'
import { ERC20Address, factoryAddress } from '../../address'

const startAccessing = () => dispatchedAction(actionTypes.START_ACCESSING)
const accessFailure = () => dispatchedAction(actionTypes.ACCESS_FAILURE)

export const initState = () => async dispatch => {
    dispatch(startAccessing())

    try {
        const web3 = await accessMetaMask()
        const account = web3.currentProvider.selectedAddress
        const factory = new web3.eth.Contract(abi, factoryAddress)
        const erc20Contract = new web3.eth.Contract(erc20ABI, ERC20Address)
        const JCTValue = await factory.methods.convertJCTToEther().call()

        let balance = 0;
        let issuer = {}
        let company = {}
        let erc20Token = 0;
        let isExpired = false

        if (account) {
            balance = await factory.methods.balanceOf(account).call()
            erc20Token = await erc20Contract.methods.balanceOf(account).call()
            isExpired = await factory.methods.isExpired(account).call()

            issuer.registered = await factory.methods.issuers(account).call()
            company.registered = await factory.methods.companies(account).call()

        }


        dispatch(dispatchedAction(actionTypes.INIT_STATE, { 
            web3, factory, balance, issuer, company, erc20Contract, erc20Token, JCTValue, isExpired
        }))
    } catch (error) {
        console.log(error)
        dispatch(accessFailure())
    }

}

export const chosenJobIndex = (index) => dispatchedAction(actionTypes.CHOSEN_JOB_INDEX, { index })

export const updateJCTTokens = (erc20Contract, account) => async dispatch => {
    const erc20Token = await erc20Contract.methods.balanceOf(account).call()
    dispatch(dispatchedAction(actionTypes.UPDATE_JCT_TOKENS, { erc20Token }))
}

export const updateJCTValue = (factory) => async dispatch => {
    const JCTValue = await factory.methods.convertJCTToEther().call()
    dispatch(dispatchedAction(actionTypes.UPDATE_JCT_VALUE, { JCTValue }))
}