import React, { useEffect, useState } from 'react';
import close from '../assets/images/white_close_4x.png';
import { Button } from '@mui/material';

const sx = {
    button: {
        minHeight: 'unset',
    }
}
const TraitCard = ({ trait, onClick, image, traitImg }) => {
    //console.log(traitImg)

    // const handleClaim = () => {
    //     if (claimUrl) {
    //         window.open(`${claimUrl}`, '_blank')
    //     }
    // }
    return (
        <>
            <img
                className='close-button'
                src={close}
                alt=''
                onClick={(e) => onClick(e)}
            />
            <div className='trait-card-root'
                style={{ backgroundImage: `url(${image})`, }}
            >
                <div className='trait-card-content' >
                    <div className='trait-card-content-holder' >
                        <div className='trait-card-trait-icon-holder'>
                            <img src={traitImg} alt='' />
                        </div>
                        <div className='trait-card-title-holder' >
                            <p className='trait-card-title'>{trait.name}</p>
                        </div>
                        <div className='trait-card-description-holder' >
                            <p className='trait-card-description'>{trait.description}</p>
                        </div>
                        {/* {claimUrl && <div className='trait-card-button-holder'>
                            <Button
                                variant="banner"
                                sx={sx.button}
                                onClick={() => handleClaim()}
                            >
                                Claim
                            </Button>
                        </div>
                        } */}
                    </div>
                </div>
            </div>

        </>
    );
};


export default TraitCard;
