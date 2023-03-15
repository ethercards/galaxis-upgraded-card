import React, { useEffect } from 'react';
import {ethers} from 'ethers';
import './DustPoolCard.css'
import CounterBar from './CounterBar.jsx';
const DustPoolCard = ({card,idx,chainId,handleClick, imageBaseUrl})=>{

  //  const MEDIA_BASE_URL = chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
    const MEDIA_BASE_URL = imageBaseUrl;//chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';


    const onClickHandler = ()=>{
        //console.log('card id on click',card.id);
        handleClick(idx);
    }




    return (<>
        <div className='dust-pool-card'>
        
        <div className='dust-pool-card-image-container'>
            <img className='dust-pool-card-img' src={MEDIA_BASE_URL+card.images[0].src}/>
        </div>
        
        <div className='text-box'>
            <p className='dust-pool-title'>{card.name}</p>
            <p className='dust-pool-card-label'  style={{marginBlockEnd: 0}}>COUNTER</p>
            <p className='mb-1'><b>{card.vaultData.available} out of {card.total_supply} left</b></p>
            <CounterBar value={card.vaultData.available} maxValue={card.total_supply} />
            <p className='dust-pool-card-label' style={{marginBlockEnd: 0}}>Price</p>
            <p><b>{card.vaultData.vaultPrice>0?Number(ethers.utils.formatEther(card.vaultData.vaultPrice)).toLocaleString()+' D':'TBA'}</b></p>
            <button style={{position:"absolute", bottom:"15px"}} className={`dust-pool-btn`}  onClick={onClickHandler}>Details</button>
        </div>
        </div>
    </>)
}

export default DustPoolCard