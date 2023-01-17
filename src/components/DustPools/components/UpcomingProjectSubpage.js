import React, { useEffect, useState } from 'react';
import './ProjectSubpage.css';
import './Counter.css';
import { useHistory, useLocation } from 'react-router-dom';
import CounterBar from './CounterBar.jsx';
import divider from '../../../assets/images/dustPools/divider.png'

const ShowNextPreviosProject = ({prev,next,idx,mediaUrl,handler}) =>{
  console.log(prev,next, idx, 'heeellllo')
  return <div className='snp-root'>
      <div className={`previous-box snp-box ${prev===null?'disabled':''}`} onClick={()=>{if(prev){handler(idx-1)}}}>
        {prev&&<>
          <div><img src={mediaUrl+prev.image_src} style={{maxHeight:"86px"}}/></div>
          <div className='snp-text'>
              <span>previous</span>
              <div className='snp-text-p-n'>
                  {prev.title}
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
                    {next.title}
                </div>
            </div>
            <div><img src={mediaUrl+next.image_src} style={{maxHeight:"86px"}}/></div>
          </>}
      </div>
  </div>
}

const UpcomingProjectSubpage = ({pools, chainId, handleBack, currentIndex, handleChangePool}) => {
  const [pool,setPool] = useState(null);
  const [prevPool,setPrevPool] = useState(null);
  const [nextPool,setNextPool] = useState(null);
  const [loading, setloading] = useState(true)

  const MEDIA_BASE_URL = chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
 
  const hist = useHistory();

  const onClickBackButton = ()=>{
    console.log(hist);

    if(hist.location.search===""){
      handleBack();
    }else{
    //  hist.push('/');
      hist.goBack();
    }
  }
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
  },[currentIndex]);
  return (<>
  {pool && 
    <div className="pool-ps-root">
      
        <button className='pool-ps-btn' onClick={onClickBackButton}><span>&#9666;</span><p>Back</p></button>
        <div className="pool-ps-card-and-descipton">
          <div className="pool-ps-card-and-descipton-inner ps-left">
            <img src={MEDIA_BASE_URL+pool.image_src} style={{ maxWidth: '100%', width:'580px' }} />
          </div>
          <div className="pool-ps-card-and-descipton-inner ps-right">
            <div className="text-box w-100">
                <p className='dust-pool-card-label'>VAULT</p>
              <p className="dust-pool-title ">{pool.title}</p>
              {pool.nr_of_nfts > 0 && <div>
                <p>
                  <span style={{fontWeight: '600'}}>{pool.nr_of_nfts}</span> of Digital Collectibles 
                </p>
                 <CounterBar maxValue={pool.nr_of_nfts} value={pool.nr_of_nfts}/> 
              </div>}
              <p className="dust-pool-card-label">Price</p>
              <div className='dpc-box'>
              <p style={{margin:0}}>
                <b>{(pool.price && parseInt(pool.price)>0)?pool.price.toLocaleString()+' D':'TBA'}</b>
              </p>
              </div>    
            </div>
          </div>
        </div>
        <div style={{display:'block'}}>
          <p className="dust-pool-card-label mt-2" style={{fontFamily:"poppins-semibold", textTransform:"capitalize", fontSize:"18px"}}><b>Description</b></p>
          <div dangerouslySetInnerHTML={{__html: pool.description}}/>
        </div>
        {<ShowNextPreviosProject prev={prevPool} next={nextPool} idx={currentIndex} mediaUrl={MEDIA_BASE_URL} handler={handleChangePool}/>}
      </div> }
    </>
  );
};

export default UpcomingProjectSubpage;
