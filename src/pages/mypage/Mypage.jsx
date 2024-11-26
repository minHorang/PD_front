import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mypage.css';

function Mypage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const topCategories = ['Portfolio', 'Team', 'Project Design'];
  const subCategories = {
    Portfolio: ['개발', '영상/미디어', '문학', '음악'],
    Team: ['개발', '영상/미디어', '문학', '음악'],
    'Project Design': ['개발', '영상/미디어', '문학', '음악'],
  };

  const [myPosts, setMyPosts] = useState([
    '스터디 인원 모집합니다',
    '프론트엔드 개발자 입니다',
    '대회 인원 모집합니다',
    'UX/UI 디자이너입니다',
  ]);
  const categoryToRoute = {
    Portfolio: 'p',
    Team: 't',
    'Project Design': 'pd',
    개발: 'i',
    '영상/미디어': 'md',
    문학: 'l',
    음악: 'ms',
  };

  const handleTopClick = category => {
    setSelected(category);
  };

  const handleSubClick = subCategory => {
    if (selected && subCategory) {
      const topRoute = categoryToRoute[selected];
      const subRoute = categoryToRoute[subCategory];
      navigate(`/${topRoute}/${subRoute}`);
    }
  };

  const team = {
    nickname: '홍길동',
    teamname: [
      {
        id: 1,
        title: '밴드 음악 커버',
        members: [
          { name: 'vocal', role: '보컬', email: 'vocal@gmail.com' },
          { name: 'junY', role: '기타', email: 'junY@naver.com' },
          { name: 'parkseo', role: '베이스', email: 'parkseo@gmail.com' },
          { name: 'Cho99', role: '드럼', email: 'Cho99@gmail.com' },
          { name: 'min1204', role: '키보드', email: 'min1204@naver.com' },
        ],
        schedule: [
          { task: '공연 곡, 날짜 회의', date: '6/25' },
          { task: '세션 담당 지정', date: '6/29' },
          { task: '합주', date: '6/30~8/25' },
          { task: '리허설', date: '8/10, 8/17, 8/24' },
          { task: '공연', date: '8/26' },
        ],
      },
      {
        id: 2,
        title: '2024 대회 4팀',
        members: [
          { name: 'vocal', role: '보컬', email: 'vocal@gmail.com' },
          { name: 'junY', role: '기타', email: 'junY@naver.com' },
          { name: 'parkseo', role: '베이스', email: 'parkseo@gmail.com' },
          { name: 'Cho99', role: '드럼', email: 'Cho99@gmail.com' },
          { name: 'min1204', role: '키보드', email: 'min1204@naver.com' },
        ],
        schedule: [
          { task: '공연 곡, 날짜 회의', date: '6/25' },
          { task: '세션 담당 지정', date: '6/29' },
          { task: '합주', date: '6/30~8/25' },
          { task: '리허설', date: '8/10, 8/17, 8/24' },
          { task: '공연', date: '8/26' },
        ],
      },
    ],
  };
  const handleTeamClick = team => {
    navigate(`/mypage/team/${team.id}`, { state: team });
  };
  const user = {
    nickname: '홍길동',
    appliedPosts: [
      '백엔드 개발자 입니다',
      '대회 멤버 모집합니다',
      '백엔드 개발자 모집',
      '프론트엔드 스터디 모집',
    ],
  };
  const handleDeleteClick = index => {
    setPostToDelete(index); // 삭제할 게시물 설정
    setShowModal(true); // 모달 표시
  };

  const confirmDelete = () => {
    setMyPosts(prevPosts => prevPosts.filter((_, i) => i !== postToDelete));
    setShowModal(false); // 모달 닫기
    setPostToDelete(null); // 초기화
  };

  const cancelDelete = () => {
    setShowModal(false); // 모달 닫기
    setPostToDelete(null); // 초기화
  };

  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <p className="mypage-nickname">닉네임</p>
        <p className="mypage-username">{user.nickname}</p>
      </div>
      <div className="mypage-content">
        <div className="mypage-top">
          <div className="mypage-section">
            <h3 className="section-title">내가 속한 팀</h3>
            <ul className="content-list">
              {team.teamname && team.teamname.length > 0 ? (
                team.teamname.map((post, index) => (
                  <li key={index}>
                    <button className="team-link" onClick={() => handleTeamClick(post)}>
                      {post.title || <span>&nbsp;</span>}
                    </button>
                  </li>
                ))
              ) : (
                <p>속한 팀이 없습니다.</p>
              )}
            </ul>
          </div>
        </div>
        <div className="mypage-bottom">
          <div className="mypage-section">
            <h3 className="section-title">내가 쓴 글</h3>
            <ul className="content-list">
              {myPosts.map((post, index) => (
                <li key={index}>
                  <span>{post || <span>&nbsp;</span>}</span>
                  <button className="delete-button" onClick={() => handleDeleteClick(index)}>
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mypage-section">
            <h3 className="section-title">지원/제의한 글</h3>
            <ul className="content-list">
              {user.appliedPosts.map((post, index) => (
                <li key={index}>{post || <span>&nbsp;</span>}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>삭제하시겠습니까?</p>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={confirmDelete}>
                확인
              </button>
              <button className="cancel-button" onClick={cancelDelete}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mypage-write">
        <p>글쓰러가기</p>
        <ul className="write-links">
          {topCategories.map(category => (
            <li key={category}>
              <button
                className={`write-link ${selected === category ? 'active' : ''}`}
                onClick={() => handleTopClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {selected && (
          <ul className="write-categories">
            {subCategories[selected].map(subCategory => (
              <li key={subCategory}>
                <button className="write-link" onClick={() => handleSubClick(subCategory)}>
                  {subCategory}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Mypage;
