import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import './Writerecr.css';

function Writerecr() {
  //const { top, sub, final } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('모집공고가 등록되었습니다.');
    navigate('/mypage');
  };

  return (
    <div>
      <div className="W-recr-container">
        <div className="W-recr-toptitle">
          <p>모집공고를 작성해주세요</p>
        </div>
        <div>
          <form className="W-recr-form" onSubmit={handleSubmit}>
            <div className="layout-LR">
              <div className="left">
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="title">글 제목</label>
                    <input type="text" id="title" placeholder="" />
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="progress">모집 진행</label>
                    <input
                      type="text"
                      id="progress"
                      placeholder=""
                      maxLength={255} // 글자수 제한
                      onChange={e => setProgress(e.target.value)} // 상태 관리 (선택적으로 추가)
                    />
                    <p style={{ float: 'right', fontSize: '0.8em', color: 'gray' }}>
                      {progress.length}/255
                    </p>
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="target">모집 대상</label>
                    <input type="text" id="target" placeholder="" />
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="type">분류</label>
                    <input type="text" id="type" placeholder="ex. 스타트업, 대회 준비" />
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="duration">모집기간</label>
                    <input type="text" id="duration" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="info">모집 정보</label>
                    <textarea id="info" rows="5" placeholder=""></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="W-recr-submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Writerecr;
