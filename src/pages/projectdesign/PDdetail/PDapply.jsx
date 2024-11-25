import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PDapply.css';

function PDapply() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/mypage');
  };
  return (
    <div>
      <div className="apply-PD-container">
        <div className="apply-PD-toptitle">
          <p>지원서를 작성해주세요</p>
        </div>
        <form className="apply-PD-form" onSubmit={handleSubmit}>
          <div className="apply-PD-field">
            <label htmlFor="title">팀 소개서</label>
            <textarea type="text" id="title" placeholder="" />
          </div>
          <button type="submit" className="apply-PD-submit">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default PDapply;
