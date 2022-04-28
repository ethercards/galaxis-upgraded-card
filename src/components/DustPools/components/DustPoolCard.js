import React, { useEffect } from 'react';
import './DustPoolCard.css'
import CounterBar from './CounterBar.jsx';
const DustPoolCard = ({card,handleClick,address})=>{

    useEffect(()=>{
        console.log('card',card);
    },[]);

    const onClickHandler = ()=>{
        console.log('address on click',address);
        if(address){
            handleClick(card.poolId);
        }else{
            handleClick(null); 
        }
    }




    return (<>
        <div className='dust-pool-card'>
        <img className='dust-pool-card-img' src={card.imgSrc}/>
        <div className='text-box'>
            <p className='dust-pool-title'>{card.name}</p>
            <p className='dust-pool-card-label' style={{marginBlockStart: 0}}>COUNTER</p>
            <p className='mb-1'><b>60 out of 100 left</b></p>
            <CounterBar value={100} maxValue={200} />
            <p className='dust-pool-card-label' style={{marginBlockStart: 0}}>Price</p>
            <p><b>10.000 D</b></p>
            <button className='dust-pool-btn'  onClick={onClickHandler}>{address?'Exchange':'Connect'}</button>
        </div>
        </div>
    </>)
}

export default DustPoolCard