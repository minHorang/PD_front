import React from 'react';
import './Port.css';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: '프론트엔드 개발자 입니다',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 2,
    title: '백엔드 개발자를 구합니다.',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '프로젝트',
    time: '2024.11.15 ~ 2024.12.30',
    content: '자기소개서',
  },
  {
    id: 3,
    title: '풀스택 개발자와 협업하고 싶습니다.',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2025.01.01 ~ 2025.03.01',
    content: `
  안녕하세요, 저는 현재 웹 개발 및 프로젝트 매니지먼트에 관심을 가지고 다양한 프로젝트를 진행 중인 개발자입니다. 이번에 풀스택 개발자와 협업하여 창의적이고 도전적인 프로젝트를 진행하고자 이렇게 글을 작성하게 되었습니다.<br/><br/>
  
  <strong>프로젝트 주제</strong><br/>
  - <strong>목표:</strong> 사용자 친화적이고 실질적인 문제를 해결할 수 있는 웹 애플리케이션 개발<br/>
  - <strong>분야:</strong> 소셜 플랫폼, 생산성 도구, 데이터 시각화 등<br/>
  - <strong>기술 스택:</strong> React, Node.js, Express, MongoDB (협의 가능)<br/><br/>
  
  <strong>저에 대해</strong><br/>
  - <strong>주요 역할:</strong> 프론트엔드 개발 (UI/UX 디자인 포함) 및 프로젝트 기획<br/>
  - <strong>경험:</strong><br/>
    &nbsp;&nbsp;- React 및 TypeScript 기반으로 개인 프로젝트 진행<br/>
    &nbsp;&nbsp;- 협업 프로젝트에서 Git 및 Agile 방식 활용 경험<br/>
    &nbsp;&nbsp;- 간단한 백엔드 API 연동 및 데이터베이스 설계 가능<br/><br/>
  
  <strong>원하는 협업 대상</strong><br/>
  - <strong>풀스택 개발자</strong><br/>
    &nbsp;&nbsp;- 프론트엔드와 백엔드 모두의 개발 경험이 있는 분<br/>
    &nbsp;&nbsp;- 코드 리뷰 및 기술 스택 선정에 적극적으로 참여해 주실 분<br/>
    &nbsp;&nbsp;- 팀워크를 중요시하고, 새로운 도전을 즐기는 분<br/><br/>
  
  <strong>진행 방식</strong><br/>
  - <strong>협업 도구:</strong> GitHub, Slack/Discord, Notion<br/>
  - <strong>작업 일정:</strong> 2024년 12월 ~ 2025년 2월 (협의 가능)<br/>
  - <strong>미팅 방식:</strong> 주 1회 온라인 회의 및 일일 커뮤니케이션 (유연 조정 가능)<br/><br/>
  
  <strong>기대 효과</strong><br/>
  - 서로의 강점을 살려, 현실적이고 사용자들에게 유용한 제품을 개발할 수 있는 기회<br/>
  - 다양한 문제를 해결하며 새로운 기술과 트렌드를 학습<br/>
  - 프로젝트를 완성하고, 포트폴리오로 활용 가능<br/><br/>
  
  <strong>연락처</strong><br/>
  - <strong>이메일:</strong> example@email.com<br/>
  - <strong>Slack ID:</strong> @example<br/><br/>
  
  저는 개발과 기획을 함께 할 수 있는 풀스택 개발자와 함께 열정적으로 이 프로젝트를 성공적으로 이끌어가고 싶습니다. 관심 있으신 분들은 부담 없이 연락 부탁드립니다. 감사합니다!
`,
  },
  {
    id: 4,
    title: 'React 스터디원 모집합니다.',
    selectedComponent: 'IT',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 5,
    title: '귀카피 가능자입니다',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '스타트업',
    time: '2024.11.15 ~ 2024.12.20',
    content: '자기소개서',
  },
  {
    id: 6,
    title: '음악 작업 함께하실 분 찾습니다.',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '협업 프로젝트',
    time: '2025.01.01 ~ 2025.03.15',
    content: '자기소개서',
  },
  {
    id: 7,
    title: '음악 스튜디오 창업 멤버를 구합니다.',
    selectedComponent: 'MS',
    selecttype: 'Port',
    type: '스타트업',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 8,
    title: '미디어커뮤니케이션전공 졸업생입니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '면접 스터디',
    time: '2024.12.01 ~ 2025.01.01',
    content: '자기소개서',
  },
  {
    id: 9,
    title: '미디어 제작 경험 많은 팀원 모집합니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2024.11.20 ~ 2024.12.31',
    content: '자기소개서',
  },
  {
    id: 10,
    title: '영상 제작 관련 스터디 모집 중입니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 11,
    title: '광고 및 미디어 캠페인 협업 기회 제공.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '프로젝트',
    time: '2025.01.10 ~ 2025.03.10',
    content: '자기소개서',
  },
  {
    id: 12,
    title: '미디어 디자인 스터디원 모집합니다.',
    selectedComponent: 'MD',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 13,
    title: '문예창작과 2학년입니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '2024.11.15 ~ 2024.12.20',
    content: '자기소개서',
  },
  {
    id: 14,
    title: '글쓰기 워크숍에 참여할 분 찾습니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2025.01.05 ~ 2025.02.28',
    content: '자기소개서',
  },
  {
    id: 15,
    title: '소설 창작 스터디원 모집합니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 16,
    title: '문학 비평 스터디 함께 하실 분 구합니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '2024.12.01 ~ 2024.12.30',
    content: '자기소개서',
  },
  {
    id: 17,
    title: '출판사와 협업할 기회를 찾습니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '프로젝트',
    time: '2025.02.01 ~ 2025.04.01',
    content: '자기소개서',
  },
  {
    id: 18,
    title: '시 창작 스터디를 운영하고 있습니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '스터디',
    time: '상시 가능',
    content: '자기소개서',
  },
  {
    id: 19,
    title: '문예 창작 팀원 구합니다.',
    selectedComponent: 'LI',
    selecttype: 'Port',
    type: '팀 프로젝트',
    time: '2024.12.01 ~ 2025.01.15',
    content: '자기소개서',
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
