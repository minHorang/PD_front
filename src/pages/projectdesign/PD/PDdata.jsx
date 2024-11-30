import React, { useEffect, useState } from 'react';
import './PDdata.css';
import { useNavigate } from 'react-router-dom';

function PDdata({ selectedComponent }) {
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
        const response = await fetch(`${baseURL}/collab/list?category=${selectedComponent}`);
        const result = await response.json();

        if (result.isSuccess) {
          setData(result.result.collab || []);
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
    navigate(`/projectdesign/detail/${item.project_id}`, { state: { ...item } }); // 상세 페이지로 이동
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
    <div className="PD-container">
      <div className="PD-topbar">
        <div className="PD-title">
          <p>제목</p>
        </div>
        <div className="PD-type">
          <p>분류</p>
        </div>
        <div className="PD-time">
          <p>모집 기간</p>
        </div>
      </div>
      {data.map((item, index) => (
        <div className="PD-array" key={index}>
          <div className="PD-title-content">
            <p onClick={() => handledetail(item)}>{item.title}</p>
          </div>
          <div className="PD-type-content">
            <p>{item.part}</p>
          </div>
          <div className="PD-time-content">
            <p>{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PDdata;
