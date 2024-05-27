import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import useMoodCalendar from '../hooks/useMoodCalendar';
import MoodAnalysis from '../components/MoodAnalysis';
import DiaryShow from '../components/DiaryShow';

export default function AnalysisPage() {
  const { daysDiary } = useMoodCalendar();
  const selectedDate = useParams();

  return (
    <div className="flex flex-col justify-between items-center gap-[15px]">
      {daysDiary[dayjs(selectedDate).format('DD') - 1].diary_id}
      <MoodAnalysis diary_id={daysDiary[dayjs(selectedDate).format('DD') - 1].diary_id} />
      {daysDiary[dayjs(selectedDate).format('DD') - 1].content}
      <DiaryShow content={daysDiary[dayjs(selectedDate).format('DD') - 1].content} text="메인으로" color="skyblue" />
    </div>
  );
}
