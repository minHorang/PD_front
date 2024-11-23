import React from 'react';
import { useNavigate } from 'react-router-dom';
import contestbanner from '../../img/contestbanner.png';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  const handlecontest = () => {
    navigate('/contest');
  };

  return (
    <div className="maincontainer">
      <img
        src={contestbanner}
        alt="contestbanner"
        className="contestbanner"
        onClick={handlecontest}
      />
    </div>
  );
}

export default Main;
