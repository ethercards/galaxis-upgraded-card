import './ProjectSubpage.css';
import React from 'react';
import DragonImg from '../../../assets/images/dustPools/dragon.jpg';
import CounterBar from './CounterBar.jsx';
import divider from '../../../assets/images/dustPools/divider.png'
const PROJECT_SUBPAGE = {
  imgSrc: DragonImg,
  name: 'Paul Timbuktu',
  price: 10000,
};

const ShowNextPreviosProject = () =>{
    return <div className='snp-root'>
        <div className='previous-box snp-box'>
            <div><img src={DragonImg} style={{maxHeight:"100%"}}/></div>
            <div className='snp-text'>
                <span>previous</span>
                <div className='snp-text-p-n'>
                    Mutant ape yacht club
                </div>
            </div>
        </div>
        <div className='snp-divider'>
            <img src={divider}/>
        </div>
        <div className='next-box snp-box'>
            
            <div className='snp-text text-right'>
                <span>next</span>
                <div className='snp-text-p-n'>
                    Mutant ape yacht club
                </div>
            </div>
            <div><img src={DragonImg} style={{maxHeight:"100%"}}/></div>
        </div>
    </div>
}

const ProjectSubpage = ({handleBack}) => {
  return (
    <div className="pool-ps-root">
        <button className='pool-ps-btn' onClick={handleBack}><span>&#129168;</span><p>Back</p></button>
      <div className="pool-ps-card-and-descipton">
        <div className="pool-ps-card-and-descipton-inner ps-left">
          <img src={DragonImg} style={{ maxWidth: '100%' }} />
        </div>
        <div className="pool-ps-card-and-descipton-inner ps-right">
          <div className="text-box w-100">
              <p className='dust-pool-card-label'>POOL</p>
            <p className="dust-pool-title ">Girls, Robots, Dragons</p>
            <p className="dust-pool-card-label">COUNTER</p>
            <p className="mb-1">
              <b>60 out of 100 left</b>
            </p>
            <CounterBar value={100} maxValue={200} />
            <p className="dust-pool-card-label">Your balance</p>
            <div className='dpc-box'>
            <p style={{margin:0}}>
              <b>10000 D</b>
            </p>
            </div>
            
            <p className="dust-pool-card-label">Price</p>
            <div className='dpc-box'>
            <p style={{margin:0}}>
              <b>10.000 D</b>
            </p>
            </div>

            <div className='ps-text-bottom'>

            <button className="dust-pool-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <p className="dust-pool-card-label mt-2" style={{fontFamily:"poppins-semibold", textTransform:"capitalize", fontSize:"18px"}}><b>Description</b></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <ShowNextPreviosProject/>
    </div>
  );
};

export default ProjectSubpage;
