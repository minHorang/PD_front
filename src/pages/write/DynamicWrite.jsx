import React from 'react';
import { useParams } from 'react-router-dom';
import Writeport from './Writeport';
import Writerecr from './Writerecr';
import Writepd from './Writepd';
import Writecon from './Writecon';
import NotFoundError from '../error/NotFound';

function DynamicWrite() {
  const { top, sub, final } = useParams(); // useParams 훅 사용

  if (top === 'b') {
    if (final === 'r') return <Writerecr category={sub} />;
    if (final === 'po') return <Writeport category={sub} />;
  }

  if (top === 'p') {
    return <Writepd category={sub} />;
  }

  if (top === 'c') {
    return <Writecon category={sub} />;
  }

  return <NotFoundError />;
}

export default DynamicWrite;
