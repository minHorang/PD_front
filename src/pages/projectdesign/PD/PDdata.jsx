import React from 'react';
import './PDdata.css';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: '문학 대회 준비팀 모집',
    selectedComponent: ['LI', 'IT'],
    who: '문학',
    type: '대회',
    time: '2024.11.20 ~ 2024.12.18',
    textcontent: '대회 준비 및 팀 구성 관련 정보',
    process: '어쩌구',
  },
  {
    id: 2,
    title: '백엔드 개발자 모집',
    selectedComponent: ['MD'],
    who: '영상/미디어',
    type: '공모전',
    time: '2024.12.01 ~ 2025.01.01',
    textcontent: '백엔드 기술 심화 스터디 정보',
    process: '어쩌구',
  },
  {
    id: 3,
    title: '프론트엔드 스터디 모집',
    selectedComponent: ['IT'],
    who: '개발',
    type: '스터디',
    time: '상시 가능',
    textcontent: '프론트엔드 심화 학습',
    process: '어쩌구',
  },
  {
    id: 4,
    title: '귀카피 가능자 모집',
    selectedComponent: ['MS'],
    who: '음악',
    type: '스타트업',
    time: '2024.11.15 ~ 2024.12.20',
    textcontent: '음악 프로젝트 협업 정보',
    process: '어쩌구',
  },
  {
    id: 5,
    title: 'UI/UX 디자이너 모집',
    selectedComponent: ['MD', 'IT'],
    who: '개발, 영상/미디어',
    type: '스타트업',
    time: '2024.12.10 ~ 2025.01.10',
    textcontent: 'UI/UX 디자인 협업 프로젝트입니다.',
    process: '어쩌구',
  },
  {
    id: 6,
    title: '웹 개발 협업',
    selectedComponent: ['IT', 'MS'],
    who: '개발',
    type: '협업 프로젝트',
    time: '2024.12.01 ~ 2025.02.28',
    textcontent: '웹 개발 프로젝트 정보',
    process: '어쩌구',
  },
  {
    id: 7,
    title: '영상 콘텐츠 제작 협업',
    selectedComponent: ['MD'],
    who: '영상/미디어',
    type: '팀 프로젝트',
    time: '2024.11.01 ~ 2025.01.31',
    textcontent: '미디어 콘텐츠 제작 프로젝트 정보',
    process: '어쩌구',
  },
  {
    id: 8,
    title: '문학 비평 스터디 모집',
    selectedComponent: ['LI'],
    who: '문학',
    type: '스터디',
    time: '2024.12.01 ~ 2025.01.01',
    textcontent: '문학 작품 비평 스터디 정보',
    process: '어쩌구',
  },
  {
    id: 9,
    title: '스타트업 마케팅 팀 모집',
    selectedComponent: ['MS', 'MD'],
    who: '음악/미디어',
    type: '스타트업',
    time: '2024.12.15 ~ 2025.02.15',
    textcontent: '마케팅 전략 수립 및 실행 정보',
    process: '어쩌구',
  },
  {
    id: 10,
    title: 'AI 기반 앱 개발팀 모집',
    selectedComponent: ['IT', 'MD'],
    who: '개발/미디어',
    type: '팀 프로젝트',
    time: '2025.01.01 ~ 2025.03.31',
    textcontent: 'AI 기술을 활용한 앱 개발 프로젝트',
    process: '어쩌구',
  },
];

function PDdata({ selectedComponent }) {
  const navigate = useNavigate();
  if (!selectedComponent) {
    return null;
  }

  const handledetail = item => {
    navigate(`/projectdesign/detail/${item.id}`, { state: { ...item } });
  };

  // selectedComponent가 데이터의 selectedComponent 배열에 포함된 항목만 필터링
  const filteredData = data.filter(item => item.selectedComponent.includes(selectedComponent));

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

export default PDdata;
