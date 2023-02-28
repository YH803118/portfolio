import school from "./img/school.png";
import catMusic from "./img/catMusic.png";
import oziStudy from "./img/ozistudy.png";
import tshopping from "./img/tshopping.png";
export const project = [
  [
    "학교 홈페이지",
    [
      "Spring, oracle, tomcat을 활용한 학교 홈페이지 구현",
      "로그인, 회원가입, 게시판, 달력과 일정 관리, 과목 개설, 수강 신청",
      "파일 업로드가 가능한 게시물 작성, 게시물 검색, 과목별 페이지",
      "리더역으로써 팀원들의 의견을 수렴, 정리",
      "전체 레이아웃, 달력과 일정관리, 과목별 페이지 담당",
    ],
    3,
    3,
    school,
    ["https://github.com/YH803118/20220322_teamA_first_project$깃허브 링크"],
    "html, css, javascript, spring, eclipse, MyBatis, JDBC, Apache Tomcat",
  ],
  [
    "빅데이터 기반 음악 추천",
    [
      "크롤링을 통해 음악 정보를 받아옴",
      "가사 분석을 통해 이용자의감정 상태에 맞는 음악을 추천",
      "크롤링 보조, 데이터 처리, aws를 통한 배포 담당",
    ],
    5,
    3,
    catMusic,
    ["https://github.com/YH803118/CAT$깃허브 링크", "https://cat-music.kro.kr$구현 웹사이트"],
    "html, css, javascript, aws, django, uwsgi, nginx, mysql",
  ],
  [
    "스터디 구인 사이트(Ozistudy)",
    [
      "React와 express를 활용한 회원관리와 스터디 개설, 참여, 검색 등의 기능을 구현",
      "Heroku를 통한 배포 담당",
      "스터디 개설, 참여, 제목,내용,태그를 통한 검색과 댓글 구현 담당",
    ],
    4,
    2,
    oziStudy,
    ["https://github.com/YH803118/oziStudy$깃허브 링크", "https://ozitest.herokuapp.com/$구현 웹사이트"],
    "html, css, javascript, React, nodejs, express, heroku, mysql",
  ],
  [
    "쇼핑몰(Tshopping)",
    [
      "React와 webpack, Typescript, express를 사용한 프로젝트",
      "상품 분류와 검색, 장바구니, 리뷰 작성, 구매 기록 보존 등 전반적인 쇼핑몰 기능 구현",
      "장바구니, 리뷰, 구매기록, 회원관리 담당",
      "Passport를 통한 로그인 관리 담당",
      "Heroku를 통해 배포",
    ],
    4,
    2,
    tshopping,
    ["https://github.com/marrtil/TShopping$깃허브 링크", "https://tshopping-app.herokuapp.com/$구현 웹사이트"],
    "html, css, javascript, Typescript, React, webpack, nodejs, express, heroku, mysql",
  ],
];

export const history = [
  [
    "청운대학교",
    "2016.02 ~ 2022.02",
    [
      "학점 : 3.31 / 4.5",
      "html, python, javascript, c++ 등 다양한 언어를 경험",
      "oracle, mysql 등 SQL 학습",
      "주로 Visual Studio 사용",
    ],
  ],
  [
    "빅데이터 기반 AI 개발자 양성과정",
    "2021.12 ~ 2022.06",
    [
      "html, css, python, javascript 복습",
      "jQuery, jDBC, JSP, Spring 학습",
      "Git을 활용한 팀프로젝트 관리",
      "데이터 분석 및 시각화",
      "2번의 팀프로젝트 진행",
      "멘토와 함께한 팀프로젝트 진행",
      "주로 visual code, eclipse 사용",
    ],
  ],
];
