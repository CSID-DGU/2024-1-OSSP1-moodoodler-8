import React from 'react';
// 혹시 몰라 생성해둔 커스텀 alert 모달 창, 안쓰면 삭제
const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <p className='mb-4'>{message}</p>
        <div className='flex justify-end'>
          <button className='bg-red-500 text-white px-4 py-2 rounded mr-2' onClick={onConfirm}>
            예
          </button>
          <button className='bg-gray-300 px-4 py-2 rounded' onClick={onCancel}>
            아니요
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
