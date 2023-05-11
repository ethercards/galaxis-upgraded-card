import React, { useEffect, useRef, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import flip_icon from '../assets/images/flip-icon.svg';
import CardBack from './CardBack.jsx';
import TraitCard from './TraitCard.jsx';
import './GalaxisCard.css';
import useContainerDimensions from './useContainerDimensions';

const GalaxisCard = ({
  metadata,
  traitTypes,
  horizontalPadding = 20,
  imageContainerWidth = null,
  apiUrl
}) => {
  const [traitsVisible, setTraitsVisible] = useState(false);
  const [selectedTrait, setSelectedTrait] = useState({});
  const [showBackCard, setshowBackCard] = useState(false);
  const [showFlipIcon, setshowFlipIcon] = useState(false);
  const [frontIsVideo, setfrontIsVideo] = useState(false);
  const [traitType, setTraitType] = useState(traitTypes ? traitTypes[0] : null);
  // const [randomImages, setrandomImages] = useState([ARTARRAY[0]]);
  const [open, setOpen] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);
  const [mobileView, setmobileView] = useState(false);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef();
  const [defaultScopeWidth, setDefaultScopeWidth] = useState(
    imageContainerWidth ? imageContainerWidth - horizontalPadding : 400
  );
  //const GALAXIS_BASE_URL = 'https://galaxis-web-backend-staging.herokuapp.com';
  const GALAXIS_BASE_URL = apiUrl?apiUrl:'https://galaxis-backend.herokuapp.com';

  //console.log('api url',GALAXIS_BASE_URL);

  const containerRef = useRef();
  const { width, height } = useContainerDimensions(containerRef);
  const [imageRatio, setImageRatio] = useState(0);
  const [resizerComponentSize, setResizerComponentSize] = useState({
    width: 0,
    height: 0,
  });
  const [containerSize, setContainerSize] = useState('medium');

  useEffect(() => {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
    if (window.innerWidth < 410) {
      setDefaultScopeWidth(window.innerWidth - horizontalPadding);
    }
    if (metadata.traits && metadata.traits.length > 0) {
      setSelectedTrait(metadata.traits[0]);
    }
  }, []);

  const showTraits = (e) => {
    e.stopPropagation();
    setTraitsVisible(true);
    document.getElementById('scope').style.transform =
      'perspective(1000px) rotateY(180deg)';
  };
  const hideTraits = (e) => {
    e.stopPropagation();
    setTraitsVisible(false);
    setshowBackCard(false);
    document.getElementById('scope').style.transform =
      'perspective(1000px) rotateY(0deg)';
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const setTheImageRatio = (width, height) => {
    setImageRatio(height / width);
  };
  useEffect(() => {

    if (imageRatio != 0) {
      setResizerComponentSize({
        width: width < height / imageRatio ? 100 + '%' : height / imageRatio,
        height: width < height / imageRatio ? width * imageRatio : '100%',
      });
    }
  }, [imageRatio, width, height]);

  useEffect(() => {
    //console.log(imageRatio,width,height)
    if (width) {
      let cSize = '';
      if (width > 500) {
        cSize = 'c-xlarge';
      } else if (width > 400) {
        cSize = 'c-large';
      } else if (width > 330) {
        cSize = 'c-medium';
      } else if (width > 240) {
        cSize = 'c-small';
      } else {
        cSize = 'c-xsmall';
      }

      if(imageRatio>0){
        cSize+=imageRatio===1?' square':' protrait';
      }

      setContainerSize(cSize);
      // console.log(containerSize)
    }
  }, [width,imageRatio]);

  useEffect(() => {
    if (metadata.sides && metadata.sides.length >= 1 && metadata.sides[0].original_height && metadata.sides[0].original_width) {
      let originalHeight = metadata.sides[0].original_height;
      let originalWidth = metadata.sides[0].original_width
      //console.log(width, height);
     // console.log(originalHeight, originalWidth)
      if (imageRatio != 0) {
        //console.log(imageRatio)
        setResizerComponentSize({
          width: originalWidth < originalHeight / imageRatio ? 'auto' : originalHeight / imageRatio,
          height: originalWidth < originalHeight / imageRatio ? originalWidth * imageRatio : 'auto',
        });
      }
      setLoading(false)
    }

  }, []);
  return (
    <>
      {loading && (
          
                <SpinnerCircular
                  size={80}
                  color='rgb(252, 108, 3)'
                  style={{
                    position: 'absolute',
                    margin: 'auto',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                  secondaryColor={'white'}
                />
              )}
      
      {metadata && (
        <div
          className={`card-image-container ${containerSize}`}
          ref={containerRef}
          style={{ opacity: loading ? '0' : '1' }}
          onClick={(e) => stopPropagation(e)}
        >

        


          {/* <img src={trait_card} alt="" style={sx.image} /> */}
          <div className='pyramid_anim_container'>
            <div
              className='resizer-container'
              style={{
                opacity: resizerComponentSize.width === 0 ? 0 : 1,
                width: resizerComponentSize.width,
                height: resizerComponentSize.height,
              }}
            >
              <div
                className={`scope ${traitsVisible ? 'active' : ''}  `}
                style={{ width: '100%', height: '100%' }}
                id='scope'
                onTransitionEnd={() => console.log('hello')}
                onMouseOver={() => {
                  setshowFlipIcon(true);
                }}
                onMouseLeave={() => {
                  setshowFlipIcon(false);
                }}
              >
                <span
                  className={`front ${!traitsVisible ? 'active' : ''} `}
                  id='front-span'
                >
                  {(metadata.sides && metadata.sides.length >= 1 && (!metadata.sides[0].type || metadata.sides[0].type !== 'video'))
                    || !metadata.sides ? (
                    <>
                    <img
                      className='flipped-img'
                      src={
                        metadata.sides && metadata.sides.length >= 1 && metadata.sides[0].image
                          ? metadata.sides[0].image
                          : metadata.image
                      }
                      alt='not found'
                      ref={imageRef}
                      onLoad={() => {
                        setTheImageRatio(
                          imageRef.current.naturalWidth,
                          imageRef.current.naturalHeight
                        );
                        setLoading(false);
                      }}
                    />

                    {(metadata.overlays && metadata.overlays.length>0 && metadata.overlays[0].layers && metadata.overlays[0].layers[0].length>0)&&
                      <img src={metadata.overlays[0].layers[0]} className='flipped-img' alt='overlay'/>
                    }

                    </>

                  ) : (
                    <video
                      className='flipped-img'
                      alt='not found'
                      autoPlay
                      muted
                      loop
                      controls={false}
                      onLoadedData={() => setTheImageRatio(metadata.sides[0].original_width, metadata.sides[0].original_height,)}
                    >
                      <source src={metadata.sides[0].image} type="video/mp4" />
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                  )}
                  <div className='card-icons-holder'>
                    {/* <img src={fullScreen} alt="" className='fullscreen-icon'
                      style={{ display: showFlipIcon || mobileView ? 'block' : 'none' }}
                      onClick={() => { setFullscreenSource(randomImage) }}
                  /> */}
                    {metadata.sides && metadata.sides.length > 1 && (
                      <img
                        src={flip_icon}
                        className='flip-icon'
                        alt='not found'
                        style={{
                          display:
                            showFlipIcon || mobileView ? 'block' : 'none',
                        }}
                        onClick={(e) => {
                          showTraits(e);
                          setshowBackCard(true);
                        }}
                      />
                    )}
                  </div>
                  {metadata.traits && metadata.traits.length > 0 && traitTypes && (
                    <div
                      className={`trait-container ${traitsVisible ? 'hide' : ''
                        }`}
                    >
                      {metadata.traits.map((elem, metadataIndex) => (
                        elem.icon_url ?
                          <>
                            {parseInt(elem.status)===1&&<div
                              className='trait-holder'
                              key={metadataIndex}
                              onClick={(e) => {
                                setSelectedTrait(
                                  metadata.traits[metadataIndex]
                                );
                                // setTraitType(traitTypes[index]);
                                showTraits(e);
                              }}
                            >
                              {' '}
                              <img
                                src={elem.icon_url}
                                alt='undefined'
                              />{' '}
                            </div>}
                          </>

                          :
                          traitTypes.map((traitElem, index) => {
                            if (parseInt(elem.type) === traitElem.id){
                              return (
                                <div
                                  className='trait-holder'
                                  key={index}
                                  onClick={(e) => {
                                    setSelectedTrait(
                                      metadata.traits[metadataIndex]
                                    );
                                    setTraitType(traitTypes[index]);
                                    showTraits(e);
                                  }}
                                >
                                  {' '}
                                  <img
                                    src={GALAXIS_BASE_URL + traitElem.icon_white}
                                    alt='undefined'
                                  />{' '}
                                </div>
                              );
                            }
                          })
                      ))}
                    </div>
                  )}
                </span>
                {metadata.traits && metadata.traits.length > 0 && traitTypes && (
                  <span
                    className={`back ${traitsVisible ? 'active' : ''} `}
                    id='trait-span'
                  >
                    <TraitCard
                      trait={selectedTrait}
                      onClick={hideTraits}
                      image={
                        metadata.sides && metadata.sides.length > 1
                          ? metadata.sides[0].image
                          : metadata.image
                      }
                      traitImg={selectedTrait.icon_url ? selectedTrait.icon_url : GALAXIS_BASE_URL + traitType.icon_white}
                    // claimUrl={selectedTrait.claim_url}
                    />
                  </span>
                )}
                {metadata.sides && metadata.sides.length > 1 && (
                  <span
                    className={`back_card ${showBackCard ? 'active' : ''} `}
                    id='back-span'
                  >
                    <CardBack
                      onClick={hideTraits}
                      backImage={metadata.sides[1].image}
                      type={metadata.sides[1].type === 'video' && metadata.sides[1].type}
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default GalaxisCard;
