import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import POLICY_AGREE from '../../constants/policyagree';
export default function Argreement({ moveStep }) {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className='flex w-[338px] h-[585px] rounded-[20px] justify-center items-center bg-white shadow-loginShadow'>
      <div className='flex flex-col w-[319px] h-[523px] justify-between items-center'>
        <p className='font-semibold text-[16px]'>개인정보 처리동의</p>
        <div className='flex flex-col w-[302px] h-[420px] justify-between items-start'>
          <div className='flex h-[16px] items-center gap-[9px]'>
            <button onClick={() => setIsCheck((prev) => !prev)}>
              <img src={`/assets/${isCheck ? `check` : `uncheck`}.svg`} alt='checking' />
            </button>
            <div className='flex h-[16px] justify-between items-center gap-[3px]'>
              <span className='font-medium text-[12px] text-[#FF5858]'>[필수]</span>
              <span className='text-[13px]'>개인정보 수집 및 이용</span>
            </div>
          </div>
          <div className='w-[302px] h-[398px] border border-[0.5px] border-[#AFAFAF]/0.8 rounded-[10px] p-[22px] overflow-auto text-[12px] text-darkGray whitespace-pre-wrap'>
            {POLICY_AGREE}
          </div>
        </div>
        <CustomButton
          onClick={isCheck && moveStep}
          color='purple'
          disabled={isCheck === true ? false : true}
          width='w-[176px]'
          text='동의하고 시작하기'
        />
      </div>
    </div>
  );
}
