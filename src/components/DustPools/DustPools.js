import React, { useEffect, useRef, useState } from 'react';
import DustPoolCard from './components/DustPoolCard';
import DragonImg from '../../assets/images/dustPools/dragon.jpg';
import './DustPools.css';

import leftTrick from '../../assets/images/dustPools/leftTrick.svg';
import rightTrick from '../../assets/images/dustPools/rightTrick.svg';

import UpcomingCard from './components/UpcomingCard';
import ProjectSubpage from './components/ProjectSubpage';


const POOLS = [
  {
    imgSrc: DragonImg,
    poolId: 0,
    name: 'Girls, Robots, Dragons'
  },
  {
    imgSrc: DragonImg,
    poolId: 0,
    name: 'Girls, Robots, Dragons'
  },
  {
    imgSrc: DragonImg,
    poolId: 0,
    name: 'Girls, Robots, Dragons'
  },
];

const UPCOMING_POOLS = [
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu",
    price : 10000
  },
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu two row",
    price : 10000
  },
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu",
    price : 10000
  },
  {
    imgSrc: DragonImg,
    name : "Paul Timbuktu",
    price : 10000
  },
]

const TopSectionDividers = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '25px 0',
    }}
  >
    <img src={leftTrick} style={{ maxHeight: '50px' }} />
    <img src={rightTrick} style={{ maxHeight: '50px' }} />
  </div>
);

const DustPools = ({address,ethersProvider,deployedChainId,handleConnect}) => {

  const [selectedPoolId, setSelectedPoolId] = useState(null);

  useEffect(()=>{
    console.log('address???',address);

  },[address]);
  




  const connectOrExchange = (poolId) =>{
    if(poolId!==null){
      setSelectedPoolId(poolId);
    }else{
      handleConnect();
    }
  }
  
  return (
    <>
    {selectedPoolId === null ?
    <div className="dust-pool-root">
      <div className="dust-pool-textbox">
        <p className="pool-subtitle">Dust pools</p>
        <p>
          You can exchange your Dust for some awesome items including
          Cryptopunks and other valuable NFTs.
        </p>
        <div className="tab-choose">
          <div className="active">All</div>
          <div>Active</div>
          <div>Sold out</div>
        </div>
      </div>
      <div className="container  mt-5">
        <div className="row" style={{ rowGap: '25px' }}>
          {POOLS.map((card,idx) => {
            return (
              <div key={idx} className="col-12 col-lg-6">
                <DustPoolCard card={card} address={address} handleClick={connectOrExchange}/>
              </div>
            );
          })}
        </div>
        <TopSectionDividers />
        <div className="dust-pool-textbox">
          <p className="pool-subtitle">Dust utility token</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="dust-pool-btn" style={{marginTop:"20px"}}>Go to blog</button>
        </div>
        <TopSectionDividers />
        <div className="dust-pool-textbox pb-4">
          <p className="pool-subtitle">Upcoming Dust Pools</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className='row' style={{maxHeight:"86px"}}>
            {
              UPCOMING_POOLS.map((card,idx)=>{
                return <div key={idx} className="col-6 col-lg-3">
                  <UpcomingCard imgSrc={card.imgSrc} name={card.name} price={card.price}/>
                </div>

              })
            }
          </div>
      </div>
    </div>

    :

    <div className="dust-pool-root">
      <ProjectSubpage handleBack = {()=>setSelectedPoolId(null)}/>
    </div>
    }
    </>
  );
};

export default DustPools;
