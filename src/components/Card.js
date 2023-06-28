import React, { useState } from 'react';
import './Card.css';
import closeBtn from '../assets/images/close.svg';
const Card = ({ metadata, traitTypes, horizontalPadding = 20, apiUrl }) => {
  const [areTraitsVisible, setTraitsVisible] = useState(false);
  const [areTraitIconsVisible, setIconsVisible] = useState(false);
  const handleClose = () => {
    setTraitsVisible(false);
  };

  const renderTraits = () => {
    return (
      <div
        className="upgraded-card-traits-panel"
        style={{ opacity: areTraitsVisible ? 1 : 0 }}
      >
        <ul>
          {metadata.traits.map((trait, index) => {
            return (
              <>
                <li key={`trait` + index} style={{ display: 'flex' }}>
                  <div style={{ width: '25px' }}>{index + 1 + '. '}</div>{' '}
                  {trait.name}
                </li>
              </>
            );
          })}
        </ul>
        <div className="upgraded-card-traits-close-btn" onClick={handleClose}>
          <img src={closeBtn} />
        </div>
      </div>
    );
  };

  return (
    <>
      {metadata && (
        <>
          <div className="upgraded-card">
            <img className="upgraded-card-img" src={metadata.image} />
            {metadata.traits && !areTraitsVisible && (
              <>
                <div
                  className="upgraded-card-traits"
                  onMouseEnter={() => setIconsVisible(!areTraitIconsVisible)}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(e, 'Stop propagation');
                    setTraitsVisible(!areTraitsVisible);
                  }}
                >
                  <p>{metadata.traits.length}</p>
                </div>
                <div className="upgraded-card-trait-icons-container">
                  {metadata.traits.map((trait) => {
                    return (
                      <div className="upgraded-card-trait-icon ">
                        <img src={trait.icon_url} />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            {metadata.traits && renderTraits()}
          </div>
          <p className="card-title">{metadata.name}</p>
        </>
      )}
    </>
  );
};

export default Card;
