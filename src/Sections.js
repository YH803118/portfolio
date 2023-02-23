import { history, project } from "./data";
import "./css/Project.css";
import "./css/History.css";

const Sections = ({ sectionName }) => {
  return <>{sectionName === "project" ? <Project /> : <History />}</>;
};
const Project = () => {
  const proj = project;
  return (
    <>
      {proj.map((p) => {
        return (
          <div>
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
            </table>
            <div>스크린샷</div>

            <div>사용 기술들</div>
            <hr />
          </div>
        );
      })}
    </>
  );
};
const History = () => {
  const hist = history;
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
