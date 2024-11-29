import React, { useEffect, useState } from 'react';
import './Port.css';
import { useNavigate } from 'react-router-dom';

const Port = ({ selectedComponent }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedComponent) {
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/portfolio/list?category=${selectedComponent}`);
        const result = await response.json();

        if (result.isSuccess) {
          setData(result.result.portfolio || []); // API 응답 데이터 설정
        } else {
          setError('API 호출 실패'); // 에러 메시지 설정
          console.error('API 호출 실패:', result.message);
        }
      } catch (error) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.'); // 에러 메시지 설정
        console.error('API 에러:', error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData();
  }, [selectedComponent]);

  const handledetail = item => {
    navigate(`/portfolio/${item.id}`, { state: { ...item } });
  };

  if (loading) {
    return <div className="loading">데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-topbar">
        <div className="portfolio-title">
          <p>제목</p>
        </div>
        <div className="portfolio-type">
          <p>분류</p>
        </div>
        <div className="portfolio-time">
          <p>모집 기간</p>
        </div>
      </div>
      {data.map((item, index) => (
        <div className="portfolio-array" key={index}>
          <div className="portfolio-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="portfolio-type-content">
            <p>{item.part}</p>
          </div>
          <div className="portfolio-time-content">
            <p>{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Port;
