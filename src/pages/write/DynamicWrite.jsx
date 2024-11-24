import React from 'react';
import { useParams } from 'react-router-dom';
import Writeport from './Writeport';
import Writerecr from './Writerecr';
import Writepd from './Writepd';
import NotFoundError from '../error/NotFound';

function DynamicWrite() {
  const { top, sub } = useParams(); // URL 파라미터 추출

  // 매핑된 경로를 기준으로 분기 처리
  if (top === 'p') {
    if (sub === 'i') return <Writeport category="개발" />;
    if (sub === 'md') return <Writeport category="영상/미디어" />;
    if (sub === 'l') return <Writeport category="문학" />;
    if (sub === 'ms') return <Writeport category="음악" />;
  }

  if (top === 't') {
    if (sub === 'i') return <Writerecr category="개발" />;
    if (sub === 'md') return <Writerecr category="영상/미디어" />;
    if (sub === 'l') return <Writerecr category="문학" />;
    if (sub === 'ms') return <Writerecr category="음악" />;
  }

  if (top === 'pd') {
    if (sub === 'i') return <Writepd category="개발" />;
    if (sub === 'md') return <Writepd category="영상/미디어" />;
    if (sub === 'l') return <Writepd category="문학" />;
    if (sub === 'ms') return <Writepd category="음악" />;
  }

  // 404 페이지 처리
  return <NotFoundError />;
}

export default DynamicWrite;
