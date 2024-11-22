import React, { useState } from 'react';
import './BD.css';
import BDdata from './BDdata';

function BD({ selectedComponent }) {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = component => {
    setActiveComponent(component);
  };

  return (
    <div className="BD-container">
      <div className="BD-button">
        <button
          className={activeComponent === 'Recr' ? 'active' : ''}
          onClick={() => handleButtonClick('Recr')}
        >
          공고모집
        </button>
        <button
          className={activeComponent === 'Port' ? 'active' : ''}
          onClick={() => handleButtonClick('Port')}
        >
          포트폴리오
        </button>
      </div>
      <div className="BD-content">
        <BDdata selectedComponent={selectedComponent} selecttype={activeComponent} />
      </div>
    </div>
  );
}

export default BD;
