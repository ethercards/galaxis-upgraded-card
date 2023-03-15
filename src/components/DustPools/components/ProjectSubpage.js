import './ProjectSubpage.css';
import './Counter.css';
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
import DustImg from '../../../assets/images/dustPools/dust-card.jpg';

const ShowNextPreviosProject = ({prev,next,idx,mediaUrl,handler}) =>{

    return <div className='snp-root'>
        <div className={`previous-box snp-box ${prev===null?'disabled':''}`} onClick={()=>{if(prev){handler(idx-1)}}}>
          {prev&&<>
            <div><img src={mediaUrl+prev.images[0].src} style={{maxHeight:"86px"}}/></div>
            <div className='snp-text'>
                <span>previous</span>
                <div className='snp-text-p-n'>
                    {prev.name}
                </div>
            </div>
          </>}
        </div>

        <div className='snp-divider'>
            <img src={divider}/>
        </div>

        <div className={`next-box snp-box ${next===null?'disabled':''}`} onClick={()=>{if(next){handler(idx+1)}}}>
            {next&&<>
              <div className='snp-text text-right'>
                  <span>next</span>
                  <div className='snp-text-p-n'>
                      {next.name}
                  </div>
              </div>
              <div><img src={mediaUrl+next.images[0].src} style={{maxHeight:"86px"}}/></div>
            </>}
        </div>
    </div>
}

const ProjectSubpage = ({pools, currentIndex ,address, dust, d4p, ethersProvider, chainId, handleConnect, handleBack, handleChangePool, mediaBaseUrl}) => {

  const [pool,setPool] = useState(null);
  const [prevPool,setPrevPool] = useState(null);
  const [nextPool,setNextPool] = useState(null);



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
  const [cardRevealed, setCardRevealed] = useState(false);
  const [revealedImage, setRevealedImage] = useState(null);

  const videoRef = useRef(null);

  const MEDIA_BASE_URL = mediaBaseUrl?mediaBaseUrl:chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
    

  useEffect(()=>{
    setPool(pools[currentIndex]);
    let p = null;
    let n = null;

    if(currentIndex>0){
      p=pools[currentIndex-1];
    }

    if(currentIndex<pools.length-1){
      n=pools[currentIndex+1];
    }

    setPrevPool(p);
    setNextPool(n);

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

   // getUserHashes();


},[currentIndex]);

useEffect(()=>{
  const getUserHashes = async () => {
    let res = await d4p.numberOfHashes(address).catch(e=>console.log);

    if(res && Number(res)>0){
      console.log('number of hashes',Number(res));
      let storedHash = localStorage.getItem('user_hash'+pool.vault_id);

      if(storedHash){
          setUserHash(storedHash);
          setTxHash(null);
      }else{
          setUserHash(null);
      }
    }

    let tx = localStorage.getItem('tx_hash'+pool.vault_id);
    if(tx){
        setTxHash(tx);
    }else{
        setTxHash(null);
    }
  }
  
  if(address && d4p && pool){
    console.log('get user hashes');
    getUserHashes();
  }

},[address, d4p, pool]);

/* const getUserHashes = async () => {

} */

useEffect(()=>{
  const waitForTx = async ()=>{
      setTxInProgress(true);
      let tr = await ethersProvider.waitForTransaction(txHash,1).catch(e=>{console.log(e);});
      if(tr){
          if(tr.status>0){
              toast.success('Transaction sent.');

              //console.log('wait for punks');
          }
      }
      
      localStorage.removeItem('tx_hash'+pool.vault_id);
      setTxInProgress(false);

      let b = await dust.balanceOf(address).catch(e=>{console.log(e)});
      if(b){
          setDustBalance(b);
      }

      let numOfHashes = await d4p.numberOfHashes(address).catch(e=>{console.log(e)})
      
      
      if(numOfHashes ){
          let lastUserHash = await d4p.userhashes(address,Number(numOfHashes)-1).catch(e=>{console.log(e)})
          
          console.log('Last hash:',lastUserHash);
          
          if(lastUserHash){
              setTxHash(null);
              setUserHash(lastUserHash);
              localStorage.setItem('user_hash'+pool.vault_id,lastUserHash);
          }

          /* const userHashes={
              0: [0x1],
              1: [],
              2: [0x22],
              3: [0x333],
              4: []
          } */
      
      }
      setTxHash(null);
  }

  if(txHash){
      waitForTx();
  }
},[txHash]);

useEffect(()=>{
  if(userHash){
      let intervalId = setInterval(async()=>{

   /*    console.log('stored hash',userHash);

      let lastUserHash = await d4p.userhashes(address,0).catch(e=>{console.log(e)})
      console.log('Last hash:',lastUserHash);


 */

      let id = await d4p.redeemedTokenId(userHash).catch(e=>{console.log(e)});
          console.log('redeemed id',id);
      if(Number.parseInt(id._hex, 16)){
          if(pool.vaultData.tokenContract){

              let tUri = await pool.vaultData.tokenContract.tokenURI(id).catch(e=>{console.log(e)});

            //  console.log('uri',tUri);

            if(tUri.indexOf('ipfs://')===0 ){
              let url = tUri.replace('ipfs://','/ipfs/');
              if(url.indexOf('/ipfs') !== 0){
                  url = '/ipfs/'+tUri;
              }
  
               tUri='https://ether-cards.mypinata.cloud'+url;
            }
            
              let meta = await getTokenURI(tUri);

              if(meta){
                  setTokenMeta(meta);
              }else{
                  //meebit cors hack :/

                  if(pool.vault_id===1){
                      //if meebit...
                     let id = tUri.split('/').pop();
                     let image = "https://meebits.larvalabs.com/meebitimages/characterimage?index=****&type=full&imageType=jpg".replace('****',id);
                     setTokenMeta({id,image});
                  }


              }


            console.log(meta);
          }
          clearInterval(intervalId);
          console.log('redeemed id!!!',id);
      }


      },10000);

      
      return () => {
          if (intervalId) {
              clearInterval(intervalId);
          }
      };
  }


},[userHash]);


useEffect(()=>{
  if(tokenMeta){
      try{
          const img = new Image();
          img.src=getRemoteImageUrl(tokenMeta.image);
      }catch (e){
          console.log('errror',e);
      }
      setRevealedImage(getRemoteImageUrl(tokenMeta.image));

      videoRef.current.play();
      setVideoVisible(true);
      //!
      setTimeout(()=>{videoFinished()},5000);
  }
},[tokenMeta]);

const videoFinished = ()=>{
  setUserHash(null);
  localStorage.removeItem('user_hash'+pool.vault_id);
  setCardRevealed(true);
  setVideoVisible(false);
}

const getTokenURI = (uri)=>{
  return fetch(uri)
    .then(res => res.json())
    .then(
      (result) => {
        //console.log('result',result);
        return result;
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {

        console.log('***Error(fetch):', error);

        return null;
      }
    );
}

const getRemoteImageUrl=(src)=>{
  if(src.indexOf('http') !== 0){
    if(src.indexOf('data:image')<0){
          if(src.indexOf('/static') === 0){
              // local file
              return src;
          }else{
              // ipfs
              let url = src.replace('ipfs://','/ipfs/');
              if(url.indexOf('/ipfs') !== 0){
                  url = '/ipfs/'+src;
              }
              return 'https://ether-cards.mypinata.cloud'+url;
          }
    }else{
        // embedded
        return src;
    }
  }
  return src;
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
    const data=ethers.utils.hexZeroPad(pool.vault_id,32);


    let dc = dust.connect(ethersProvider.getSigner());
    let gasLimit= BigNumber.from(550000);// await dc.estimateGas.send(dust4PunksContract.address,itemPrice,data).catch(e =>{toast.error(e.error.message)});
   // console.log('GASLIMIT',gasLimit);

    let tx = null;
    setWaitingForApproval(true);
    tx = await dc.send(d4p.address,pool.vaultData.vaultPrice,data,{gasLimit}).catch(e =>{toast.error(e.message)});
    setWaitingForApproval(false);
    setTxInProgress(true);
    if(tx){
        localStorage.setItem('tx_hash'+pool.vault_id,tx.hash);
        setTxHash(tx.hash);
        
    }else{
        setTxInProgress(false);
    }
  }


  return (<>
    {pool!==null&&<div className="pool-ps-root">
      
      {(!txHash && !userHash && !cardRevealed)&&<>
        <button className='pool-ps-btn' onClick={handleBack}><span>&#9666;</span><p>Back</p></button>
        <div className="pool-ps-card-and-descipton">
          <div className="pool-ps-card-and-descipton-inner ps-left">
            <img src={MEDIA_BASE_URL+pool.images[0].src} style={{ maxWidth: '100%', width:'450px' }} />
          </div>
          <div className="pool-ps-card-and-descipton-inner ps-right">
            <div className="text-box w-100">
                <p className='dust-pool-card-label'>VAULT</p>
              <p className="dust-pool-title ">{pool.name}</p>
              <p className="dust-pool-card-label">COUNTER</p>
              <p className="mb-1">
                <b>{pool.vaultData.available} out of {pool.total_supply} left</b>
              </p>
              <CounterBar value={pool.vaultData.available} maxValue={pool.total_supply} />
              <p className="dust-pool-card-label">Your balance</p>
              <div className='dpc-box'>
              <p style={{margin:0}}>
                <b>{dustBalance?Number(ethers.utils.formatEther(dustBalance)).toLocaleString()+' D':'N/A'}</b>
              </p>
              </div>
              
              <p className="dust-pool-card-label">Price</p>
              <div className='dpc-box'>
              <p style={{margin:0}}>
                <b>{Number(ethers.utils.formatEther(pool.vaultData.vaultPrice)).toLocaleString()+' D'}</b>
              </p>
              </div>

              <div className='ps-text-bottom'>
              {pool.vaultData.available>0 &&
                <button className="dust-pool-btn" onClick={connectOrExhange}>{address?'Exchange':'Connect'}</button>
              }
              </div>
            </div>
          </div>
        </div>
        <div style={{display:'block'}}>
          <p className="dust-pool-card-label mt-2" style={{fontFamily:"poppins-semibold", textTransform:"capitalize", fontSize:"18px"}}><b>Description</b></p>
          <div dangerouslySetInnerHTML={{__html: pool.description.replace('*****',Number(ethers.utils.formatEther(pool.vaultData.vaultPrice)).toLocaleString())}}/>
        </div>
        

        <ShowNextPreviosProject prev={prevPool} next={nextPool} idx={currentIndex} mediaUrl={MEDIA_BASE_URL} handler={handleChangePool}/>

      </>}

      {(txHash || userHash)&&
        <>
        <button className='pool-ps-btn' onClick={handleBack}><span>&#9666;</span><p>Back to pools</p></button>
        <div className="pool-ps-card-and-descipton">
          <div className="pool-ps-card-and-descipton-inner ps-left">
            <img src={DustImg} style={{ maxWidth: '100%' }} />
          </div>
          <div className="pool-ps-card-and-descipton-inner ps-right">
            <div className="text-box w-100">
              
              {txHash&&
              <>
                <p className="dust-pool-title" style={{lineHeight:"35px", marginBottom:"20px"}}>Waiting for transaction</p>
                <p className="dust-pool-card-label" style={{textTransform:"none"}}>Please wait until the transaction is complete.<br/>You can check the status on  <a className="es-link" href={chainId===1?'https://etherscan.io':'https://rinkeby.etherscan.io' + '/tx/'+txHash} target="_blank" rel="noreferrer">Etherscan.</a></p>
                
              </>
              }
              
              {userHash&&
              <>
                <p className="dust-pool-title" style={{lineHeight:"35px", marginBottom:"20px"}}>VRF Initialised!<br/>Transition was successful!</p>
                <p className="dust-pool-card-label" style={{textTransform:"none"}}>Transition was successful. Chainlink's VRF now picks a random Digital Collectible from the vault. Please be patient as this process may take several minutes.</p>
              </>
              }

              <div className="counter-circle" style={{margin:"45px auto"}}>
                <div className="counter-rotary-holder" id='txRotator'>
                  <div className="counter-rotary-item" />
                </div>
                <div className="counter-shadow">
                  <div className="counter-content-holder">
                    <div className="counter-text">LOADING</div>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>

        <div className={`video-box  ${videoVisible&&'visible'}`}>
            <video
                    ref={videoRef}
                    onEnded={videoFinished}
                    playsInline
                    style={{width:'100%'}}
                    src='https://ether-cards.mypinata.cloud/ipfs/QmPHZNPA8oqwdiMZ2m3YApyEpFUpRKj6XfxiKiLi5Gr1Qk' 
            /> 
        </div>

        </>
      }

      {cardRevealed&&
      <>
        <button className='pool-ps-btn' onClick={handleBack}><span>&#9666;</span><p>Back to pools</p></button>
          <div className="pool-ps-card-and-descipton">
            <div className="pool-ps-card-and-descipton-inner ps-left">
              <img src={revealedImage} style={{ maxWidth: '100%' }} />
            </div>
            <div className="pool-ps-card-and-descipton-inner ps-right">
              <div className="text-box w-100">
                <p className="dust-pool-title" style={{lineHeight:"35px", marginBottom:"20px"}}>Congratulations!<br/>You Got It!</p>
                <p className="dust-pool-card-label" style={{textTransform:"none"}}>Your brand new Digital Collectible can be viewed right now in your wallet, or go back to dust pools to buy some more!</p>
                <div className='ps-text-bottom' style={{display:"flex", flexDirection:"column", rowGap:"10px", maxWidth:"170px", marginLeft:"auto", marginRight:"auto"}}>
                <button className="dust-pool-btn" onClick={()=>{setCardRevealed(false);setUserHash(false);setTxHash(false)}}>Buy more</button>
                {/* <a className="dust-pool-btn" target="_blank" rel="noreferrer" href={chainId===1?'https://explorer.ether.cards/#/wallet':'https://explorer.burneth.com/#/wallet'}>Go to wallet</a> */}
                </div>
              </div>
            </div> 
          </div>
        </>
      
      }
      
      
      
      
      
      
      
      <TermsBox termsVisible={showTerms} handleClose={()=>setShowTerms(false)} handleAccept={onTermsAccepted} />
      <RestrictedAreaBox restrictedBoxVisible={showRestricted} handleClose={()=>setShowRestricted(false)} />
      {waitingForApproval&&
       <div className="approval-mask"/>
      }
    </div>}
    </>
  );
};

export default ProjectSubpage;
