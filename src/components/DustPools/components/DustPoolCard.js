import React from 'react';
import './DustPoolCard.css'
import CounterBar from './CounterBar.jsx';
const DustPoolCard = (props)=>{
    return (<>
        <div className='dust-pool-card' onClick={props.handleClick}>
        <img className='dust-pool-card-img' src={props.imgSrc}/>
        <div className='text-box'>
            <p className='dust-pool-title'>Girls, Robots, Dragons</p>
            <p className='dust-pool-card-label'>COUNTER</p>
            <p className='mb-1'><b>60 out of 100 left</b></p>
            <CounterBar value={100} maxValue={200} />
            <p className='dust-pool-card-label'>Price</p>
            <p><b>10.000 D</b></p>
            <button className='dust-pool-btn'>Connect</button>
        </div>
        </div>
    </>)
}

export default DustPoolCard