import React from 'react';
import './Port.css';
import { useNavigate } from 'react-router-dom';
import sample from '../../../assets/sample.pdf';

const data = [
  {
    id: 1,
    title: '프론트엔드 개발자 입니다',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 2,
    title: '백엔드 개발자를 구합니다.',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '프로젝트',
    time: '2024.11.15 ~ 2024.12.30',
    content: sample || '',
  },
  {
    id: 3,
    title: '풀스택 개발자와 협업하고 싶습니다.',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2025.01.01 ~ 2025.03.01',
    content: sample || '',
  },
  {
    id: 4,
    title: 'React 스터디원 모집합니다.',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 5,
    title: '귀카피 가능자입니다',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '스타트업',
    time: '2024.11.15 ~ 2024.12.20',
    content: sample || '',
  },
  {
    id: 6,
    title: '음악 작업 함께하실 분 찾습니다.',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '협업 프로젝트',
    time: '2025.01.01 ~ 2025.03.15',
    content: sample || '',
  },
  {
    id: 7,
    title: '음악 스튜디오 창업 멤버를 구합니다.',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '스타트업',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 8,
    title: '미디어커뮤니케이션전공 졸업생입니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '면접 스터디',
    time: '2024.12.01 ~ 2025.01.01',
    content: sample || '',
  },
  {
    id: 9,
    title: '미디어 제작 경험 많은 팀원 모집합니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2024.11.20 ~ 2024.12.31',
    content: sample || '',
  },
  {
    id: 10,
    title: '영상 제작 관련 스터디 모집 중입니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 11,
    title: '광고 및 미디어 캠페인 협업 기회 제공.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '프로젝트',
    time: '2025.01.10 ~ 2025.03.10',
    content: sample || '',
  },
  {
    id: 12,
    title: '미디어 디자인 스터디원 모집합니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 13,
    title: '문예창작과 2학년입니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '2024.11.15 ~ 2024.12.20',
    content: sample || '',
  },
  {
    id: 14,
    title: '글쓰기 워크숍에 참여할 분 찾습니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2025.01.05 ~ 2025.02.28',
    content: sample || '',
  },
  {
    id: 15,
    title: '소설 창작 스터디원 모집합니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 16,
    title: '문학 비평 스터디 함께 하실 분 구합니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '2024.12.01 ~ 2024.12.30',
    content: sample || '',
  },
  {
    id: 17,
    title: '출판사와 협업할 기회를 찾습니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '프로젝트',
    time: '2025.02.01 ~ 2025.04.01',
    content: sample || '',
  },
  {
    id: 18,
    title: '시 창작 스터디를 운영하고 있습니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: sample || '',
  },
  {
    id: 19,
    title: '문예 창작 팀원 구합니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2024.12.01 ~ 2025.01.15',
    content: sample || '',
  },
];

function Port({ selectedComponent }) {
  const navigate = useNavigate();

  if (!selectedComponent) {
    return null;
  }
  const handledetail = item => {
    navigate(`/portfolio/${item.id}`, { state: { ...item } });
  };

  const filteredData = data.filter(item => item.selectedComponent === selectedComponent);

  return (
    <div className="portfolio-container">
      <div className="portfolio-topbar">
        <div className="portfolio-title">
          <p>제목</p>
        </div>
        <div className="portfolio-type">
          <p>분류</p>
        </div>
        <div className="portfolio-time">
          <p>모집 기간</p>
        </div>
      </div>
      {filteredData.map((item, index) => (
        <div className="portfolio-array" key={index}>
          <div className="portfolio-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="portfolio-type-content">
            <p>{item.type}</p>
          </div>
          <div className="portfolio-time-content">
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Port;
