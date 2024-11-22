import React from 'react';
import './CTcontent.css';
import contestbanner from '../../../img/contestbanner.png';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    selectedComponent: 'ITXMD',
    type: '개발 X 영상/미디어',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    contestBanner: contestbanner,
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'ITXLI',
    type: '개발 X 문학',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    contestBanner: contestbanner,
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'ITXMS',
    type: '개발 X 음악',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    contestBanner: contestbanner,
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'MDXLI',
    type: '영상/미디어 X 문학',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    contestBanner: contestbanner,
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'MDXMS',
    type: '영상/미디어 X 음악',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    contestBanner: contestbanner,
    evaluation: '참여 인원 제외 PD 회원',
  },
  {
    selectedComponent: 'LIXMS',
    type: '문학 X 음악',
    time: '2024.11.20 ~ 2024.12.18',
    process: [
      { step: '모집', date: '24.10.1 ~ 24.10.31' },
      { step: '진행', date: '24.11.1 ~ 24.12.31' },
      { step: '투표', date: '25.1.1 ~ 25.1.14' },
      { step: '수상', date: '25.1.15' },
    ],
    participation: '참여 인원의 모두가 PD 가입 아이디가 존재해야 합니다.',
    contestBanner: contestbanner,
    evaluation: '참여 인원 제외 PD 회원',
  },
];

function CTcontent({ selectedComponent }) {
  const navigate = useNavigate();
  if (!selectedComponent) {
    return null;
  }
  const filteredData = data.filter(item => item.selectedComponent === selectedComponent);
  if (filteredData.length === 0) {
    return <p>해당 공모전 정보가 없습니다.</p>;
  }
  const item = filteredData[0];
  const handlecontestapply = () => {
    navigate('/contest/apply');
  };
  const handlegetcontestteam = () => {
    navigate('/contest/getteam');
  };
  return (
    <div className="CTcontainer">
      <img src={item.contestBanner} alt="contestbanner" className="contestbanner" />
      <div className="CTtoptitle">
        <p>{item.type} 공모전 개최</p>
      </div>
      <p className="CTprocessfontsize">공모전 진행</p>
      <div className="CTprocess">
        {item.process.map((step, index) => (
          <React.Fragment key={index}>
            <div className="CTprocessstep">
              <div className="CTprocessstep-content">
                <p>{step.step}</p>
                <p>{step.date}</p>
              </div>
            </div>
            {index < item.process.length - 1 && <div className="CTarrow">→</div>}
          </React.Fragment>
        ))}
      </div>
      <p className="CTparticipationfontsize">참여 대상</p>
      <div className="CTparticipation">
        <p>{item.participation}</p>
      </div>
      <p className="CTevaluationfontsize">평가 대상</p>
      <div className="CTevaluation">
        <p>{item.evaluation}</p>
      </div>

      <div className="CTbutton">
        <button onClick={handlecontestapply}>공모전 지원하기</button>
        <button onClick={handlegetcontestteam}>팀원 모집하기</button>
      </div>
    </div>
  );
}

export default CTcontent;
