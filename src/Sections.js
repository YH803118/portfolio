import { history, project } from "./data";
import "./css/Project.css";
import "./css/History.css";
import { useEffect } from "react";
import { normalColor, selectedColor } from "./App";

const Sections = ({ sectionName }) => {
  return <>{sectionName === "project" ? <Project /> : <History />}</>;
};
const Project = () => {
  const proj = project;

  useEffect(() => {
    const section = document.querySelectorAll(".projectDiv");
    const naviBtn = document.querySelectorAll(".projectBtn");

    const colorReturn = () => {
      for (let j = 0; j < naviBtn.length; j++) {
        naviBtn[j].style.color = normalColor;
      }
    };

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      colorReturn();
      const page = Math.floor(scroll - window.innerHeight);
      if (page < 902) naviBtn[0].style.color = selectedColor;
      else if (page < 902 + 857) naviBtn[1].style.color = selectedColor;
      else if (page < 902 + 857 + 685) naviBtn[2].style.color = selectedColor;
      else if (page < 902 + 857 + 685 + 853) naviBtn[3].style.color = selectedColor;
      // subItem[page].style.display = "block";
    });

    for (let i = 0; i < naviBtn.length; i++) {
      naviBtn[i].addEventListener("click", () => {
        section[i].scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      {proj.map((p) => {
        return (
          <div className="projectDiv">
            <h1 className="projectName">{p[0]}</h1>
            <div className="projectDate">
              {" "}
              _ 개발기간 : {p[2]}주 _ 개발인원 : {p[3]}명
            </div>
            <table className="projectContentTable">
              {p[1].map((content) => {
                return (
                  <tr>
                    <td className="projectContentTr">{content}</td>
                  </tr>
                );
              })}
              {p[5].map((link) => {
                const linkSpl = link.split("$");
                return (
                  <tr>
                    <td className="projectContentTr">
                      <a className="projectLink" href={linkSpl[0]} target="_blank" rel="noreferrer">
                        {linkSpl[1]}
                      </a>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="projectContentTr"> 사용기술 : {p[6]}</td>
              </tr>
            </table>
            <div>
              <img className="projectImg" src={p[4]} alt="projectImg" />
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};
const History = () => {
  const hist = history;
  // useEffect(() => {
  //   const section = document.querySelectorAll(".historyTable");
  //   const naviBtn = document.querySelectorAll(".historyBtn");

  //   const colorReturn = () => {
  //     for (let j = 0; j < naviBtn.length; j++) {
  //       naviBtn[j].style.color = normalColor;
  //     }
  //   };

  //   window.addEventListener("scroll", () => {
  //     const scroll = window.scrollY;
  //     colorReturn();
  //     const page = Math.floor(scroll - window.innerHeight);
  //     if (page < 902) naviBtn[0].style.color = selectedColor;
  //     else if (page < 902 + 857) naviBtn[1].style.color = selectedColor;
  //     else if (page < 902 + 857 + 685) naviBtn[2].style.color = selectedColor;
  //     else if (page < 902 + 857 + 685 + 853) naviBtn[3].style.color = selectedColor;
  //     // subItem[page].style.display = "block";
  //   });

  //   for (let i = 0; i < naviBtn.length; i++) {
  //     naviBtn[i].addEventListener("click", () => {
  //       section[i].scrollIntoView({ behavior: "smooth" });
  //     });
  //   }
  // }, []);
  return (
    <>
      {hist.map((h) => {
        return (
          <table className="historyTable">
            <tr>
              <td className="firstTd">
                <h1 className="historyName">{h[0]}</h1>
                <div className="historyDate"> _ {h[1]}</div>
              </td>
            </tr>
            <tr>
              <td className="historyDetail">
                <ul>
                  {h[2].map((detail) => {
                    return <li>{detail}</li>;
                  })}
                </ul>
              </td>
            </tr>
          </table>
        );
      })}
    </>
  );
};

export default Sections;
