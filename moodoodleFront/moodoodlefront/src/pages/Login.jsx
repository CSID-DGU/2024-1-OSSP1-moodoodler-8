import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import Main from "./Main";

export default function Login(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크
    // 스타일 설정
    const textStyle = "w-[271px] text-[13px] font-semibold text-darkGray"
    const boxStyle = "w-[283px] h-[43px] pl-[7px] rounded-[10px] bg-[gray-scale-1] border border-darkGray/10 text-[13px]"

    const navigate = useNavigate();
  
    const handleLogin = async (event) => {
      event.preventDefault();
      await new Promise((r) => setTimeout(r, 1000));
      
      const response = await fetch(
        "로그인 서버 주소",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            password: password,
          }),
        }
      );
      const result = await response.json();

      if (response.status === 200) {
        setLoginCheck(false);
        // Store token in local storage
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("id", result.id); // 여기서 userid를 저장
        sessionStorage.setItem("role", result.role); // 여기서 role를 저장
        sessionStorage.setItem("storeid", result.storeId); // 여기서 role를 저장
        console.log("로그인성공, 아이디:" + result.id);
        navigate(<Main/>); // 로그인 성공시 홈으로 이동
      } else {
        setLoginCheck(true);
      }

    };
    return(
        <div className="flex justify-center flex-col items-center w-[390px] h-screen bg-white ">
            <div className="">
                <img src="/assets/moodoodleLogoBig.svg" alt="logo" />
            </div>
            <div className="w-[338px] h-[297px] rounded-[20px] bg-white shadow-loginShadow">
                {/* 아이디 비밀번호 입력란 */}
                <form className="login-form" onSubmit={handleLogin}>
                  <div>
                    <div className="flex justify-center items-center mt-[30px]">
                      <label className={textStyle} htmlFor="username">아이디</label><br/>
                    </div>
                    <div className="flex justify-center items-center mb-[10px]">
                      <input className={boxStyle}
                      type="text"
                      id="id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      placeholder="아이디를 입력하세요"
                      /><br/>
                    </div>
                    <div className="flex justify-center items-center">
                      <label className={textStyle} htmlFor="password">비밀번호</label>
                    </div>
                    <div className="flex justify-center items-center mb-[10px]">
                      <input className={boxStyle}
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력하세요"
                      />
                    </div>
                    <br/>
                  </div>
                  {loginCheck && (
                  <label  style={{color: "red"}}>아이디 혹은 비밀번호가 틀렸습니다.</label>
                  )}
                  {/* 로그인 버튼 */}
                  <div className="flex justify-center items-center mb-[10px]">
                    <LoginButton text="로그인" onClick={onclick}/>
                  </div>
                  {/* 회원가입 이동 문구 */}
                  <div className="flex justify-center items-center">
                    <p className="text-xs text-left text-darkGray mr-[13px]">
                    아직 회원이 아니신가요?
                    </p>
                    <Link className="text-[13px] font-bold text-lightBlue" to="/user/signup">회원가입</Link>
                  </div>
                </form>
            </div>
        </div>
    );
}