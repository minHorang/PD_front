import React from 'react';
import './PDdata.css';
import { useNavigate } from 'react-router-dom';
import sample from '../../../assets/sample.pdf';

const data = [
  {
    id: 1,
    title: '문학 대회 준비팀 모집',
    selectedComponent: ['LI', 'IT'],
    who: '문학',
    type: '대회',
    time: '2024.11.20 ~ 2024.12.18',
    content: sample || '',
    textcontent: '대회 준비 및 팀 구성 관련 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 2,
    title: '백엔드 개발자 모집',
    selectedComponent: ['MD'],
    who: '영상/미디어',
    type: '공모전',
    time: '2024.12.01 ~ 2025.01.01',
    content: sample || '',
    textcontent: '백엔드 기술 심화 스터디 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '리뷰', date: '25.1.1 ~ 25.1.10' },
      { step: '결과 발표', date: '25.1.15' },
    ],
  },
  {
    id: 3,
    title: '프론트엔드 스터디 모집',
    selectedComponent: ['IT'],
    who: '개발',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
    textcontent: '프론트엔드 심화 학습',
    process: [
      { step: '모집', date: '상시' },
      { step: '스터디 진행', date: '상시' },
    ],
  },
  {
    id: 4,
    title: '귀카피 가능자 모집',
    selectedComponent: ['MS'],
    who: '음악',
    type: '스타트업',
    time: '2024.11.15 ~ 2024.12.20',
    content: sample || '',
    textcontent: '음악 프로젝트 협업 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
    ],
  },
  {
    id: 5,
    title: 'UI/UX 디자이너 모집',
    selectedComponent: ['MD', 'IT'],
    who: '개발, 영상/미디어',
    type: '스타트업',
    time: '2024.12.10 ~ 2025.01.10',
    content: sample || '',
    textcontent: 'UI/UX 디자인 협업 프로젝트입니다. 자세한 내용은 아래 PDF를 참고해주세요',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '서류 심사', date: '24.11.1 ~ 24.12.31' },
      { step: '면접', date: '25.1.1 ~ 25.1.14' },
      { step: '합격 발표', date: '25.1.15' },
    ],
  },
  {
    id: 6,
    title: '웹 개발 협업',
    selectedComponent: ['IT', 'MS'],
    who: '개발',
    type: '협업 프로젝트',
    time: '2024.12.01 ~ 2025.02.28',
    content: sample || '',
    textcontent: '웹 개발 프로젝트 정보',
    process: [
      { step: '모집', date: '24.10.15 ~ 24.11.15' },
      { step: '개발 진행', date: '24.12.1 ~ 25.2.28' },
    ],
  },
  {
    id: 7,
    title: '영상 콘텐츠 제작 협업',
    selectedComponent: ['MD'],
    who: '영상/미디어',
    type: '팀 프로젝트',
    time: '2024.11.01 ~ 2025.01.31',
    content: sample || '',
    textcontent: '미디어 콘텐츠 제작 프로젝트 정보',
    process: [
      { step: '아이디어 제출', date: '24.11.1 ~ 24.11.15' },
      { step: '제작 진행', date: '24.11.16 ~ 25.1.31' },
    ],
  },
  {
    id: 8,
    title: '문학 비평 스터디 모집',
    selectedComponent: ['LI'],
    who: '문학',
    type: '스터디',
    time: '2024.12.01 ~ 2025.01.01',
    content: sample || '',
    textcontent: '문학 작품 비평 스터디 정보',
    process: [
      { step: '모집', date: '24.11.15 ~ 24.11.30' },
      { step: '스터디 진행', date: '24.12.1 ~ 25.1.1' },
    ],
  },
  {
    id: 9,
    title: '스타트업 마케팅 팀 모집',
    selectedComponent: ['MS', 'MD'],
    who: '음악/미디어',
    type: '스타트업',
    time: '2024.12.15 ~ 2025.02.15',
    content: sample || '',
    textcontent: '마케팅 전략 수립 및 실행 정보',
    process: [
      { step: '모집', date: '24.12.1 ~ 24.12.14' },
      { step: '진행', date: '24.12.15 ~ 25.2.15' },
    ],
  },
  {
    id: 10,
    title: 'AI 기반 앱 개발팀 모집',
    selectedComponent: ['IT', 'MD'],
    who: '개발/미디어',
    type: '팀 프로젝트',
    time: '2025.01.01 ~ 2025.03.31',
    content: sample || '',
    textcontent: 'AI 기술을 활용한 앱 개발 프로젝트',
    process: [
      { step: '모집', date: '24.12.1 ~ 24.12.31' },
      { step: '개발 진행', date: '25.1.1 ~ 25.3.31' },
    ],
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
