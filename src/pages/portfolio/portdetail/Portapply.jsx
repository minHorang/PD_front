import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Portapply.css';

function Portapply() {
  const navigate = useNavigate();
  const location = useLocation();
  const { portfolio_id } = location.state || {}; // 프로젝트 ID는 location에서 가져옴
  const [myPosts, setMyPosts] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(''); // 선택한 팀 소개서 ID
  const [suggestMessage, setSuggestMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  // 팀 소개서 목록 가져오기
  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await fetch(`${baseURL}/portfolio/title`); // API 호출
        const result = await response.json();

        if (result.isSuccess) {
          setMyPosts(result.result.portfolio || []); // 팀 소개서 데이터 저장
        } else {
          console.error('팀 소개서 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('팀 소개서 API 호출 중 에러:', error);
      }
    };

    fetchMyPosts();
  }, []);

  // 제출 핸들러
  const handleSubmit = async event => {
    event.preventDefault();

    if (!selectedProjectId || !portfolio_id) {
      alert('유효하지 않은 요청입니다. 팀 소개서 또는 프로젝트를 선택해주세요.');
      return;
    }

    if (!suggestMessage.trim()) {
      alert('제의 메시지를 작성해주세요.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/portfolio/suggest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          portfolio_id: 2,
          project_id: selectedProjectId,
          suggest_message: suggestMessage,
        }),
      });

      const result = await response.json();

      if (result.isSuccess) {
        alert('제의서 등록 완료');
        navigate('/mypage'); // 성공 시 마이페이지로 이동
      } else {
        setError('제의서 등록에 실패했습니다.');
      }
    } catch (error) {
      setError('API 호출 중 에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="apply-port-container">
        <div className="apply-port-toptitle">
          <p>제의서를 작성해주세요</p>
        </div>
        {loading && <p className="loading">등록 중입니다...</p>} {/* 로딩 메시지 */}
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지 */}
        <form className="apply-port-form" onSubmit={handleSubmit}>
          {/* 팀 소개서 선택 */}
          <div className="apply-port-field">
            <label htmlFor="team-intro">팀 소개서</label>
            <select
              id="team-intro"
              value={selectedProjectId}
              onChange={e => setSelectedProjectId(e.target.value)} // 선택한 포트폴리오 ID 저장
              required
            >
              <option value="" disabled>
                팀 소개를 선택해주세요
              </option>
              {myPosts.map(post => (
                <option key={post.project_id} value={post.project_id}>
                  {post.title}
                </option>
              ))}
            </select>
          </div>

          {/* 제의 메시지 작성 */}
          <div className="apply-port-field">
            <label htmlFor="suggest-message">제의 메시지</label>
            <textarea
              id="suggest-message"
              value={suggestMessage}
              onChange={e => setSuggestMessage(e.target.value)}
              placeholder="제의 메시지를 입력해주세요"
              required
            ></textarea>
          </div>

          {/* 등록 버튼 */}
          <button type="submit" className="apply-port-submit" disabled={loading}>
            {loading ? '등록 중...' : '등록하기'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Portapply;
