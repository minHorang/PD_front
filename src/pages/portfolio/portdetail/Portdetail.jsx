import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './Portdetail.css';

function Portdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(location.state || null);
  const [loading, setLoading] = useState(!item);
  const [error, setError] = useState(null);
  const baseURL = 'http://localhost:4000';

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError('portfolio_id가 제공되지 않았습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log(id);
        const response = await fetch(`${baseURL}/portfolio/detail?portfolio_id=${id}`);
        const result = await response.json();

        console.log(result.result.portfolio[0]);

        if (result.isSuccess) {
          setItem(result.result.portfolio[0]);
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
  }, []);

  const handleportapply = item => {
    if (!item || !id) {
      console.error('item 또는 portfolio_id가 없습니다.');
      return;
    }
    navigate(`/portfolio/${id}/apply`, { state: { ...item } });
  };

  if (loading) {
    return <p>데이터를 불러오는 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>포트폴리오 데이터가 없습니다.</p>;
  }

  return (
    <div>
      <div className="portdetail-container">
        <div className="Pddetailtoptitle">
          <p>{item.title}</p>
        </div>
        <div className="portfolio-content">
          <p>{item.description || '내용이 제공되지 않았습니다.'}</p>
        </div>
        <div className="portbutton">
          <button onClick={() => handleportapply(item)}>프로젝트 제의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Portdetail;
