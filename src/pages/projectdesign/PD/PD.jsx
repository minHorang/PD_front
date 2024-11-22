import React, { useState } from 'react';
import './PD.css';
import PDdata from './PDdata';

function PDit({ selectedComponent }) {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = component => {
    setActiveComponent(component);
  };

  return (
    <div className="PD-container">
      <div className="PD-button">
        <button
          className={activeComponent === 'IT' ? 'active' : ''}
          onClick={() => handleButtonClick('IT')}
        >
          개발
        </button>
        <button
          className={activeComponent === 'MD' ? 'active' : ''}
          onClick={() => handleButtonClick('MD')}
        >
          영상/미디어
        </button>
        <button
          className={activeComponent === 'LI' ? 'active' : ''}
          onClick={() => handleButtonClick('LI')}
        >
          문학
        </button>
        <button
          className={activeComponent === 'MS' ? 'active' : ''}
          onClick={() => handleButtonClick('MS')}
        >
          음악
        </button>
      </div>
      <div className="PD-content">
        <PDdata selectedComponent={selectedComponent} selecttype={activeComponent} />
      </div>
    </div>
  );
}

export default PDit;
