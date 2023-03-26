import * as React from "react";
import "./css/Header.css";
import profile from "./img/img.jpg";
import mail from "./img/mail.png";
const Header = () => {
  return (
    <>
      <div className="Header">
        <h1>_ Profile</h1>
        <div>
          <img src={profile} className="profileImg" />
          <p>
            "안녕하세요. <br />
            문제를 직시하고 타협하지 않는
            <br />
            신입 개발자 김영환입니다"
            <br />
            <br />
            {/* <img src={mail} className="icon" />  */}
            dudghks1045@naver.com
            <br />
            010 - 2948 - 2645
          </p>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="Skill"></div> */}
    </>
  );
};

export default Header;
