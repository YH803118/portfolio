const Sections = ({ sectionName }) => {
  return <>{sectionName === "project" ? <Project /> : <History />}</>;
};
const Project = () => {
  return (
    <div>
      <h3>프로젝트명</h3>
      <p>간단한 소개, 자신의 역할</p>
      <div>스크린샷</div>
      <div>개발기간(~~주)</div>
      <div>사용 기술들</div>
    </div>
  );
};
const History = () => {
  return (
    <div>
      <h3>활동명</h3>
      <div>활동테이블</div>
    </div>
  );
};

export default Sections;
