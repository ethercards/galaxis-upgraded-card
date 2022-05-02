import React, { useEffect } from 'react';
import {ethers} from 'ethers';
import './DustPoolCard.css'
import CounterBar from './CounterBar.jsx';
const DustPoolCard = ({card,handleClick})=>{

    useEffect(()=>{
        console.log('card',card);
    },[]);

    const onClickHandler = ()=>{
        console.log('card id on click',card.id);
        handleClick(card.id);
    }




    return (<>
        <div className='dust-pool-card'>
        <img className='dust-pool-card-img' src={card.imgSrc}/>
        <div className='text-box'>
            <p className='dust-pool-title'>{card.name}</p>
            <p className='dust-pool-card-label'  style={{marginBlockEnd: 0}}>COUNTER</p>
            <p className='mb-1'><b>{card.vaultData.available} out of {card.totalSupply} left</b></p>
            <CounterBar value={card.vaultData.available} maxValue={card.totalSupply} />
            <p className='dust-pool-card-label' style={{marginBlockEnd: 0}}>Price</p>
            <p><b>{card.vaultData.vaultPrice>0?Number(ethers.utils.formatEther(card.vaultData.vaultPrice)).toLocaleString()+' D':'TBA'}</b></p>
            <button className={`dust-pool-btn ${(card.vaultData.available===null||Number(card.vaultData.available)===0)?'disabled':''}`} disabled={(card.vaultData.available===null||Number(card.vaultData.available)===0)} onClick={onClickHandler}>Details</button>
        </div>
        </div>
    </>)
}

export default DustPoolCard