import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Recrdetail.css';

function Recrdetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(location.state || null);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000';

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError('ID가 제공되지 않았습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/project/detail?id=${id}`);
        const result = await response.json();

        if (result.isSuccess) {
          setItem(result.result.project[0] || null);
        } else {
          setError('데이터를 불러오는 데 실패했습니다.');
        }
      } catch (error) {
        setError('API 호출 중 에러가 발생했습니다.');
        console.error('API 에러:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handlerecrapply = () => {
    if (!item || !item.id) {
      console.error('item 또는 item.id가 없습니다.');
      return;
    }
    navigate(`/team/${item.id}/apply`, { state: { ...item } });
  };

  if (loading) {
    return <p>데이터를 불러오는 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>프로젝트 데이터가 없습니다.</p>;
  }

  if (!id) {
    return <p>ID가 제공되지 않았습니다.</p>;
  }

  return (
    <div>
      <div className="recrdetail-container">
        <div className="recrtoptitle">
          <p>{item.title}</p>
        </div>
        <p className="recrprocessfontsize">모집 진행</p>
        <div className="recrprocess">
          <p>{item.process || '진행 정보가 없습니다.'}</p>
        </div>
        <p className="recrparticipationfontsize">모집 대상</p>
        <div className="recrparticipation">
          <p>{item.wanted || '대상 정보가 없습니다.'}</p>
        </div>
        <p className="recrevaluationfontsize">모집 정보</p>
        <div className="recrevaluation">
          <p>{item.description || '설명이 제공되지 않았습니다.'}</p>
        </div>

        <div className="recrbutton">
          <button onClick={handlerecrapply}>프로젝트 지원하기</button>
        </div>
      </div>
    </div>
  );
}

export default Recrdetail;
