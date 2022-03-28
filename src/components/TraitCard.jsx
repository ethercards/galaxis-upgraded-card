import React, { useEffect, useState } from 'react';
import close from '../assets/images/white_close_4x.png';


const TraitCard = ({ trait, onClick, image }) => {
    return (
        <>
            <img
                className='close-button'
                src={close}
                alt=''
                onClick={() => onClick()}
            />
            <div className='trait-card-root'
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className='trait-card-content' >
                    <div className='trait-card-content-holder' >
                        <div className='trait-card-trait-icon-holder'>
                            <img src={trait.icon_white} alt=''  />
                        </div>
                        <div className='trait-card-title-holder' >
                            <p className='trait-card-title'>{trait.name}</p>
                        </div>
                        <div className='trait-card-description-holder' >
                            <p className='trait-card-description'>{trait.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TraitCard;
