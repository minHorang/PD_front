import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mypage.css';

function Mypage() {
  const [selected, setSelected] = useState(null);
  const [subSelected, setSubSelected] = useState(null);
  const [finalSelected, setFinalSelected] = useState(null);

  const [showModal, setShowModal] = useState(false); // 모달 표시 상태
  const [postToDelete, setPostToDelete] = useState(null); // 삭제할 게시물의 인덱스

  const [myPosts, setMyPosts] = useState([
    '스터디 인원 모집합니다',
    '프론트엔드 개발자 입니다',
    '대회 인원 모집합니다',
    'UX/UI 디자이너입니다',
  ]);

  const navigate = useNavigate();
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
  const topCategories = ['게시판', 'Project Design', '공모전'];
  const subCategories = {
    게시판: ['개발', '영상/미디어', '문학', '음악'],
    'Project Design': ['개발', '영상/미디어', '문학', '음악'],
    공모전: [
      '개발 X 영상/미디어',
      '개발 X 문학',
      '개발 X 음악',
      '영상/미디어 X 문학',
      '영상/미디어 X 음악',
      '문학 X 음악',
    ],
  };
  const finalCategories = {
    개발: ['공고모집', '포트폴리오'],
    '영상/미디어': ['공고모집', '포트폴리오'],
    문학: ['공고모집', '포트폴리오'],
    음악: ['공고모집', '포트폴리오'],

    'Project Design - 개발': ['개발', '영상/미디어', '문학', '음악'],
    'Project Design - 영상/미디어': ['개발', '영상/미디어', '문학', '음악'],
    'Project Design - 문학': ['개발', '영상/미디어', '문학', '음악'],
    'Project Design - 음악': ['개발', '영상/미디어', '문학', '음악'],

    '개발 X 영상/미디어': ['개발', '영상/미디어'],
    '개발 X 문학': ['개발', '문학'],
    '개발 X 음악': ['개발', '음악'],
    '영상/미디어 X 문학': ['영상/미디어', '문학'],
    '영상/미디어 X 음악': ['영상/미디어', '음악'],
    '문학 X 음악': ['문학', '음악'],
  };

  const getFinalCategories = (top, sub) => {
    if (top === '게시판' || top === '공모전') {
      return finalCategories[sub] || [];
    }
    if (top === 'Project Design') {
      return finalCategories[`${top} - ${sub}`] || [];
    }
    return [];
  };
  const categoryToRoute = {
    게시판: 'b',
    'Project Design': 'p',
    공모전: 'c',
    개발: 'i',
    '영상/미디어': 'md',
    문학: 'l',
    음악: 'ms',
    '개발 X 영상/미디어': 'imd',
    '개발 X 문학': 'il',
    '개발 X 음악': 'ims',
    '영상/미디어 X 문학': 'mdl',
    '영상/미디어 X 음악': 'mdms',
    '문학 X 음악': 'lms',
    공고모집: 'r',
    포트폴리오: 'po',
  };
  /*
  const generateRoutes = () => {
    const routes = [];

    topCategories.forEach(topCategory => {
      const topRoute = categoryToRoute[topCategory];

      subCategories[topCategory].forEach(subCategory => {
        const subRoute = categoryToRoute[subCategory];
        const finalKey =
          topCategory === 'Project Design' ? `${topCategory} - ${subCategory}` : subCategory;

        finalCategories[finalKey]?.forEach(finalCategory => {
          const finalRoute = categoryToRoute[finalCategory];
          routes.push(`/${topRoute}/${subRoute}/${finalRoute}`);
        });
      });
    });

    return routes;
  };
*/
  const handleTopClick = category => {
    setSelected(category);
    setSubSelected(null);
    setFinalSelected(null);
  };

  const handleSubClick = subCategory => {
    setSubSelected(subCategory);
    setFinalSelected(null);
  };

  const handleFinalClick = finalCategory => {
    setFinalSelected(finalCategory);

    // `categoryToRoute`를 사용해 경로 생성
    const topRoute = categoryToRoute[selected];
    const subRoute = categoryToRoute[subSelected];
    const finalRoute = categoryToRoute[finalCategory];

    // 최종 경로로 이동
    navigate(`/${topRoute}/${subRoute}/${finalRoute}`);
  };
  const user = {
    nickname: '홍길동',
    appliedPosts: [
      '백엔드 개발자 입니다',
      '대회 멤버 모집합니다',
      '2024 개발 X 음악 공모전',
      '2023 개발 X 문학 공모전',
    ],
  };

  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <p className="mypage-nickname">닉네임</p>
        <p className="mypage-username">{user.nickname}</p>
      </div>

      <div className="mypage-content">
        <div className="mypage-section">
          <h3 className="section-title">내가 쓴 글</h3>
          <ul className="content-list">
            {myPosts.map((post, index) => (
              <li key={index}>
                {post || <span>&nbsp;</span>}
                <button className="delete-button" onClick={() => handleDeleteClick(index)}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
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
        <div className="mypage-section">
          <h3 className="section-title">지원/제의한 글</h3>
          <ul className="content-list">
            {user.appliedPosts.map((post, index) => (
              <li key={index}>{post || <span>&nbsp;</span>}</li>
            ))}
          </ul>
        </div>
      </div>

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
                <button
                  className={`write-link ${subSelected === subCategory ? 'active' : ''}`}
                  onClick={() => handleSubClick(subCategory)}
                >
                  {subCategory}
                </button>
              </li>
            ))}
          </ul>
        )}

        {subSelected && (
          <ul className="write-final-categories">
            {getFinalCategories(selected, subSelected).map(finalCategory => (
              <li key={finalCategory}>
                <button
                  className={`write-link ${finalSelected === finalCategory ? 'active' : ''}`}
                  onClick={() => handleFinalClick(finalCategory)}
                >
                  {finalCategory}
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
