import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Writerecr.css';

function Writerecr() {
  const { top, sub, final } = useParams();
  const navigate = useNavigate();

  const [fields, setFields] = useState([
    { progress: '', schedule: '', isNew: false }, // 초기 필드에는 `isNew`를 false로 설정
  ]);

  const handleAddField = () => {
    setFields([...fields, { progress: '', schedule: '', isNew: true }]); // 추가된 필드는 `isNew`를 true로 설정
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('모집공고가 등록되었습니다.');
    navigate('/mypage');
  };

  return (
    <div>
      <div>
        <p>
          {top}
          {sub}
          {final}
        </p>
      </div>
      <div className="W-recr-container">
        <div className="W-recr-toptitle">
          <p>모집공고를 작성해주세요</p>
        </div>
        <div>
          <form className="W-recr-form" onSubmit={handleSubmit}>
            <div className="layout-LR">
              <div className="left">
                {fields.map((field, index) => (
                  <div
                    className={`W-recr-row ${field.isNew ? 'new-field' : ''}`} // `isNew`에 따라 클래스 추가
                    key={index}
                  >
                    <div className="W-recr-field">
                      {/* 초기 필드에만 label 표시 */}
                      {!field.isNew && <label htmlFor={`progress-${index}`}>모집 진행</label>}
                      <input
                        type="text"
                        id={`progress-${index}`}
                        value={field.progress}
                        onChange={e => handleFieldChange(index, 'progress', e.target.value)}
                        placeholder={field.isNew ? '' : ''}
                      />
                    </div>
                    <div className="W-recr-field">
                      {/* 초기 필드에만 label 표시 */}
                      {!field.isNew && <label htmlFor={`schedule-${index}`}>진행 일정</label>}
                      <input
                        type="text"
                        id={`schedule-${index}`}
                        value={field.schedule}
                        onChange={e => handleFieldChange(index, 'schedule', e.target.value)}
                        placeholder={field.isNew ? 'ex. 24.10.1~24.10.31' : 'ex. 24.10.1~24.10.31'}
                      />
                    </div>
                  </div>
                ))}
                <button type="button" className="addbutton" onClick={handleAddField}>
                  추가하기
                </button>
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
                  <div className="W-recr-field recr-pdf-box">
                    <label htmlFor="attachment">PDF 첨부</label>
                    <input type="file" id="attachment" accept="application/pdf" />
                  </div>
                </div>
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
