import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ isOpen, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleAccountCreation = () => {
    navigate('/join');
  };

  const handleCalender = () => {
    navigate('/:id');
  };
  return (
    <div className="modal-overlay">
      <div className="login-container">
        <div className="login-title">
          <p>로그인</p>
        </div>
        <div className="login-input">
          <input
            id="login-input-id"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="아이디"
          />
          <input
            id="login-input-pw"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="비밀번호"
          />
          <div className="login-error-box">
            <div className="login-error">
              <p>문구</p>
            </div>
          </div>
          <div className="login-button">
            <button onClick={handleCalender}>로그인</button>
          </div>
          <div className="account-add-button">
            <button
              onClick={() => {
                handleAccountCreation();
                onClose();
              }}
            >
              계정 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
