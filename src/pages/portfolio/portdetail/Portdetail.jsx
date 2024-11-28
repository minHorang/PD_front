import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Portdetail.css';

function Portdetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 portfolio_id 가져오기
  const [item, setItem] = useState(null); // API 데이터를 저장
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const baseURL = 'http://localhost:4000'; // API 베이스 URL

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError('portfolio_id가 제공되지 않았습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/portfolio/detail?portfolio_id=${id}`);
        const result = await response.json();

        if (result.isSuccess) {
          setItem(result.result); // API 데이터 설정
        } else {
          setError('데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        setError('API 호출 중 에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // 프로젝트 제의 버튼 클릭 시 실행
  const handleportapply = item => {
    if (!item || !id) {
      console.error('item 또는 portfolio_id가 없습니다.');
      return;
    }
    navigate(`/portfolio/${id}/apply`, { state: { ...item } });
  };

  // 로딩 중
  if (loading) {
    return <p>데이터를 불러오는 중...</p>;
  }

  // 에러 발생 시
  if (error) {
    return <p>{error}</p>;
  }

  // 데이터가 없는 경우
  if (!item) {
    return <p>포트폴리오 데이터가 없습니다.</p>;
  }

  return (
    <div>
      <div className="portdetail-container">
        {/* 제목 */}
        <div className="Pddetailtoptitle">
          <p>{item.title}</p>
        </div>
        {/* 내용 */}
        <div className="portfolio-content">
          <p>분류: {item.category}</p>
          <p>기간: {item.duration}</p>
          <p>{item.content || '내용이 제공되지 않았습니다.'}</p>
        </div>
        {/* 버튼 */}
        <div className="portbutton">
          <button onClick={() => handleportapply(item)}>프로젝트 제의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Portdetail;
