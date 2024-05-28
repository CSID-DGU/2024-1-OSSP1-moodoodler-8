import React from 'react';

const Dropdown = ({ setIsDelete }) => {
  const handleDeleteClick = () => {
    setIsDelete(true);
  };
  const handleReturnClick = () => {
    setIsDelete(false);
  };

  return (
    <div className='absolute top-10 right-0 w-[100px] bg-white border rounded shadow-lg'>
      <ul>
        <li>
          <button className='w-full text-left px-4 py-2 hover:bg-gray-200' onClick={handleDeleteClick}>
            친구 삭제
          </button>
        </li>
        <li>
          <button className='w-full text-left px-4 py-2 hover:bg-gray-200' onClick={handleReturnClick}>
            달력 보기
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
