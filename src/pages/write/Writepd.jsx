import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Writepd.css';

function Writepd() {
  const navigate = useNavigate();
  const { sub } = useParams();

  const getCategoryFromSub = sub => {
    switch (sub) {
      case 'i':
        return [{ first: '', second: '' }];
      case 'md':
        return [{ first: '', second: '' }];
      case 'l':
        return [{ first: '', second: '' }];
      case 'ms':
        return [{ first: '', second: '' }];
      default:
        return [{ first: '', second: '' }];
    }
  };

  const [category, setCategory] = useState(getCategoryFromSub(sub));
  const [title, setTitle] = useState('');
  const [process, setProcess] = useState('');
  const [wanted, setWanted] = useState('');
  const [part, setPart] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  const handleAddCategory = () => {
    setCategory([...category, { first: '', second: '' }]);
  };

  const handleCategoryChange = (index, key, value) => {
    if (!Array.isArray(category)) return;
    const updatedCategories = [...category];
    updatedCategories[index][key] = value;
    setCategory(updatedCategories);
  };

  const handleSubmit = async e => {
    e.preventDefault();

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

    const isValidCategory = category.every(cat => {
      if (category.length === 1) {
        return cat.first;
      }
      return cat.first && cat.second;
    });

    if (!isValidCategory) {
      alert('모든 카테고리를 올바르게 선택해주세요.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${baseURL}/collab`, {
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
        setTitle('');
        setProcess('');
        setWanted('');
        setPart('');
        setDuration('');
        setDescription('');
        setCategory(getCategoryFromSub(sub));
        navigate('/mypage');
      } else {
        setError(result.message || '모집공고 등록에 실패했습니다.');
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
      <div className="W-pd-container">
        <div className="W-pd-toptitle">
          <p>협업공고를 작성해주세요</p>
        </div>
        {loading && <p className="loading">등록 중입니다...</p>}
        {error && <p className="error-message">{error}</p>}
        <div>
          <form className="W-pd-form" onSubmit={handleSubmit}>
            <div className="layout-LR">
              <div className="left">
                <div className="W-pd-row">
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
                {category.map((cat, index) => (
                  <div className="W-pd-row" key={index}>
                    <div className="W-pd-field">
                      <label>모집 대상 분류 {index + 1}</label>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <select
                          value={cat.first || ''}
                          onChange={e => handleCategoryChange(index, 'first', e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            분류 선택
                          </option>
                          <option value="1">개발</option>
                          <option value="2">영상/미디어</option>
                          <option value="3">문학</option>
                          <option value="4">음악</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                <button type="button" className="addbutton" onClick={handleAddCategory}>
                  모집 대상 분류 추가
                </button>
              </div>
              <div className="right">
                <div className="W-pd-row">
                  <div className="W-pd-field">
                    <label htmlFor="wanted">모집 대상</label>
                    <input
                      type="text"
                      id="wanted"
                      value={wanted}
                      onChange={e => setWanted(e.target.value)}
                      placeholder="ex. IOS 개발 팀"
                      required
                    />
                  </div>
                </div>
                <div className="W-pd-row">
                  <div className="W-pd-field">
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
                <div className="W-pd-row">
                  <div className="W-pd-field">
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
                <div className="W-pd-row">
                  <div className="W-pd-field">
                    <label htmlFor="description">진행할 프로젝트 정보</label>
                    <textarea
                      id="description"
                      rows="5"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="W-pd-submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Writepd;
