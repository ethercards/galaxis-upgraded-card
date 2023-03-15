import {ethers} from 'ethers';
import AddressesMain from './addresses/addresses-1.json';
import AddressesGoerli from './addresses/addresses-5.json';
import Dust from './abi/Dust.json';
import Dust4Punks from './abi/Dust4Punks.json';
import Zoom2 from './abi/Zoom2.json';
import Dummy from './abi/Dummy721.json'; 

const contractAbis = {Dust,Dust4Punks,Zoom2};
const addresses = {
1:     {addr: AddressesMain, name:'Main'},
5:     {addr: AddressesGoerli, name:'Goerli'}
};

export const getContract = async (contractName,provider) => {
    //console.log('get contract fn',provider);

    let ntw = await provider.getNetwork();
    //console.log('nnetwork',ntw);

    let contractAbi = contractAbis[contractName];
    let address = addresses[ntw.chainId].addr[contractName];
    
    let contract = null;

    try{
        contract = new ethers.Contract(address, contractAbi.abi, provider);
    }catch{
        console.log('contract not found');
    }
    //console.log(contractName,contract);
    return contract;
}

export const getDummy721 = async (address,provider) => {
    let contract = null;
    
    if(!address){ 
        return contract;
    }
    
    try{
        contract = new ethers.Contract(address, Dummy.abi, provider);
    }catch{
        console.log('contract not found');
    }

    return contract;

}