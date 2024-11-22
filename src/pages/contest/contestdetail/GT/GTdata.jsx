import React from 'react';
import './GTdata.css';
import { useNavigate } from 'react-router-dom';
import sample from '../../../../assets/sample.pdf';

const data = [
  {
    id: 1,
    title: '스터디 인원 모집합니다',
    selectedComponent: 'LIXMS',
    selecttype: 'LI',
    who: '문학',
    type: '스터디',
    time: '2024.11.20 ~ 2024.12.18',
    content: sample || '',
    textcontent: '스터디 정보',
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
    selectedComponent: 'MDXLI',
    selecttype: 'MD',
    who: '영상/미디어',
    type: '스터디',
    time: '2024.12.01 ~ 2025.01.01',
    content: sample || '',
    textcontent: '프로젝트 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 3,
    title: '프론트엔드 스터디 모집',
    selectedComponent: 'ITXMD',
    selecttype: 'IT',
    who: '개발',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
    textcontent: '스터디 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 4,
    title: '귀카피 가능 자 모집',
    selectedComponent: 'ITXMS',
    selecttype: 'MS',
    who: '음악',
    type: '스타트업',
    time: '2024.11.15 ~ 2024.12.20',
    content: sample || '',
    textcontent: '스타트업 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
];

function GTdata({ selectedComponent, selecttype }) {
  const navigate = useNavigate();
  if (!selectedComponent || !selecttype) {
    return null;
  }
  const handledetail = item => {
    navigate(`/contest/getteam/detail/${item.id}`, { state: { ...item } });
  };
  const filteredData = data.filter(
    item => item.selectedComponent === selectedComponent && item.selecttype === selecttype
  );

  return (
    <div className="PD-container">
      <div className="PD-topbar">
        <div className="PD-title">
          <p>제목</p>
        </div>
        <div className="PD-type">
          <p>분류</p>
        </div>
        <div className="PD-time">
          <p>모집 기간</p>
        </div>
      </div>
      {filteredData.map((item, index) => (
        <div className="PD-array" key={index}>
          <div className="PD-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="PD-type-content">
            <p>{item.type}</p>
          </div>
          <div className="PD-time-content">
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GTdata;
