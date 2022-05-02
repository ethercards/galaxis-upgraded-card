import './ProjectSubpage.css';
import React, { useEffect, useRef, useState } from 'react';
import {BigNumber, ethers} from 'ethers';
import axios from 'axios';
import { toast } from 'react-toast';
import blockedCountries from "./blockedCountries";
import DragonImg from '../../../assets/images/dustPools/dragon.jpg';
import CounterBar from './CounterBar.jsx';
import divider from '../../../assets/images/dustPools/divider.png'
import TermsBox from './TermsBox';
import RestrictedAreaBox from './RestrictedAreaBox';


const ShowNextPreviosProject = () =>{
    return <div className='snp-root'>
        <div className='previous-box snp-box'>
            <div><img src={DragonImg} style={{maxHeight:"100%"}}/></div>
            <div className='snp-text'>
                <span>previous</span>
                <div className='snp-text-p-n'>
                    Mutant ape yacht club
                </div>
            </div>
        </div>
        <div className='snp-divider'>
            <img src={divider}/>
        </div>
        <div className='next-box snp-box'>
            
            <div className='snp-text text-right'>
                <span>next</span>
                <div className='snp-text-p-n'>
                    Mutant ape yacht club
                </div>
            </div>
            <div><img src={DragonImg} style={{maxHeight:"100%"}}/></div>
        </div>
    </div>
}

const ProjectSubpage = ({pool, address, dust, d4p, ethersProvider, chainId, handleConnect, handleBack}) => {

  const [dustBalance,setDustBalance] = useState(null);
  const [waitingForApproval, setWaitingForApproval]=useState(false);
  const [txInProgress, setTxInProgress]=useState(false);
  const [txHash,setTxHash]=useState(null);
  
  const [userCountryCode, setUserCountryCode] = useState(null);
  const [countryBlocked, setCountryBlocked] = useState(false);
  const [showRestricted, setShowRestricted] = useState(false);
  const [userHash,setUserHash] = useState(null);
  
  const [showTerms,setShowTerms]=useState(false);
  const [showFsTc, setShowFsTc] = useState(false);
  
  const [tokenMeta,setTokenMeta] = useState(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [nftVisible, setNftVisible] = useState(false);

  const videoRef = useRef(null);

  useEffect(()=>{
    console.log('sub page mounted',chainId);
    const fetchUserCountry = async () => {
        const res = await axios.get(`${chainId===1?'https://heroku.ether.cards':'https://heroku-staging.ether.cards'}/api/location`).catch(e => console.log(e));
        if (res && res.data && res.data.country_code) {
            const countryCode = res.data.country_code;
            console.log('CC',countryCode);
            setUserCountryCode(countryCode);
        } else {
            toast.error('Unable to determine your country');
        }
    }
    
    fetchUserCountry();

    getUserHashes();


},[]);

useEffect(()=>{
  const getUserHashes = async () => {
    let res = await d4p.numberOfHashes(address).catch(e=>console.log);

    if(res && Number(res)>0){
      console.log('number of hashes',Number(res));
      let storedHash = localStorage.getItem('user_hash'+pool.id);

      if(storedHash){
          setUserHash(storedHash);
          setTxHash(null);
      }else{
          setUserHash(null);
      }
    }

    let tx = localStorage.getItem('tx_hash'+pool.id);
    if(tx){
        setTxHash(tx);
    }else{
        setTxHash(null);
    }
  }
  
  if(address && d4p){
    console.log('get user hashes');
    getUserHashes();
  }




},[address, d4p]);

const getUserHashes = async () => {




}

useEffect(() => {
  if (userCountryCode) {
      const blocked = Object.keys(blockedCountries).includes(userCountryCode);
      console.log('blocked?',blocked);
      setCountryBlocked(blocked);
  }
}, [userCountryCode]);








  useEffect(()=>{
    

    if(dust && address){
      getDustBalance();
    }
  },[address]);


  const getDustBalance = async ()=>{
    let balance = await dust.balanceOf(address).catch(e=>console.log);
    console.log('balance',dustBalance);
    if(balance){
      setDustBalance(balance);
    }

  }

  const connectOrExhange = ()=>{
    if(address){
      doTheExchange();
    }else{
      handleConnect();
    }
  }

  const doTheExchange = async () => {
    if(countryBlocked){
        setShowRestricted(true);
    }else{
        let b = Number.parseFloat(ethers.utils.formatEther(dustBalance));
        let p = Number.parseFloat(ethers.utils.formatEther(pool.vaultData.vaultPrice));
        
        console.log(b,p);

        if(b < p){
            console.log('NOT ENOUGH DUST');
            toast.warn('Your Dust balance is lower than the item price.');
            return
        }
        setShowTerms(true);
    }
  }

  const onTermsAccepted = async () => {
    setShowTerms(false);
    //const data="0x0000000000000000000000000000000000000000000000000000000000000000";
    const data=ethers.utils.hexZeroPad(pool.id,32);


    let dc = dust.connect(ethersProvider.getSigner());
    let gasLimit= BigNumber.from(550000);// await dc.estimateGas.send(dust4PunksContract.address,itemPrice,data).catch(e =>{toast.error(e.error.message)});
   // console.log('GASLIMIT',gasLimit);

    let tx = null;
    setWaitingForApproval(true);
    tx = await dc.send(d4p.address,pool.vaultData.vaultPrice,data,{gasLimit}).catch(e =>{toast.error(e.message)});
    setWaitingForApproval(false);
    setTxInProgress(true);
    if(tx){
        localStorage.setItem('tx_hash'+pool.id,tx.hash);
        setTxHash(tx.hash);
        
    }else{
        setTxInProgress(false);
    }
  }


  return (
    <div className="pool-ps-root">
        <button className='pool-ps-btn' onClick={handleBack}><span>&#9666;</span><p>Back</p></button>
      <div className="pool-ps-card-and-descipton">
        <div className="pool-ps-card-and-descipton-inner ps-left">
          <img src={DragonImg} style={{ maxWidth: '100%' }} />
        </div>
        <div className="pool-ps-card-and-descipton-inner ps-right">
          <div className="text-box w-100">
              <p className='dust-pool-card-label'>POOL</p>
            <p className="dust-pool-title ">{pool.name}</p>
            <p className="dust-pool-card-label">COUNTER</p>
            <p className="mb-1">
              <b>{pool.vaultData.available} out of {pool.totalSupply} left</b>
            </p>
            <CounterBar value={pool.vaultData.available} maxValue={pool.totalSupply} />
            <p className="dust-pool-card-label">Your balance</p>
            <div className='dpc-box'>
            <p style={{margin:0}}>
              <b>{dustBalance?Number(ethers.utils.formatEther(dustBalance)).toLocaleString()+' D':'Connect your wallet to see your dust balance'}</b>
            </p>
            </div>
            
            <p className="dust-pool-card-label">Price</p>
            <div className='dpc-box'>
            <p style={{margin:0}}>
              <b>{Number(ethers.utils.formatEther(pool.vaultData.vaultPrice)).toLocaleString()+' D'}</b>
            </p>
            </div>

            <div className='ps-text-bottom'>

            <button className="dust-pool-btn" onClick={connectOrExhange}>{address?'Exchange':'Connect'}</button>
            </div>
          </div>
        </div>
      </div>
      <p className="dust-pool-card-label mt-2" style={{fontFamily:"poppins-semibold", textTransform:"capitalize", fontSize:"18px"}}><b>Description</b></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <ShowNextPreviosProject/>
      <TermsBox termsVisible={showTerms} handleClose={()=>setShowTerms(false)} handleAccept={onTermsAccepted} />
      <RestrictedAreaBox restrictedBoxVisible={showRestricted} handleClose={()=>setShowRestricted(false)} />
      {waitingForApproval&&
       <div className="approval-mask"/>
      }
    </div>
  );
};

export default ProjectSubpage;
