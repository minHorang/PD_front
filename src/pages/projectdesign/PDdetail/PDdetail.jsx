import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './PDdetail.css';

function PDdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(location.state || null);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null);

  const baseURL = 'http://localhost:4000'; // API 베이스 URL

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError('ID가 제공되지 않았습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/collab/detail?id=${id}`);
        const result = await response.json();

        if (result.isSuccess) {
          setItem(result.result.collab[0] || null);
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

  const handleapply = () => {
    if (!item || !id) {
      console.error('item 또는 id가 없습니다.');
      return;
    }
    navigate(`/projectdesign/apply/${id}`, { state: { ...item } });
  };

  if (loading) {
    return <p>데이터를 불러오는 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>협업 프로젝트 데이터가 없습니다.</p>;
  }
  if (!id) {
    return <p>ID가 제공되지 않았습니다.</p>;
  }

  return (
    <div>
      <div className="pd-detail-container">
        <div className="pdtoptitle">
          <p>{item.title}</p>
        </div>
        <p className="pdprocessfontsize">모집 진행</p>
        <div className="pdprocess">
          <p>{item.duration}</p>
        </div>
        <p className="pdparticipationfontsize">모집 대상</p>
        <div className="pdparticipation">
          <p>{item.wanted}</p>
        </div>
        <p className="pdevaluationfontsize">모집 정보</p>
        <div className="pdevaluation">
          <p>{item.description}</p>
        </div>

        <div className="pdbutton">
          <button onClick={handleapply}>협업 지원하기</button>
        </div>
      </div>
    </div>
  );
}

export default PDdetail;
