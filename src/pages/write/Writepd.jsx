import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import './Writepd.css';

function Writepd() {
  //const { top, sub, final } = useParams();
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
      <div className="W-pd-container">
        <div className="W-pd-toptitle">
          <p>협업공고를 작성해주세요</p>
        </div>
        <div>
          <form className="W-pd-form" onSubmit={handleSubmit}>
            <div className="layout-LR">
              <div className="left">
                <div className="W-pd-row">
                  <div className="W-recr-field">
                    <label htmlFor="title">글 제목</label>
                    <input type="text" id="title" placeholder="" />
                  </div>
                </div>
                {fields.map((field, index) => (
                  <div
                    className={`W-pd-row ${field.isNew ? 'new-field' : ''}`} // `isNew`에 따라 클래스 추가
                    key={index}
                  >
                    <div className="W-pd-field">
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
                    <div className="W-pd-field">
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
                <div className="W-pd-row">
                  <div className="W-pd-field">
                    <label htmlFor="target">모집 대상 분류</label>
                    <select id="target" name="target" defaultValue="">
                      <option value="" disabled>
                        선택
                      </option>
                      <option value="development">개발</option>
                      <option value="media">영상/미디어</option>
                      <option value="literature">문학</option>
                      <option value="music">음악</option>
                    </select>
                  </div>
                </div>

                <div className="W-pd-row">
                  <div className="W-pd-field">
                    <label htmlFor="type">분류</label>
                    <input type="text" id="type" placeholder="ex. 스타트업, 대회" />
                  </div>
                </div>
                <div className="W-pd-row">
                  <div className="W-pd-field">
                    <label htmlFor="duration">모집기간</label>
                    <input type="text" id="duration" placeholder="ex. 2024.11.20~2024.12.18" />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="W-pd-row">
                  <div className="W-pd-field pd-pdf-box">
                    <label htmlFor="attachment">PDF 첨부</label>
                    <input type="file" id="attachment" accept="application/pdf" />
                  </div>
                </div>
                <div className="W-pd-row">
                  <div className="W-pd-field">
                    <label htmlFor="info">진행할 프로젝트 정보</label>
                    <textarea id="info" rows="5" placeholder=""></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="W-pd-submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Writepd;
