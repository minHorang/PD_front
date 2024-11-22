import React, { useState } from 'react';
import './GTcontent.css';
import GTdata from './GTdata';

const data = [
  {
    selectedComponent: 'ITXMD',
    type: '개발 X 영상/미디어',
    t1: '개발',
    t2: '영상/미디어',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'ITXLI',
    type: '개발 X 문학',
    t1: '개발',
    t2: '문학',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'ITXMS',
    type: '개발 X 음악',
    t1: '개발',
    t2: '음악',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'MDXLI',
    type: '영상/미디어 X 문학',
    t1: '영상/미디어',
    t2: '문학',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'MDXMS',
    type: '영상/미디어 X 음악',
    t1: '영상/미디어',
    t2: '음악',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'LIXMS',
    type: '문학 X 음악',
    t1: '문학',
    t2: '음악',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    evaluation: '참여 인원 제외 PD 회원',
  },
];

function GTcontent({ selectedComponent }) {
  const [activeComponent, setActiveComponent] = useState(null);
  const filteredData = data.filter(item => item.selectedComponent === selectedComponent);

  const handleButtonClick = component => {
    setActiveComponent(component);
  };

  const mapToCode = type => {
    switch (type) {
      case '문학':
        return 'LI';
      case '개발':
        return 'IT';
      case '영상/미디어':
        return 'MD';
      case '음악':
        return 'MS';
      default:
        return null;
    }
  };

  return (
    <div className="GT-container">
      <div className="GT-button">
        {filteredData.map((item, index) => (
          <div key={index}>
            <button
              className={activeComponent === item.t1 ? 'active' : ''}
              onClick={() => handleButtonClick(item.t1)}
            >
              {item.t1}
            </button>
            <button
              className={activeComponent === item.t2 ? 'active' : ''}
              onClick={() => handleButtonClick(item.t2)}
            >
              {item.t2}
            </button>
          </div>
        ))}
      </div>
      <div className="GT-content">
        <GTdata selectedComponent={selectedComponent} selecttype={mapToCode(activeComponent)} />
      </div>
    </div>
  );
}

export default GTcontent;
