import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GTapply.css';

function GTapply() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/mypage');
  };
  return (
    <div>
      <div className="apply-GT-container">
        <div className="apply-GT-toptitle">
          <p>지원서를 작성해주세요</p>
        </div>
        <form className="apply-GT-form" onSubmit={handleSubmit}>
          <div className="apply-GT-field">
            <label htmlFor="title">팀 소개서</label>
            <textarea type="text" id="title" placeholder="" />
          </div>
          <div className="apply-GT-field">
            <div className="W-GT-field apply-GT-pdf-box">
              <label htmlFor="portfolio">팀 포트폴리오 PDF</label>
              <input type="file" id="portfolio" accept="application/pdf" />
            </div>
          </div>
          <button type="submit" className="apply-GT-submit">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default GTapply;
