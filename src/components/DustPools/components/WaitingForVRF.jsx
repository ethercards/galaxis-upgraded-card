import './ProjectSubpage.css';
import React from 'react';
import DustImg from '../../../assets/images/dustPools/dragon.jpg';

const WaitingForVRF = ({ handleBack}) => {

  return (
    <div className="pool-ps-root">
      <div className="pool-ps-card-and-descipton">
        <div className="pool-ps-card-and-descipton-inner ps-left">
          <img src={DustImg} style={{ maxWidth: '100%' }} />
        </div>
        <div className="pool-ps-card-and-descipton-inner ps-right">
          <div className="text-box w-100">
            <p className="dust-pool-title" style={{lineHeight:"35px", marginBottom:"20px"}}>VRF Initialised!<br/>Transition was successful!</p>
            <p className="dust-pool-card-label" style={{textTransform:"none"}}>Transition was successful. Chainlink's VRF now picks a random Digital Collectible from the vault. Please be patient as this process may take several minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForVRF;
