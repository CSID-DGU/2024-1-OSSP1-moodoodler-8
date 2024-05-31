import React from 'react';

const Dropdown = ({ setIsDelete }) => {
  const handleDeleteClick = () => {
    setIsDelete(true);
  };
  return (
    <div className='absolute top-10 right-0 w-[100px] bg-white border rounded shadow-lg'>
      <ul>
        <li>
          <button className='w-full text-left px-4 py-2 hover:bg-gray-100' onClick={handleDeleteClick}>
            <p>친구 삭제</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
