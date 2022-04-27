import React from 'react';
import './UpcomingCard.css'

const UpcomingCard = (props) =>{
    return <div className='upcoming-dust-pool-card'>
        <img src={props.imgSrc}/>
        <div className='upcoming-dust-pool-card-text'>
            <div className='upcoming-dust-pool-card-title'><b>{props.name}</b></div>
            <p style={{fontFamily:"poppins"}}>{props.price} D</p>
        </div>
    </div>
}

export default UpcomingCard;