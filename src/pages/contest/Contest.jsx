import React, { useState } from 'react';
import './Contest.css';
import CTcontent from './CT/CTcontent';

function Contest() {
  const [selectedComponent, setSelectedComponent] = useState('');

  const renderComponent = () => {
    const validComponents = ['ITXMD', 'ITXLI', 'ITXMS', 'MDXLI', 'MDXMS', 'LIXMS'];
    if (validComponents.includes(selectedComponent)) {
      return <CTcontent selectedComponent={selectedComponent} />;
    }
    return null;
  };

  const handleButtonClick = component => {
    setSelectedComponent(component);
  };

  return (
    <div className="contestcontainer">
      <div className="sidebar">
        <h1>공모전</h1>
        <div className="sidebutton">
          <button
            className={selectedComponent === 'ITXMD' ? 'active' : ''}
            onClick={() => handleButtonClick('ITXMD')}
          >
            개발 X 영상/미디어
          </button>
          <button
            className={selectedComponent === 'ITXLI' ? 'active' : ''}
            onClick={() => handleButtonClick('ITXLI')}
          >
            개발 X 문학
          </button>
          <button
            className={selectedComponent === 'ITXMS' ? 'active' : ''}
            onClick={() => handleButtonClick('ITXMS')}
          >
            개발 X 음악
          </button>
          <button
            className={selectedComponent === 'MDXLI' ? 'active' : ''}
            onClick={() => handleButtonClick('MDXLI')}
          >
            영상/미디어 X 문학
          </button>
          <button
            className={selectedComponent === 'MDXMS' ? 'active' : ''}
            onClick={() => handleButtonClick('MDXMS')}
          >
            영상/미디어 X 음악
          </button>
          <button
            className={selectedComponent === 'LIXMS' ? 'active' : ''}
            onClick={() => handleButtonClick('LIXMS')}
          >
            문학 X 음악
          </button>
        </div>
      </div>
      <div className="contestcontent">{renderComponent()}</div>
    </div>
  );
}

export default Contest;
