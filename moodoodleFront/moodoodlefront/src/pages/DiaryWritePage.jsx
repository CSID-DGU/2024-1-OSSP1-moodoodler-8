import React from 'react';
import DiaryWriting from '../components/DiaryWriting';
import { useOutletContext } from 'react-router-dom';

export default function DiaryWritePage() {
  const context = useOutletContext();
  return (
    <div className='flex flex-col items-center'>
      <DiaryWriting selectedDate={context.selectedDate} />
    </div>
  );
}
