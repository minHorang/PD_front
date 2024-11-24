import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Conapply.css';

function Conapply() {
  const navigate = useNavigate();

  const [team1Fields, setTeam1Fields] = useState([
    { progress: '', isNew: false }, // 초기 필드 상태
  ]);

  const [team2Fields, setTeam2Fields] = useState([{ progress: '', isNew: false }]);

  const handleAddFieldTeam1 = () => {
    setTeam1Fields([...team1Fields, { progress: '', isNew: true }]);
  };

  const handleAddFieldTeam2 = () => {
    setTeam2Fields([...team2Fields, { progress: '', isNew: true }]);
  };

  const handleFieldChangeTeam1 = (index, field, value) => {
    const updatedFields = [...team1Fields];
    updatedFields[index][field] = value;
    setTeam1Fields(updatedFields);
  };

  const handleFieldChangeTeam2 = (index, field, value) => {
    const updatedFields = [...team2Fields];
    updatedFields[index][field] = value;
    setTeam2Fields(updatedFields);
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert('지원서가 등록되었습니다.');
    navigate('/mypage');
  };

  return (
    <div>
      <div className="apply-con-container">
        <div className="apply-con-toptitle">
          <p>지원서를 작성해주세요</p>
        </div>
        <div>
          <form className="apply-con-form" onSubmit={handleSubmit}>
            <div className="layout-LR">
              <div className="apply-con-left">
                <div className="apply-con-field">
                  <label htmlFor="info">1팀 이름</label>
                  <input id="info" rows="5" placeholder=""></input>
                </div>
                {team1Fields.map((field, index) => (
                  <div className={`apply-con-row ${field.isNew ? 'new-field' : ''}`} key={index}>
                    <div className="apply-con-field">
                      {/* 초기 필드에만 label 표시 */}
                      {!field.isNew && <label htmlFor={`progress-${index}`}>1팀 팀원 닉네임</label>}
                      <input
                        type="text"
                        id={`progress-${index}`}
                        value={field.progress}
                        onChange={e => handleFieldChangeTeam1(index, 'progress', e.target.value)}
                        placeholder={field.isNew ? '' : ''}
                      />
                    </div>
                  </div>
                ))}
                <button type="button" className="addbutton" onClick={handleAddFieldTeam1}>
                  추가하기
                </button>
              </div>
              <div className="apply-con-center">
                <div className="apply-con-field">
                  <label htmlFor="info">2팀 이름</label>
                  <input id="info" rows="5" placeholder=""></input>
                </div>
                {team2Fields.map((field, index) => (
                  <div className={`apply-con-row ${field.isNew ? 'new-field' : ''}`} key={index}>
                    <div className="apply-con-field">
                      {/* 초기 필드에만 label 표시 */}
                      {!field.isNew && <label htmlFor={`progress-${index}`}>2팀 팀원 닉네임</label>}
                      <input
                        type="text"
                        id={`progress-${index}`}
                        value={field.progress}
                        onChange={e => handleFieldChangeTeam2(index, 'progress', e.target.value)}
                        placeholder={field.isNew ? '' : ''}
                      />
                    </div>
                  </div>
                ))}
                <button type="button" className="addbutton" onClick={handleAddFieldTeam2}>
                  추가하기
                </button>
              </div>
              <div className="apply-con-right">
                <div className="apply-con-field">
                  <label htmlFor="info">공모전 협업 팀 이름</label>
                  <input id="info" rows="5" placeholder=""></input>
                </div>
              </div>
            </div>
            <button type="submit" className="apply-con-submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Conapply;
