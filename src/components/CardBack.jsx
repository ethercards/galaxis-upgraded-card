
import React, { useEffect, useState } from 'react'
// import FullscreenModal from '../../Components/FullscreenModal'
import flip_icon from '../assets/images/flip-icon.svg'

const CardBack = ({ backImage, onClick }) => {
    const [showFlipIcon, setshowFlipIcon] = useState(false);
    const [open, setOpen] = useState(false);
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
    const [mobileView, setmobileView] = useState(false)
    const setFullscreenSource = (src) => {
        setFullscreenSrc(src);
        setOpen(true);
    };
    useEffect(() => {
        if (window.innerWidth < 900) {
            setmobileView(true);
        }
    }, [])

    return (
        <>
            <div className='card-back-root'
                style={{ backgroundImage: `url(${backImage})` }}
                onMouseOver={() => { setshowFlipIcon(true) }}
                onMouseLeave={() => { setshowFlipIcon(false) }}
            >
                <div className="card-icons-holder">
                    <img src={flip_icon} className='flip-icon' alt="not found"
                        style={{ display: showFlipIcon || mobileView ? 'block' : 'none' }}
                        onClick={(e) => {
                            onClick(e);

                        }}
                    />
                </div>
            </div>
            {/* <FullscreenModal setOpen={setOpen} isOpen={open} imgSrc={fullscreenSrc} /> */}
        </>
    )
}

export default CardBack