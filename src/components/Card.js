import React, { useState } from 'react';
import './Card.css';
const Card = ({
  metadata,
  traitTypes,
  horizontalPadding = 20,
  imageContainerWidth = null,
  apiUrl,
}) => {
  const [areTraitsVisible, setTraitsVisible] = useState(false);
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
            return <li key={`trait` + index}>{trait.name}</li>;
          })}
        </ul>
        <div className="upgraded-card-traits-close-btn" onClick={handleClose}>
          <img src="https://explorer.ether.cards/static/media/close_button.8b0db979.svg" />
        </div>
      </div>
    );
  };
  return (
    <>
      {metadata && (
        <div className="upgraded-card">
          <img className="upgraded-card-img" src={metadata.image} />
          {metadata.traits && !areTraitsVisible && (
            <div
              className="upgraded-card-traits"
              onClick={() => setTraitsVisible(!areTraitsVisible)}
            >
              {metadata.traits.length}
            </div>
          )}
          {metadata.traits && renderTraits()}
        </div>
      )}
    </>
  );
};

export default Card;
