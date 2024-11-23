import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portapply.css';

function Portapply() {
  const navigate = useNavigate();

  const handleSubmit = () => {
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
            <textarea type="text" id="title" placeholder="" />
          </div>
          <div className="apply-port-field">
            <div className="apply-port-field apply-port-pdf-box">
              <label htmlFor="portfolio">팀 포트폴리오 PDF</label>
              <input type="file" id="portfolio" accept="application/pdf" />
            </div>
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
