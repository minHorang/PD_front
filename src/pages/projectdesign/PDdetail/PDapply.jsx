import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './PDapply.css';

function PDapply() {
  const navigate = useNavigate();
  const location = useLocation();
  const { project_id, user_id } = location.state || {};
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';
  const { id } = useParams();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/collab/suggest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_id: id,
          user_id: 1,
          message,
        }),
      });
      console.log();
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
      <div className="apply-PD-container">
        <div className="apply-PD-toptitle">
          <p>지원서를 작성해주세요</p>
        </div>
        {loading && <p className="loading">등록 중입니다...</p>}
        {error && <p className="error-message">{error}</p>}
        <form className="apply-PD-form" onSubmit={handleSubmit}>
          <div className="apply-PD-field">
            <label htmlFor="message">팀 소개서</label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder=""
              required
            />
          </div>
          <button type="submit" className="apply-PD-submit">
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default PDapply;
