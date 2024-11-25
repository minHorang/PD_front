import React from 'react';
import './Teamdata.css';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: '스타트업 인원 모집합니다',
    who: 'IOS 개발 가능자',
    selectedComponent: 'IT',
    selecttype: 'Recr',
    type: '스타트업',
    time: '2024.10.1 ~ 2025.1.15',
    textcontent: '모집 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '서류 심사', date: '24.11.1 ~ 24.12.31' },
      { step: '면접', date: '25.1.1 ~ 25.1.14' },
      { step: '합격 발표', date: '25.1.15' },
    ],
  },
  {
    id: 2,
    title: '영상 제작 대회 팀원 구합니다',
    who: '영상 디자이너',
    selectedComponent: 'MD',
    selecttype: 'Recr',
    type: '대회',
    time: '2024.12.01 ~ 2025.01.01',
    textcontent: '모집 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 5,
    title: '미디어 아트 공모전 준비',
    who: '미디어 아티스트',
    selectedComponent: 'MD',
    selecttype: 'Recr',
    type: '공모전',
    time: '2024.12.01 ~ 2025.01.01',
    textcontent: '모집 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 6,
    title: '다큐멘터리 제작 프로젝트',
    who: '다큐멘터리 제작자',
    selectedComponent: 'MD',
    selecttype: 'Recr',
    type: '프로젝트',
    time: '2024.12.01 ~ 2025.01.01',
    textcontent: '모집 정보',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 7,
    title: '백엔드 스터디 구합니다',
    who: '백엔드를 배우고 싶은 누구나',
    selectedComponent: 'IT',
    selecttype: 'Recr',
    type: '프로젝트',
    time: '2024.12.01 ~ 2025.01.01',
    textcontent: '스터디 커리큘럼',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 9,
    title: '창작 문학 스터디 모집',
    who: '문학 창작에 관심 있는 누구나',
    selectedComponent: 'LI',
    selecttype: 'Recr',
    type: '스터디',
    time: '2024.12.01 ~ 2025.02.01',
    textcontent: '창작 문학 워크숍',
    process: [
      { step: '모집', date: '24.10.15 ~ 24.11.15' },
      { step: '진행', date: '24.12.1 ~ 25.1.31' },
      { step: '투표', date: '25.2.1 ~ 25.2.5' },
      { step: '수상', date: '25.2.10' },
    ],
  },
  {
    id: 10,
    title: '문학 비평 세미나 팀원 모집',
    who: '문학 비평과 토론을 원하는 사람',
    selectedComponent: 'LI',
    selecttype: 'Recr',
    type: '세미나',
    time: '2024.11.20 ~ 2025.01.20',
    textcontent: '현대 문학 비평과 논의',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.20 ~ 25.1.15' },
      { step: '투표', date: '25.1.16 ~ 25.1.19' },
      { step: '수상', date: '25.1.20' },
    ],
  },
  {
    id: 11,
    title: '음악 제작 프로젝트 모집',
    who: '음악 작곡 및 편곡에 관심 있는 누구나',
    selectedComponent: 'MS',
    selecttype: 'Recr',
    type: '프로젝트',
    time: '2024.12.01 ~ 2025.03.01',
    textcontent: '음악 제작 및 발표',
    process: [
      { step: '모집', date: '24.10.20 ~ 24.11.20' },
      { step: '진행', date: '24.12.1 ~ 25.2.28' },
      { step: '투표', date: '25.3.1' },
      { step: '수상', date: '25.3.5' },
    ],
  },
  {
    id: 12,
    title: '밴드 커버 소모임',
    who: '밴드 활동을 원하시는 분',
    selectedComponent: 'MS',
    selecttype: 'Recr',
    type: '소모임',
    time: '2024.11.15 ~ 2025.01.15',
    textcontent: '밴드 커버 연습 및 공연',
    process: [
      { step: '모집', date: '24.10.15 ~ 24.11.10' },
      { step: '진행', date: '24.11.15 ~ 25.1.10' },
      { step: '투표', date: '25.1.11 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
  },
  {
    id: 13,
    title: '작곡 스터디 멤버 모집',
    who: '작곡을 배우고 싶은 누구나',
    selectedComponent: 'MS',
    selecttype: 'Recr',
    type: '스터디',
    time: '2024.12.01 ~ 2025.02.01',
    textcontent: '작곡 기본부터 실습까지',
    process: [
      { step: '모집', date: '24.10.25 ~ 24.11.25' },
      { step: '진행', date: '24.12.1 ~ 25.1.31' },
      { step: '투표', date: '25.2.1 ~ 25.2.5' },
      { step: '수상', date: '25.2.10' },
    ],
  },
];

function Teamdata({ selectedComponent }) {
  const navigate = useNavigate();

  if (!selectedComponent) {
    return null;
  }

  const handledetail = item => {
    navigate(`/team/${item.id}`, { state: { ...item } });
  };

  const filteredData = data.filter(item => item.selectedComponent === selectedComponent);

  return (
    <div className="team-container">
      <div className="team-topbar">
        <div className="team-title">
          <p>제목</p>
        </div>
        <div className="team-type">
          <p>분류</p>
        </div>
        <div className="team-time">
          <p>모집 기간</p>
        </div>
      </div>
      {filteredData.map((item, index) => (
        <div className="team-array" key={index}>
          <div className="team-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="team-type-content">
            <p>{item.type}</p>
          </div>
          <div className="team-time-content">
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teamdata;
