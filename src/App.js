import "./App.css";
const normalColor = "rgb(40,40,40)";
const selectedColor = "rgba(200, 200, 200, 1)";

function App() {
  const lastUpdate = new Intl.DateTimeFormat("kr").format(new Date());

  const section = document.querySelectorAll(".section");
  const naviBtn = document.querySelectorAll("button");

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

  return (
    <div className="App">
      <div className="LeftBar">
        <div className="MenuBar">
          <div className="Menu">
            <button>섹션1</button>
            <button>섹션2</button>
            <button>섹션3</button>
            <button>섹션4</button>
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
  );
}

export default App;
