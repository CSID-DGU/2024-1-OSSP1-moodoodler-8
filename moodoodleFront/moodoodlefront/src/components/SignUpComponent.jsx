import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import LoginButton from '../components/LoginButton';
import useSignup from '../hooks/useSignup';
import YEARS from '../constants/years';
import MONTHS from '../constants/months';
import DATES from '../constants/days';
import { checkPasswordPattern, checkPasswordReEnter, checkUserIdPattern } from '../utils/checkPattern';
import REGEX from '../constants/regex';

export default function SignUp() {
  const {
    signupInfo: { id, password, nickname },
    isUniqued,
    setSignupInfo,
    postSignupInfo,
    updateSignupFormData,
    checkIdDuplicate,
    resetValidation,
  } = useSignup();

  const textStyle = `text-[13px] font-semibold text-darkGray`;
  const boxStyle = `w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-gray-scale-1 border border-darkGray/10 text-[13px]`;
  const selectStyle = `h-[43px] text-darkGray rounded-[10px] bg-gray-scale-1 border border-[#ececec]`;

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPwd = (event) => {
    setConfirmPassword(event.target.value);
  };

  const [selectedDate, setDate] = useState({ year: '', month: '', day: '' });

  const updateDateData = (event) => {
    const targetId = event.target.id;
    setDate((prev) => ({ ...prev, [targetId]: event.target.value }));
  };

  const isValid =
    isUniqued.userId && checkPasswordPattern(password) && checkPasswordReEnter(password, confirmPassword) && nickname;

  return (
    <div className="flex w-[338px] h-[650px] rounded-[20px] justify-center items-center bg-white mt-[-5px] shadow-loginShadow">
      <div className="flex flex-col w-[283px] h-[550px] justify-between items-center">
        <form className="login-form flex flex-col gap-[19px]">
          <div className="flex flex-col items-start gap-[10px]">
            <div className="">
              <label className={textStyle} htmlFor="username">
                &nbsp; 아이디 <span className="text-orange-600">*</span>
              </label>
              <input
                className={boxStyle}
                type="text"
                id="id"
                value={id}
                onChange={(event) => {
                  updateSignupFormData(event);
                  resetValidation(event.target.id);
                }}
                onReset={setSignupInfo}
                placeholder="4자~10자의 영문, 숫자"
              />
            </div>
            <CustomButton
              text="중복 확인"
              color="pink"
              disabled={checkUserIdPattern(id) ? false : true}
              onClick={() => checkIdDuplicate(id)}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <label className={textStyle} htmlFor="password">
              &nbsp; 비밀번호 <span className="text-orange-600">*</span>
            </label>
            <input
              className={boxStyle}
              type="password"
              id="password"
              value={password}
              onChange={updateSignupFormData}
              onReset={setSignupInfo}
              placeholder="8자 이상의 영문 대소문자/숫자/특수문자"
            />
            <p className="h-[13px] mt-[7px] text-[12px] text-red-600">
              {REGEX.passwordPattern.test(password) || password === '' ? (
                ''
              ) : (
                <p className="text-red-600">8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.</p>
              )}
            </p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <label className={textStyle} htmlFor="confirm-password">
              &nbsp; 비밀번호 재입력 <span className="text-orange-600">*</span>
            </label>
            <input
              className={boxStyle}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPwd}
              placeholder="비밀번호를 재입력 해주세요"
            />
            <p className="h-[13px] mt-[7px] text-center text-[12px] text-red-600">
              {confirmPassword === password ? '' : <p>비밀번호를 다시 입력해주세요.</p>}
            </p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <label className={textStyle} htmlFor="nickname">
              &nbsp; 닉네임 <span className="text-orange-600">*</span>
            </label>
            <div className="flex justify-center items-center">
              <input
                className={boxStyle}
                type="text"
                id="nickname"
                value={nickname}
                onChange={updateSignupFormData}
                onReset={setSignupInfo}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <label className={textStyle} htmlFor="birthdate">
              &nbsp; 생년월일
            </label>
            <div className="flex flex-row justify-between w-[283px] items-center text-[14px]">
              <select className={`w-[130px] ${selectStyle}`} defaultValue="2000">
                {YEARS.map((year) => (
                  <option className={textStyle} value={year} key={year} id="year" onClick={updateDateData}>
                    {year}
                  </option>
                ))}
              </select>
              <select className={`w-[69px] ${selectStyle}`} defaultValue="2000">
                {MONTHS.map((month) => (
                  <option className={textStyle} value={month} key={month} id="month" onClick={updateDateData}>
                    {month}
                  </option>
                ))}
              </select>
              <select className={`w-[69px] ${selectStyle}`} defaultValue="2000">
                {DATES.map((day) => (
                  <option className={textStyle} value={day} key={day} id="day" onClick={updateDateData}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-[10px] items-center">
          <Link to="/survey">
            <LoginButton
              text="설문조사"
              disabled={isValid ? false : true}
              onClick={postSignupInfo(`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`)}
            />
          </Link>
          <div className="flex justify-center items-center">
            <p className="text-xs text-left text-darkGray">이미 계정이 있으신가요? &nbsp; |</p>
            <Link className="text-[13px] font-bold text-lightBlue" to="/login">
              &nbsp; &nbsp;로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
