import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Recrdetail.css';

function Recrdetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  const handlerecrapply = () => {
    if (!item || !item.id) {
      console.error('item 또는 item.id가 없습니다.');
      return;
    }
    navigate(`/team/${item.id}/apply`, { state: { ...item } });
  };

  if (!id) {
    return <p>ID가 제공되지 않았습니다.</p>;
  }

  return (
    <div>
      <div className="recrdetail-container">
        <div className="recrtoptitle">
          <p>{item.title}</p>
        </div>
        <p className="recrprocessfontsize">모집 진행</p>
        <div className="recrprocess">
          <p>{item.process}</p>
        </div>
        <p className="recrparticipationfontsize">모집 대상</p>
        <div className="recrparticipation">
          <p>{item.who}</p>
        </div>
        <p className="recrevaluationfontsize">모집 정보</p>
        <div className="recrevaluation">
          <p>{item.textcontent}</p>
        </div>

        <div className="recrbutton">
          <button onClick={handlerecrapply}>프로젝트 지원하기</button>
        </div>
      </div>
    </div>
  );
}

export default Recrdetail;
