import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portapply.css';

function Portapply() {
  const navigate = useNavigate();

  const [teamIntro, setTeamIntro] = useState(''); // 팀 소개
  const myPosts = [
    '스터디 인원 모집합니다',
    '프론트엔드 개발자 입니다',
    '대회 인원 모집합니다',
    'UX/UI 디자이너입니다',
  ];
  const handleSubmit = event => {
    event.preventDefault();

    if (!teamIntro.trim()) {
      alert('팀 소개서를 선택해주세요.');
      return;
    }

    alert('제의서 등록 완료');
    navigate('/mypage');
  };

  return (
    <div>
      <div className="apply-port-container">
        <div className="apply-port-toptitle">
          <p>제의서를 작성해주세요</p>
        </div>
        <form className="apply-port-form" onSubmit={handleSubmit}>
          <div className="apply-port-field">
            <label htmlFor="title">팀 소개서</label>
            <select id="team-intro" value={teamIntro} onChange={e => setTeamIntro(e.target.value)}>
              <option value="" disabled>
                팀 소개를 선택해주세요
              </option>
              {myPosts.map((post, index) => (
                <option key={index} value={post}>
                  {post}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="apply-port-submit">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Portapply;
