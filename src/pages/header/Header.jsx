import React, { useState } from 'react';
import Logo from '../../img/Logo.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';

function Header() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlemain = () => {
    navigate('/');
  };
  const handleboard = () => {
    navigate('/board');
  };
  const handlepd = () => {
    navigate('/projectdesign');
  };
  const handlecontest = () => {
    navigate('/contest');
  };
  const handlemypage = () => {
    navigate('/mypage');
  };

  return (
    <div className="Headercontainer">
      <img src={Logo} alt="ProjectDesign" className="header-logo" onClick={handlemain} />
      <div className="TopButtonbar">
        <div className="left-buttons">
          <button className="boardbutton" onClick={handleboard}>
            게시판
          </button>
          <button className="pdbutton" onClick={handlepd}>
            Project Design
          </button>
          <button className="contestbutton" onClick={handlecontest}>
            공모전
          </button>
        </div>
        <div className="right-buttons">
          <button className="loginbutton" onClick={handleLoginClick}>
            로그인
          </button>
          <button className="mypagebutton" onClick={handlemypage}>
            마이페이지
          </button>
        </div>
      </div>
      <Login isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Header;
