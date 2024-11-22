import React from 'react';
import { useParams } from 'react-router-dom';

function Writepd() {
  const { top, sub, final } = useParams();

  return (
    <div>
      <h1>Project Design 작성 페이지</h1>
      <p>선택된 카테고리:</p>
      <ul>
        <li>Top: {top}</li>
        <li>Sub: {sub}</li>
        <li>Final: {final}</li>
      </ul>
    </div>
  );
}

export default Writepd;
