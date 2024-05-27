import React, { useState } from 'react';
import CustomButton from './CustomButton';
import useDiaryWrite from '../hooks/useDiaryWrite';

export default function DiaryModifiedComponent({ content, diary_id, handleModified }) {
  const { handleModifiedDiary } = useDiaryWrite();
  const [modifiedContent, setModifiedContent] = useState(content);

  const handleSetValue = (e) => {
    setModifiedContent(e.target.value);
  };

  return (
    <>
      <textarea
        className="w-[298px] h-[145px] p-[10px] text-[13px] font-normal rounded-[20px] border-[0.8px] border-outlineGray outline-none resize-none"
        maxLength="300"
        onChange={(e) => handleSetValue(e)}
        defaultValue={content}
      />
      <CustomButton
        text="수정하기"
        color="orange"
        onClick={() => handleModifiedDiary({ diary_id, modifiedContent, setModifiedContent, handleModified })}
      />
    </>
  );
}
