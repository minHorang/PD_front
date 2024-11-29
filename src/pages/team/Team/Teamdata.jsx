import React, { useEffect, useState } from 'react';
import './Teamdata.css';
import { useNavigate } from 'react-router-dom';

function Teamdata({ selectedComponent }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';
  useEffect(() => {
    if (!selectedComponent) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/project/list?category=${selectedComponent}`);
        const result = await response.json();

        if (result.isSuccess) {
          setData(result.result.project || []);
        } else {
          setError('데이터를 불러오는 데 실패했습니다.');
          console.error('API 호출 실패:', result.message);
        }
      } catch (error) {
        setError('API 호출 중 오류가 발생했습니다.');
        console.error('API 에러:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedComponent]);

  const handledetail = item => {
    navigate(`/team/${item.id}`, { state: { ...item } }); // 상세 페이지로 이동
  };

  if (loading) {
    return <div className="loading">데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!data.length) {
    return <div className="no-data">데이터가 없습니다.</div>;
  }

  return (
    <div className="team-container">
      <div className="team-topbar">
        <div className="team-title">
          <p>제목</p>
        </div>
        <div className="team-type">
          <p>분류</p>
        </div>
        <div className="team-time">
          <p>모집 기간</p>
        </div>
      </div>
      {data.map((item, index) => (
        <div className="team-array" key={index}>
          <div className="team-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="team-type-content">
            <p>{item.part}</p>
          </div>
          <div className="team-time-content">
            <p>{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teamdata;
