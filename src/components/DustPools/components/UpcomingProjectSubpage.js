import './ProjectSubpage.css';
import './Counter.css';
import React, { useEffect, useRef, useState } from 'react';
import {BigNumber, ethers} from 'ethers';
import axios from 'axios';
import { toast } from 'react-toast';
import blockedCountries from "./blockedCountries";
import DragonImg from '../../../assets/images/dustPools/dragon.jpg';
import CounterBar from './CounterBar.jsx';
import divider from '../../../assets/images/dustPools/divider.png'
import TermsBox from './TermsBox';
import RestrictedAreaBox from './RestrictedAreaBox';
import DustImg from '../../../assets/images/dustPools/dust-card.jpg';


const UpcomingProjectSubpage = ({pool, chainId, handleBack}) => {

  const MEDIA_BASE_URL = chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
  return (<>
    <div className="pool-ps-root">
      
        <button className='pool-ps-btn' onClick={handleBack}><span>&#9666;</span><p>Back</p></button>
        <div className="pool-ps-card-and-descipton">
          <div className="pool-ps-card-and-descipton-inner ps-left">
            <img src={MEDIA_BASE_URL+pool.image_src} style={{ maxWidth: '100%', width:'450px' }} />
          </div>
          <div className="pool-ps-card-and-descipton-inner ps-right">
            <div className="text-box w-100">
                <p className='dust-pool-card-label'>VAULT</p>
              <p className="dust-pool-title ">{pool.title}</p>
              
              
              <p className="dust-pool-card-label">Price</p>
              <div className='dpc-box'>
              <p style={{margin:0}}>
                <b>{pool.price?pool.price.toLocaleString()+' D':'TBA'}</b>
              </p>
              </div>
            </div>
          </div>
        </div>
        <p className="dust-pool-card-label mt-2" style={{fontFamily:"poppins-semibold", textTransform:"capitalize", fontSize:"18px"}}><b>Description</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>
    </>
  );
};

export default UpcomingProjectSubpage;
