import React, { useState } from 'react';
import './Login.css';
import './Join.css';

function Login({ isOpen, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  if (!isOpen) return null;

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleAccountCreation = () => {
    setIsRegisterMode(true);
  };
  const handleLoginMode = () => {
    setIsRegisterMode(false);
  };
  const handleLogin = () => {
    setInputValue(onClose);
  };
  return (
    <div className="modal-overlay">
      <div className="login-container">
        {isRegisterMode ? (
          <div className="join-container">
            <div className="join-title">
              <p>회원가입</p>
            </div>
            <div className="join-input">
              <input
                id="join-input-nick"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="닉네임"
              />
              <input
                id="join-input-pw"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="아이디"
              />
              <input
                id="join-input-pw"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="비밀번호"
              />
              <input
                id="join-input-email"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="이메일"
              />
              <input
                id="join-input-port"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="포트폴리오"
              />
              <div className="join-error-box">
                <div className="login-error">
                  <p>문구</p>
                </div>
              </div>
              <div className="join-button">
                <button onClick={handleLoginMode}>계정생성</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
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
              <div className="login-button">
                <button onClick={handleLogin}>로그인</button>
              </div>
              <div className="account-add-button">
                <button
                  onClick={() => {
                    handleAccountCreation();
                  }}
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
