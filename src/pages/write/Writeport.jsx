import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Writeport.css';

function Writeport() {
  const navigate = useNavigate();
  const { sub } = useParams();

  const getCategoryFromSub = sub => {
    switch (sub) {
      case 'i':
        return 1;
      case 'md':
        return 2;
      case 'l':
        return 3;
      case 'ms':
        return 4;
      default:
        return null;
    }
  };
  const category = getCategoryFromSub(sub);

  const [title, setTitle] = useState('');
  const [part, setPart] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000'; // API 베이스 URL

  const handleSubmit = async event => {
    event.preventDefault();

    if (!title.trim() || !part.trim() || !duration.trim() || !description.trim()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/portfolio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          part,
          duration,
          description,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('포트폴리오가 성공적으로 등록되었습니다.');
        navigate('/mypage'); // 성공 시 마이페이지로 이동
      } else {
        setError('포트폴리오 등록에 실패했습니다.');
      }
    } catch (error) {
      setError('API 호출 중 에러가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="W-port-container">
        <div className="W-port-toptitle">
          <p>포트폴리오를 작성해주세요</p>
        </div>
        {loading && <p className="loading">등록 중입니다...</p>} {/* 로딩 메시지 */}
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지 */}
        <form className="W-port-form" onSubmit={handleSubmit}>
          {/* 제목 */}
          <div className="W-port-field">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          {/* 분류 */}
          <div className="W-port-field">
            <label htmlFor="part">분류</label>
            <input
              type="text"
              id="part"
              value={part}
              onChange={e => setPart(e.target.value)}
              placeholder="ex. 무관, 스터디, 대회"
              required
            />
          </div>

          {/* 모집 기간 */}
          <div className="W-port-field">
            <label htmlFor="duration">모집기간</label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={e => setDuration(e.target.value)}
              placeholder="ex. 상시 가능, 2024.11.20~2024.12.18"
              required
            />
          </div>

          {/* 포트폴리오 내용 */}
          <div className="W-port-field">
            <label htmlFor="description">포트폴리오</label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="포트폴리오 내용을 입력하세요"
              required
            />
          </div>

          {/* 등록 버튼 */}
          <button type="submit" className="W-port-submit" disabled={loading}>
            {loading ? '등록 중...' : '등록하기'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Writeport;
