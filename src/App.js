import { useEffect, useState } from "react";
import "./css/App.css";
import Sections from "./Sections";
const normalColor = "rgb(40,40,40)";
const selectedColor = "rgba(130, 130, 130, 1)";

function App() {
  const lastUpdate = new Intl.DateTimeFormat("kr").format(new Date());
  window.history.scrollRestoration = "manual"; // 새로고침시 맨위로

  useEffect(() => {
    const section = document.querySelectorAll(".section");
    const naviBtn = document.querySelectorAll(".sectionBtn");
    const subItem = document.querySelectorAll(".subItem");
    naviBtn[0].style.color = selectedColor;
    naviBtn[0].style.fontSize = "40px";

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      colorReturn();
      const page = Math.floor(scroll / window.innerHeight);
      naviBtn[page].style.color = selectedColor;
      naviBtn[page].style.fontSize = "40px";
      subItem[page].style.display = "block";
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
        console.log("clickEvent + ", section[i]);
        section[i].scrollIntoView({ behavior: "smooth" });
      });
    }
    const topBtn = document.querySelector(".topBtn");
    topBtn.addEventListener("click", () => {
      section[0].scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 1000) {
        document.querySelector(".Content").style.paddingLeft = "0px";
        document.querySelector(".LeftBar").style.display = "none";
      } else {
        document.querySelector(".Content").style.paddingLeft = "20%";
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
              <button className="sectionBtn">자기소개</button>
              <div className="subItem"></div>
              <button className="sectionBtn" onClick={handleClick}>
                프로젝트
              </button>
              <div className="subItem">
                <button>학교 홈페이지</button>
                <button>빅데이터 기반 음악 추천</button>
                <button>스터디 구인(Ozistudy)</button>
                <button>쇼핑몰(Tshopping)</button>
              </div>
              <button className="sectionBtn">학력/활동</button>
              <div className="subItem">
                <button>청운대학교</button>
                <button>빅데이터 기반 개발자 양성과정</button>
              </div>
            </div>
            <p className="lastUpdate">Last Update: {lastUpdate}</p>
          </div>
          <div className="vLine" />
        </div>
        <div className="Content">
          <div className="section">section1 - 간략한 자기소개</div>
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
