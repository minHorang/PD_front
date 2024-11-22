import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { useParams, useLocation } from 'react-router-dom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Portdetail.css';

function Portdetail() {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  if (!id) {
    return <p>ID가 제공되지 않았습니다.</p>;
  }

  return (
    <div>
      <div className="portdetail-container">
        <div className="Pddetailtoptitle">
          <p>{item.title}</p>
        </div>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={item.content} />
        </Worker>
        <div className="portpdf">{item.content}</div>
        <div className="portbutton">
          <button>프로젝트 제의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Portdetail;
