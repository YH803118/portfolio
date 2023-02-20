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
    naviBtn[0].style.color = selectedColor;
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      colorReturn();
      naviBtn[Math.floor(scroll / window.innerHeight)].style.color = selectedColor;
    });

    const colorReturn = () => {
      for (let j = 0; j < naviBtn.length; j++) {
        naviBtn[j].style.color = normalColor;
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
              <button className="sectionBtn">프로젝트</button>
              <button className="sectionBtn">학력/활동</button>
              <button className="sectionBtn">섹션4</button>
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
