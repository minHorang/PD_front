import React, { useState } from 'react';
import './Portfolio.css';
import Port from './Port/Port';

function Portfolio() {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [activeButton, setActiveButton] = useState('');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 1:
      case 2:
      case 3:
      case 4:
        return <Port selectedComponent={selectedComponent} />;
      default:
        return null;
    }
  };

  const handleButtonClick = component => {
    setSelectedComponent(component);
    setActiveButton(component);
  };

  return (
    <div className="portfoliocontainer">
      <div className="sidebar">
        <h1>Portfolio</h1>
        <div className="sidebutton">
          <button
            className={activeButton === 1 ? 'active' : ''}
            onClick={() => handleButtonClick(1)}
          >
            개발
          </button>
          <button
            className={activeButton === 2 ? 'active' : ''}
            onClick={() => handleButtonClick(2)}
          >
            영상/미디어
          </button>
          <button
            className={activeButton === 3 ? 'active' : ''}
            onClick={() => handleButtonClick(3)}
          >
            문학
          </button>
          <button
            className={activeButton === 4 ? 'active' : ''}
            onClick={() => handleButtonClick(4)}
          >
            음악
          </button>
        </div>
      </div>
      <div className="portfoliocontent">{renderComponent()}</div>
    </div>
  );
}

export default Portfolio;
