import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Recrapply.css';

function Recrapply() {
  const navigate = useNavigate();
  const location = useLocation();
  const { project_id, user_id } = location.state || {};
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  const handleSubmit = async event => {
    event.preventDefault();

    if (!project_id || !user_id) {
      alert('유효하지 않은 요청입니다.');
      return;
    }

    if (!message.trim()) {
      alert('자기소개서를 작성해주세요.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/project/suggest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_id: 1,
          user_id: 1,
          message,
        }),
      });
      const result = await response.json();

      if (result.isSuccess) {
        alert('지원이 성공적으로 완료되었습니다.');
        navigate('/mypage');
      } else {
        setError('지원 등록에 실패했습니다.');
      }
    } catch (error) {
      setError('API 호출 중 에러가 발생했습니다.');
      console.error('API 에러:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="apply-recr-container">
        <div className="apply-recr-toptitle">
          <p>지원서를 작성해주세요</p>
        </div>
        {loading && <p className="loading">등록 중입니다...</p>} {/* 로딩 메시지 */}
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지 */}
        <form className="apply-recr-form" onSubmit={handleSubmit}>
          <div className="apply-recr-field">
            <label htmlFor="message">자기소개서</label>
            <textarea
              type="text"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="자기소개서를 입력해주세요"
              required
            />
          </div>
          <button type="submit" className="apply-recr-submit" disabled={loading}>
            {loading ? '등록 중...' : '등록하기'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recrapply;
