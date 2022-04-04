import React, { useEffect, useRef, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import flip_icon from '../assets/images/flip-icon.svg';
import CardBack from './CardBack.jsx';
import TraitCard from './TraitCard.jsx';
import './GalaxisCard.css';

const GalaxisCard = ({ metadata, traitTypes, horizontalPadding = 20, imageContainerWidth = null }) => {
  const [traitsVisible, setTraitsVisible] = useState(false);
  const [selectedTrait, setSelectedTrait] = useState({});
  const [showBackCard, setshowBackCard] = useState(false);
  const [showFlipIcon, setshowFlipIcon] = useState(false);
  const [traitType, setTraitType] = useState(traitTypes ? traitTypes[0] : null);
  // const [randomImages, setrandomImages] = useState([ARTARRAY[0]]);
  const [open, setOpen] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);
  const [mobileView, setmobileView] = useState(false);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef();
  const [defaultScopeWidth, setDefaultScopeWidth] = useState(imageContainerWidth ? imageContainerWidth - horizontalPadding : 400);
  const GALAXIS_BASE_URL = 'https://galaxis-web-backend-staging.herokuapp.com';

  useEffect(() => {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
    if (window.innerWidth < 410) {
      setDefaultScopeWidth(window.innerWidth - horizontalPadding);
    }
    if (metadata.traits) {
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

  

  const calculateSize = (width, height) => {
    return defaultScopeWidth * (height / width);
  };

  return (
    <>
      {loading && (
        <SpinnerCircular
          size={100}
          color="rgb(252, 108, 3)"
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
          className="card-image-container"
          style={{ opacity: loading ? '0' : '1' }}
        >
          {/* <img src={trait_card} alt="" style={sx.image} /> */}
          <div className="pyramid_anim_container">
            <div
              className={`scope ${traitsVisible ? 'active' : ''}  `}
              id="scope"
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
                id="front-span"
              >
                <img
                  className="flipped-img"
                  src={
                    metadata.sides && metadata.sides.length > 1
                      ? metadata.sides[0].image
                      : metadata.image
                  }
                  alt="not found"
                  ref={imageRef}
                  onLoad={() => {
                    document.getElementById(
                      'scope'
                    ).style.width = `${defaultScopeWidth}px`;
                    document.getElementById(
                      'scope'
                    ).style.height = `${calculateSize(
                      imageRef.current.naturalWidth,
                      imageRef.current.naturalHeight
                    )}px`;
                    setLoading(false);
                  }}
                />
                <div className="card-icons-holder">
                  {/* <img src={fullScreen} alt="" className='fullscreen-icon'
                      style={{ display: showFlipIcon || mobileView ? 'block' : 'none' }}
                      onClick={() => { setFullscreenSource(randomImage) }}
                  /> */}
                  {metadata.sides && metadata.sides.length > 1 && (
                    <img
                      src={flip_icon}
                      className="flip-icon"
                      alt="not found"
                      style={{
                        display: showFlipIcon || mobileView ? 'block' : 'none',
                      }}
                      onClick={(e) => {
                        showTraits(e);
                        setshowBackCard(true);
                      }}
                    />
                  )}
                </div>
                {metadata.traits && traitTypes && (
                  <div
                    className={`trait-container ${traitsVisible ? 'hide' : ''}`}
                  >
                    {metadata.traits.map((elem, metadataIndex) => {
                      return traitTypes.map((traitElem, index) => {
                        if (parseInt(elem.type) === traitElem.id)
                          return (
                            <div
                              className="trait-holder"
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
                                alt="undefined"
                              />{' '}
                            </div>
                          );
                      });
                    })}
                  </div>
                )}
              </span>
              {metadata.traits && traitTypes && (
                <span
                  className={`back ${traitsVisible ? 'active' : ''} `}
                  id="trait-span"
                >
                  <TraitCard
                    trait={selectedTrait}
                    onClick={hideTraits}
                    image={
                      metadata.sides && metadata.sides.length > 1
                        ? metadata.sides[0].image
                        : metadata.image
                    }
                    traitImg={GALAXIS_BASE_URL + traitType.icon_white}
                  />
                </span>
              )}
              {metadata.sides && metadata.sides.length > 1 && (
                <span
                  className={`back_card ${showBackCard ? 'active' : ''} `}
                  id="back-span"
                >
                  <CardBack
                    onClick={hideTraits}
                    backImage={metadata.sides[1].image}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default GalaxisCard;
