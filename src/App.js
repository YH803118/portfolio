import { useEffect } from "react";
import "./App.css";
const normalColor = "rgb(40,40,40)";
const selectedColor = "rgba(200, 200, 200, 1)";

function App() {
  const lastUpdate = new Intl.DateTimeFormat("kr").format(new Date());
  window.history.scrollRestoration = "manual"; // 새로고침시 맨위로
  useEffect(() => {
    const section = document.querySelectorAll(".section");
    const naviBtn = document.querySelectorAll(".sectionBtn");
    const subItem = document.querySelectorAll(".subItem");
    naviBtn[0].style.color = selectedColor;
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      colorReturn();
      const page = Math.floor(scroll / window.innerHeight);
      naviBtn[page].style.color = selectedColor;
      subItem[page].style.display = "block";
    });

    const colorReturn = () => {
      for (let j = 0; j < naviBtn.length; j++) {
        naviBtn[j].style.color = normalColor;
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
  }, []);

  return (
    <>
      <div className="App">
        <div className="LeftBar">
          <div className="MenuBar">
            <div className="Menu">
              <button className="sectionBtn">자기소개</button>
              <div className="subItem"></div>
              <button className="sectionBtn">프로젝트</button>
              <div className="subItem">
                <button>빅데이터 기반 음악 추천</button>
                <button>스터디 구인 사이트</button>
                <button>쇼핑 사이트</button>
              </div>
              <button className="sectionBtn">학력/활동</button>
              <div className="subItem">
                <button>청운대학교</button>
                <button>국비교육 이수</button>
              </div>
              <button className="sectionBtn">섹션4</button>
              <div className="subItem"></div>
            </div>
            <p className="lastUpdate">Last Update: {lastUpdate}</p>
          </div>
          <div className="vLine" />
        </div>
        <div className="Content">
          <div className="section">section1 - 간략한 자기소개</div>
          <div className="section">section2 - 프로젝트</div>

          <div className="section">section3 - 학력/활동</div>
          <div className="section">section4</div>
        </div>
      </div>
      <div className="fixedDiv">
        <button className="topBtn"></button>
      </div>
    </>
  );
}

export default App;
