import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Writerecr.css';

function Writerecr() {
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
  const [process, setProcess] = useState('');
  const [wanted, setWanted] = useState('');
  const [part, setPart] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000'; // API 베이스 URL

  const handleSubmit = async e => {
    e.preventDefault();

    // 입력값 검증
    if (
      !title.trim() ||
      !process.trim() ||
      !wanted.trim() ||
      !part.trim() ||
      !duration.trim() ||
      !description.trim()
    ) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    try {
      setLoading(true); // 로딩 상태 시작
      const response = await fetch(`${baseURL}/project`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          process,
          wanted,
          part,
          duration,
          description,
          user_id: 1,
          category,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('모집공고가 성공적으로 등록되었습니다.');
        navigate('/mypage'); // 성공 시 마이페이지로 이동
      } else {
        setError('모집공고 등록에 실패했습니다.');
      }
    } catch (error) {
      setError('API 호출 중 에러가 발생했습니다.');
      console.error('API 에러:', error);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  return (
    <div>
      <div className="W-recr-container">
        <div className="W-recr-toptitle">
          <p>모집공고를 작성해주세요</p>
        </div>
        {loading && <p className="loading">등록 중입니다...</p>}
        {error && <p className="error-message">{error}</p>}
        <div>
          <form className="W-recr-form" onSubmit={handleSubmit}>
            <div className="layout-LR">
              <div className="left">
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="title">글 제목</label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="process">모집 진행</label>
                    <textarea
                      type="text"
                      id="process"
                      value={process}
                      onChange={e => setProcess(e.target.value)}
                      placeholder=""
                      maxLength={255}
                      required
                    />
                    <p style={{ float: 'right', fontSize: '0.8em', color: 'gray' }}>
                      {process.length}/255
                    </p>
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="wanted">모집 대상</label>
                    <input
                      type="text"
                      id="wanted"
                      value={wanted}
                      onChange={e => setWanted(e.target.value)}
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="part">분류</label>
                    <input
                      type="text"
                      id="part"
                      value={part}
                      onChange={e => setPart(e.target.value)}
                      placeholder="ex. 스타트업, 대회 준비"
                      required
                    />
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="duration">모집기간</label>
                    <input
                      type="text"
                      id="duration"
                      value={duration}
                      onChange={e => setDuration(e.target.value)}
                      placeholder="ex. 2024.11.20~2024.12.18"
                      required
                    />
                  </div>
                </div>
                <div className="W-recr-row">
                  <div className="W-recr-field">
                    <label htmlFor="description">모집 정보</label>
                    <textarea
                      id="description"
                      rows="5"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="모집 정보를 입력하세요"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="W-recr-submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Writerecr;
