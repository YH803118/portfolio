import { useEffect, useState } from "react";
import "./css/App.css";
import Header from "./Header";
import Sections from "./Sections";
export const selectedColor = "rgb(40,40,40)";
export const normalColor = "rgba(130, 130, 130, 1)";

function App() {
  const lastUpdate = new Intl.DateTimeFormat("kr").format(new Date());
  window.history.scrollRestoration = "manual"; // 새로고침시 맨위로

  useEffect(() => {
    const section = document.querySelectorAll(".section");
    const naviBtn = document.querySelectorAll(".sectionBtn");
    const subItem = document.querySelectorAll(".subItem");
    naviBtn[0].style.color = selectedColor;
    naviBtn[0].style.fontSize = "40px";

    if (window.innerWidth < 1100) {
      document.querySelector(".Content").style.paddingLeft = "0px";
      // document.querySelector(".Content").style.margin = "auto";
      document.querySelector(".LeftBar").style.display = "none";
    } else {
      document.querySelector(".Content").style.paddingLeft = "22%";
      document.querySelector(".LeftBar").style.display = "flex";
    }

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      colorReturn();
      const page = Math.floor(scroll - window.innerHeight);
      if (scroll < 400) {
        naviBtn[0].style.color = selectedColor;
        naviBtn[0].style.fontSize = "40px";
        subItem[0].style.display = "flex";
        subItem[0].style.flexDirection = "column";
      } else if (scroll < 400 + 902 + 857 + 685 + 853) {
        naviBtn[1].style.color = selectedColor;
        naviBtn[1].style.fontSize = "40px";
        subItem[1].style.display = "flex";
        subItem[1].style.flexDirection = "column";
      } else {
        naviBtn[2].style.color = selectedColor;
        naviBtn[2].style.fontSize = "40px";
        subItem[2].style.display = "flex";
        subItem[2].style.flexDirection = "column";
      }
    });

    const colorReturn = () => {
      for (let j = 0; j < naviBtn.length; j++) {
        naviBtn[j].style.color = normalColor;
        naviBtn[j].style.fontSize = "30px";
        subItem[j].style.display = "none";
      }
    };
    for (let i = 0; i < naviBtn.length; i++) {
      naviBtn[i].addEventListener("click", () => {
        section[i].scrollIntoView({ behavior: "smooth" });
      });
    }
    const topBtn = document.querySelector(".topBtn");
    topBtn.addEventListener("click", () => {
      section[0].scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 1100) {
        document.querySelector(".Content").style.paddingLeft = "0px";
        // document.querySelector(".Content").style.margin = "auto";
        document.querySelector(".LeftBar").style.display = "none";
      } else {
        document.querySelector(".Content").style.paddingLeft = "22%";
        document.querySelector(".LeftBar").style.display = "flex";
      }
    });
  }, []);

  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <>
      <div className="App">
        <div className="LeftBar">
          <div className="MenuBar">
            <div className="Menu">
              <button className="sectionBtn">Profile</button>
              <div className="subItem"></div>
              {/* <button className="sectionBtn">Skills</button>
              <div className="subItem"></div> */}
              <button className="sectionBtn" onClick={handleClick}>
                Project
              </button>
              <div className="subItem">
                <button className="projectBtn">_ 쇼핑몰(Tshopping)</button>
                <button className="projectBtn">_ 스터디 구인(Ozistudy)</button>
                <button className="projectBtn">_ 감정 기반 음악 추천</button>
              </div>
              <button className="sectionBtn">Education</button>
              <div className="subItem">
                <button className="historyBtn">_ 청운대학교</button>
                <button className="historyBtn">_ 빅데이터 기반 개발자 양성과정</button>
              </div>
            </div>
            <div className="lastUpdate">
              <p>dudghks1045@naver.com</p>
              {/* <p>{new Date()}</p> */}
              <p>Last Update: {lastUpdate}</p>
            </div>
          </div>
          <div className="vLine" />
        </div>
        <div className="Content">
          <div className="section">
            <Header />
          </div>
          <div className="section">
            <Sections sectionName={"project"} />
          </div>
          <div className="section">
            <Sections sectionName={"history"} />
          </div>
        </div>
      </div>
      <div className="fixedDiv">
        <button className="topBtn"></button>
      </div>
    </>
  );
}

export default App;
