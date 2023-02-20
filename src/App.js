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
              <button className="sectionBtn">섹션1</button>
              <button className="sectionBtn">섹션2</button>
              <button className="sectionBtn">섹션3</button>
              <button className="sectionBtn">섹션4</button>
            </div>
            <p className="lastUpdate">Last Update: {lastUpdate}</p>
          </div>
          <div className="vLine" />
        </div>
        <div className="Content">
          <div className="section">section1</div>
          <div className="section">section2</div>
          <div className="section">section3</div>
          <div className="section">section4</div>
        </div>
      </div>
      <div className="fixedDiv">
        <button className="topBtn">top</button>
      </div>
    </>
  );
}

export default App;
