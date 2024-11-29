import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Portapply.css';

function Portapply() {
  const navigate = useNavigate();
  const location = useLocation();
  const { portfolio_id, project_id } = location.state || {};
  const [myPosts, setMyPosts] = useState([]);
  const [teamIntro, setTeamIntro] = useState('');
  const [suggestMessage, setSuggestMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await fetch(`${baseURL}/portfolio/suggest`);
        const result = await response.json();

        if (result.isSuccess) {
          setMyPosts(result.posts || []);
        } else {
          console.error('팀 소개서 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('팀 소개서 API 호출 중 에러:', error);
      }
    };

    fetchMyPosts();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!portfolio_id || !project_id) {
      alert('유효하지 않은 요청입니다.');
      return;
    }

    if (!teamIntro.trim() || !suggestMessage.trim()) {
      alert('팀 소개서와 제의 메시지를 작성해주세요.');
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
          portfolio_id,
          project_id,
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
              value={teamIntro}
              onChange={e => setTeamIntro(e.target.value)}
              required
            >
              <option value="" disabled>
                팀 소개를 선택해주세요
              </option>
              {myPosts.map((post, index) => (
                <option key={index} value={post}>
                  {post}
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
