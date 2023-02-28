import * as React from "react";
import "./css/Header.css";
import profile from "./img/img.jpg";
const Header = () => {
  return (
    <>
      <div className="Header">
        <h1>_ Profile</h1>
        <div>
          <img src={profile} />
          <p>
            "안녕하세요. <br />
            문제를 직시하고 타협하지 않는
            <br />
            신입 개발자 김영환입니다"
          </p>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="Skill"></div> */}
    </>
  );
};

export default Header;
