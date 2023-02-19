import { useEffect, useState } from "react";
import "./App.css";

const normalColor = "rgba(255, 255, 255, 0.7)";
const selectedColor = "rgba(216, 191, 216, 1)";

function App() {
  const [section, setSection] = useState();
  const naviBtn = document.querySelectorAll("button");
  useEffect(() => {
    setSection(document.querySelectorAll(".section"));
    // setNaviBtn(document.querySelectorAll("button"));
  }, []);
  console.log(naviBtn);
  for (let i = 0; i < naviBtn.length; i++) {
    naviBtn[i].addEventListener("click", () => {
      section[i].scrollIntoView({ behavior: "smooth" });
    });
  }
  function wheelDown(section, baseElementTop, clientHeight) {
    for (let i = 1; i < section.length; i++) {
      if (baseElementTop === clientHeight * (section.length - i)) {
        window.scrollTo({
          top: clientHeight * i,
          behavior: "smooth", // 부드럽게 이동
        });
        for (let j = 0; j < naviBtn.length; j++) {
          naviBtn[j].style.color = normalColor;
        }
        naviBtn[i].style.color = selectedColor;
      }
    }
  }
  function wheelUp(section, baseElementTop, clientHeight) {
    for (let i = 0; i < section.length - 1; i++) {
      if (baseElementTop === clientHeight * i) {
        window.scrollTo({
          top: clientHeight * (section.length - 2 - i),
          behavior: "smooth",
        });
        for (let j = 0; j < naviBtn.length; j++) {
          naviBtn[j].style.color = normalColor;
        }
        naviBtn[i].style.color = selectedColor;
      }
    }
  }
  window.history.scrollRestoration = "manual";

  const handleWheel = (event) => {
    const clientHeight = window.innerHeight;
    const baseElementTop = section[section.length - 1].getBoundingClientRect().top;
    if (event.deltaY > 0) {
      wheelDown(section, baseElementTop, clientHeight);
    }
    if (event.deltaY < 0) {
      wheelUp(section, baseElementTop, clientHeight);
    }
  };

  return (
    <div className="App" onScroll={handleWheel}>
      <div className="LeftBar">
        <div className="MenuBar">
          <div className="Menu">
            <button>섹션1</button>
            <button>섹션2</button>
            <button>섹션3</button>
            <button>섹션4</button>
          </div>
          <p className="lastUpdate">Last Update: 2023/02/19</p>
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
  );
}

export default App;
