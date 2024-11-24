import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import './Writeport.css';

function Writeport() {
  //const { top, sub, final } = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/mypage');
  };
  return (
    <div>
      <div className="W-port-container">
        <div className="W-port-toptitle">
          <p>포트폴리오를 작성해주세요</p>
        </div>
        <form className="W-port-form" onSubmit={handleSubmit}>
          <div className="W-port-field">
            <label htmlFor="title">제목</label>
            <input type="text" id="title" placeholder="" />
          </div>
          <div className="W-port-field">
            <label htmlFor="category">분류</label>
            <input type="text" id="category" placeholder="ex. 무관, 스터디, 대회" />
          </div>
          <div className="W-port-field">
            <label htmlFor="duration">모집기간</label>
            <input type="text" id="duration" placeholder="ex. 상시 가능, 2024.11.20~2024.12.18" />
          </div>
          <div className="W-port-field">
            <div className="W-port-field port-pdf-box">
              <label htmlFor="portfolio">포트폴리오 PDF</label>
              <input type="file" id="portfolio" accept="application/pdf" />
            </div>
          </div>
          <button type="submit" className="W-port-submit">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Writeport;
