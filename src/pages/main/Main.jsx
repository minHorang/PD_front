import React from 'react';
import contestbanner from '../../img/contestbanner.png';
import './Main.css';

function Main() {
  return (
    <div className="maincontainer">
      <img src={contestbanner} alt="contestbanner" className="contestbanner" />
    </div>
  );
}

export default Main;
