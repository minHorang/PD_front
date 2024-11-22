import React from 'react';
import './BDdata.css';
import { useNavigate } from 'react-router-dom';
import sample from '../../../assets/sample.pdf';

const data = [
  {
    id: 1,
    title: '스터디 인원 모집합니다',
    who: 'IOS 개발 가능자',
    selectedComponent: 'LI',
    selecttype: 'Recr',
    type: '스터디',
    time: '2024.11.20 ~ 2024.12.18',
    content: sample || '',
    textcontent: '대회 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 2,
    title: '백엔드 개발자 구합니다',
    who: '백엔드 개발자',
    selectedComponent: 'MD',
    selecttype: 'Recr',
    type: '스터디',
    time: '2024.12.01 ~ 2025.01.01',
    content: sample || '',
    textcontent: '대회 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 3,
    title: '프론트엔드 개발자 입니다',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 4,
    title: '귀카피 가능자입니다',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '스타트업',
    time: '2024.11.15 ~ 2024.12.20',
    content: sample || '',
  },
];

function BDdata({ selectedComponent, selecttype }) {
  const navigate = useNavigate();
  if (!selectedComponent || !selecttype) {
    return null;
  }

  const handledetail = item => {
    if (item.selecttype === 'Recr') {
      navigate(`/board/recr/${item.id}`, { state: { ...item } });
    } else if (item.selecttype === 'Port') {
      if (item.content) {
        navigate(`/board/port/${item.id}`, { state: { ...item } });
      } else {
        alert('PDF 파일이 없습니다.');
      }
    }
  };
  const filteredData = data.filter(
    item => item.selectedComponent === selectedComponent && item.selecttype === selecttype
  );

  return (
    <div className="BD-container">
      <div className="BD-topbar">
        <div className="BD-title">
          <p>제목</p>
        </div>
        <div className="BD-type">
          <p>분류</p>
        </div>
        <div className="BD-time">
          <p>모집 기간</p>
        </div>
      </div>
      {filteredData.map((item, index) => (
        <div className="BD-array" key={index}>
          <div className="BD-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="BD-type-content">
            <p>{item.type}</p>
          </div>
          <div className="BD-time-content">
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BDdata;
