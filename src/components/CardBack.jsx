
import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react';
// import FullscreenModal from '../../Components/FullscreenModal'
import flip_icon from '../assets/images/flip-icon.svg'

const CardBack = forwardRef(({ backImage, onClick, frontIsVideo, setTheImageRatio, setLoading }, imageRef) => {
    const [showFlipIcon, setshowFlipIcon] = useState(false);
    const [open, setOpen] = useState(false);
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
    const [mobileView, setmobileView] = useState(false)
    const [backIsVideo, setbackIsVideo] = useState(false)
    const setFullscreenSource = (src) => {
        setFullscreenSrc(src);
        setOpen(true);
    };
    useEffect(() => {
        if (window.innerWidth < 900) {
            setmobileView(true);
        }
        var regex = new RegExp('^.*.(mp4)$');
        if (regex.test(backImage)) {
            setbackIsVideo(true);
        }
    }, [])

    return (
        <>
            <div className='card-back-root'
                style={{ backgroundImage: !frontIsVideo || !backIsVideo ? `url(${backImage})` : 'unset' }}
                onMouseOver={() => { setshowFlipIcon(true) }}
                onMouseLeave={() => { setshowFlipIcon(false) }}
            >
                {frontIsVideo &&
                    <img
                        className='flipped-img'
                        src={backImage}
                        alt='not found'
                        ref={imageRef}
                        onLoad={() => {
                            setTheImageRatio(
                                imageRef.current.naturalWidth,
                                imageRef.current.naturalHeight
                            );
                            // document.getElementById(
                            //   'scope'
                            // ).style.width = `${defaultScopeWidth}px`;
                            // document.getElementById(
                            //   'scope'
                            // ).style.height = `${calculateSize(
                            //   imageRef.current.naturalWidth,
                            //   imageRef.current.naturalHeight
                            // )}px`;
                            setLoading(false);
                        }}
                    />
                }
                {backIsVideo && <video
                    className='flipped-img'
                    alt='not found'
                    autoPlay
                    muted
                    loop
                    controls={false}
                >
                    <source src={backImage} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>}
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
})

export default CardBack