import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recrapply.css';

function Recrapply() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/mypage');
  };
  return (
    <div>
      <div className="apply-recr-container">
        <div className="apply-recr-toptitle">
          <p>지원서를 작성해주세요</p>
        </div>
        <form className="apply-recr-form" onSubmit={handleSubmit}>
          <div className="apply-recr-field">
            <label htmlFor="title">자기소개서</label>
            <textarea type="text" id="title" placeholder="" />
          </div>
          <button type="submit" className="apply-recr-submit">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recrapply;
