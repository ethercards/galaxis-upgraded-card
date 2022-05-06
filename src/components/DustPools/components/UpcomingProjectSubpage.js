import React from 'react';
import './ProjectSubpage.css';
import './Counter.css';
import { useHistory, useLocation } from 'react-router-dom';



const UpcomingProjectSubpage = ({pool, chainId, handleBack}) => {

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


  return (<>
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
              
              
              <p className="dust-pool-card-label">Price</p>
              <div className='dpc-box'>
              <p style={{margin:0}}>
                <b>{pool.price?pool.price.toLocaleString()+' D':'TBA'}</b>
              </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:'block'}}>
          <p className="dust-pool-card-label mt-2" style={{fontFamily:"poppins-semibold", textTransform:"capitalize", fontSize:"18px"}}><b>Description</b></p>
          <div dangerouslySetInnerHTML={{__html: pool.description}}/>
        </div>
      </div>
    </>
  );
};

export default UpcomingProjectSubpage;
