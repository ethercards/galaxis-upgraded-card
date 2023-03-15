import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ItemsCarousel from 'react-items-carousel';
import carouselPagination from '../../../assets/images/dustPools/carouselPagination.svg';
import carouselPginationOrange from '../../../assets/images/dustPools/carouselPaginationOrange.svg';

const sx = {
  content: {
    maxWidth: '294px',
    margin: 'auto',
  },
  dotList: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    zIndex: '3',
    position: 'absolute',
    justifyContent: 'center',
  },
  contentLeft: {
    display: 'flex',
    gap: '17px',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '12px 12px',
    cursor:'pointer'
  },
  titleText: {
    fontFamily: 'poppins-semibold',
    fontSize: '18px',
    lineHeight: '20px',
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": '2',
    "-webkit-box-orient": "vertical"
  

  },
  description: {
    fontFamily: 'poppins',
    fontSize: '14px',
    mt: '5px',
  },
  imageHolder: {
    width: '84px',
  },
  itemHolder: {
    maxWidth: '60%',
  },
  image: {

  }
};
const autoPlayDelay = 40000000; //4000
const UpcomingPoolsCarousel = ({ imgUrl, poolsData, handleSelect, handleSelectedIndex }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [noOfCards, setNoOfCards] = useState(4);
  useEffect(() => {

    window.scrollTo(0, 0);
    if (window.innerWidth < 1140) {
      setNoOfCards(3);
    }
    if (window.innerWidth < 780) {
      setNoOfCards(2);
    }
    if (window.innerWidth < 600) {
      setNoOfCards(1);
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, autoPlayDelay);
    return () => clearInterval(interval);
  }, [activeItemIndex]);
  const tick = () => {
    if (poolsData.length > 4) {
      let active = activeItemIndex + noOfCards;
      setActiveItemIndex(active);
    }
    if (activeItemIndex == poolsData.length - 1) {
      setActiveItemIndex(0);
    }
  };
  const onChange = (id) => {
    let active = id * noOfCards;
    setActiveItemIndex(active);
  };
  

  const handleItemSelect = (idx)=>{
    handleSelect(poolsData[idx]);
  }

  return (
    <>
      <Box
        sx={sx.root}
        style={{
          marginTop: '-1px'
        }}
      >
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          activePosition="left"
          numberOfCards={noOfCards}
          gutter={16}
        >
          {poolsData.map((pool,idx) => (
            <Box key={idx} sx={sx.content} style={{boxShadow: "0px 2px 7px -2px rgba(0,0,0,0.2)", margin:"20px auto", borderRadius:"12px", overflow:"hidden"}}>
              <Box sx={sx.contentLeft} className="previousBox" onClick={()=>{handleItemSelect(idx); handleSelectedIndex(idx) }}>
                <Box sx={sx.imageHolder}>
                  <img
                    src={imgUrl + pool.image_src}
                    alt=""
                    style={{
                      height: '100%',
                      width: '100%',
                      // borderRadius: '12px 0px 0px 12px',
                      display:"block"
                    }}
                  />{' '}
                </Box>
                <Box sx={sx.itemHolder}>
                  <Typography
                    variant="minuscule"
                    sx={sx.titleText}
                    className="prevtitleText"
                  >
                    {pool.title}
                  </Typography>
                  <Typography sx={sx.description}>Price: {(pool.price && parseInt(pool.price)>0)?pool.price.toLocaleString()+' D':'TBA'}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </ItemsCarousel>
        {poolsData.length > 4 ? (
          <Box
            style={{
              position: 'relative',
              display: 'flex',
              maxWidth: '1140px',
              justifyContent: 'center',
            }}
          >
            <Box sx={sx.dotList}>
              {Array.apply(null, {
                length: Math.ceil(poolsData.length / noOfCards),
              }).map((pool, i) => (
                <Box
                  key={i}
                  className="yours-custom-class"
                  onClick={() => onChange(i)}
                  sx={sx.image}
                >
                  <img
                    src={
                      activeItemIndex / noOfCards === i
                        ? carouselPginationOrange
                        : carouselPagination
                    }
                    style={{ cursor: 'pointer', marginTop:"20px", boxShadow: '-1px 5px 9px 0px rgb(0 0 0 / 11%)'
                  }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box />
        )}
      </Box>
    </>
  );
};

export default UpcomingPoolsCarousel;
