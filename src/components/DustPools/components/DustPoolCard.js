import React from 'react';
import './DustPoolCard.css'
import CounterBar from './CounterBar.jsx';
const DustPoolCard = (props)=>{
    return (<>
        <div className='dust-pool-card'>
        <img className='card-img' src={props.imgSrc}/>
        <div className='text-box'>
            <p className='dust-pool-title'>Title</p>
            <p>Counter</p>
            <p>60 out of 100 left</p>
            <CounterBar value={100} maxValue={200} />
        </div>
        </div>
    </>)
}

export default DustPoolCard