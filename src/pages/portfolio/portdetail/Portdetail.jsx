import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Portdetail.css';

function Portdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  // 프로젝트 제의 버튼 클릭 시 실행
  const handleportapply = item => {
    if (!item || !item.id) {
      console.error('item 또는 item.id가 없습니다.');
      return;
    }
    navigate(`/portfolio/${item.id}/apply`, { state: { ...item } });
  };

  // URL 파라미터 id가 없는 경우 에러 메시지 표시
  if (!id) {
    return <p>ID가 제공되지 않았습니다.</p>;
  }

  // item 상태가 없는 경우 에러 메시지 표시
  if (!item) {
    return <p>포트폴리오 데이터가 제공되지 않았습니다.</p>;
  }

  return (
    <div>
      <div className="portdetail-container">
        <div className="Pddetailtoptitle">
          <p>{item.title}</p>
        </div>
        <div className="portpdf">{item.content}</div>
        <div className="portbutton">
          <button onClick={() => handleportapply(item)}>프로젝트 제의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Portdetail;
