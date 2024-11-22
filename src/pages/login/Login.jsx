import React, { useState } from 'react';
import './Login.css';
import './Join.css';

function Login({ isOpen, onClose }) {
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginusername, setloginUsername] = useState('');
  const [loginpassword, setloginPassword] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const existingNicknames = ['user1', 'testUser', 'example'];

  if (!isOpen) return null;

  const handlePortfolioUpload = e => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileUrl = URL.createObjectURL(file);
      setPortfolioUrl(fileUrl);
    } else {
      alert('PDF 파일만 업로드할 수 있습니다.');
    }
  };

  const handleNicknameChange = e => {
    const nicknameValue = e.target.value;
    setNickname(nicknameValue);

    if (existingNicknames.includes(nicknameValue)) {
      setErrorMessage('닉네임 중복');
    } else {
      setErrorMessage('');
    }
  };

  const handleAccountCreation = () => {
    if (!nickname || !username || !password || !email) {
      alert('모든 정보를 입력하세요.');
      return;
    }

    if (!errorMessage) {
      alert('회원가입 완료');
      setIsRegisterMode(false); // 회원가입 완료 후 로그인 모드로 전환
    }
  };

  const handleLogin = () => {
    if (!loginusername || !loginpassword) {
      alert('모두 입력하세요.');
      return;
    }
    onClose();
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
                value={nickname}
                onChange={handleNicknameChange}
                placeholder="닉네임"
              />
              <input
                id="join-input-id"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="아이디"
              />
              <input
                id="join-input-pw"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="비밀번호"
              />
              <input
                id="join-input-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="이메일"
              />
              <div className="portfolio-upload-wrapper">
                <div className="portfolio-upload">
                  <p htmlFor="portfolio-input">포트폴리오(PDF)</p>
                  <div className="porturl">
                    <input
                      id="portfolio-input"
                      type="file"
                      accept="application/pdf"
                      onChange={handlePortfolioUpload}
                    />
                    {portfolioUrl && (
                      <p>
                        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
                          열기
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {errorMessage && (
                <div className="join-error-box">
                  <div className="join-error">
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}
              <div className="join-button">
                <button onClick={handleAccountCreation}>계정생성</button>
              </div>
              <div className="back-to-login">
                <button onClick={() => setIsRegisterMode(false)}>로그인으로 돌아가기</button>
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
                value={loginusername}
                onChange={e => setloginUsername(e.target.value)}
                placeholder="아이디"
              />
              <input
                id="login-input-pw"
                type="password"
                value={loginpassword}
                onChange={e => setloginPassword(e.target.value)}
                placeholder="비밀번호"
              />
              <div className="login-button">
                <button onClick={handleLogin}>로그인</button>
              </div>
              <div className="account-add-button">
                <button onClick={() => setIsRegisterMode(true)}>회원가입</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
