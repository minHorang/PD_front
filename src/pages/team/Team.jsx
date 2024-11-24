import React, { useState } from 'react';
import './Team.css';
import Teamdata from './Team/Teamdata';

function Team() {
  const [selectedComponent, setSelectedComponent] = useState();
  const [activeButton, setActiveButton] = useState();

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'IT':
      case 'MD':
      case 'LI':
      case 'MS':
        return <Teamdata selectedComponent={selectedComponent} />;
      default:
        return null;
    }
  };

  const handleButtonClick = component => {
    setSelectedComponent(component);
    setActiveButton(component);
  };

  return (
    <div className="teamcontainer">
      <div className="sidebar">
        <h1>Team</h1>
        <div className="sidebutton">
          <button
            className={activeButton === 'IT' ? 'active' : ''}
            onClick={() => handleButtonClick('IT')}
          >
            개발
          </button>
          <button
            className={activeButton === 'MD' ? 'active' : ''}
            onClick={() => handleButtonClick('MD')}
          >
            영상/미디어
          </button>
          <button
            className={activeButton === 'LI' ? 'active' : ''}
            onClick={() => handleButtonClick('LI')}
          >
            문학
          </button>
          <button
            className={activeButton === 'MS' ? 'active' : ''}
            onClick={() => handleButtonClick('MS')}
          >
            음악
          </button>
        </div>
      </div>
      <div className="teamcontent">{renderComponent()}</div>
    </div>
  );
}

export default Team;
