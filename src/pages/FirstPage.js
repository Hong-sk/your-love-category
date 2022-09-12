import React from "react";
import { Link } from "react-router-dom";
import mainImg from "./resources/people.jpg";

const FirstPage = () => {
  return (
    <>
      <h1 className="mainTitle">당신의 연애 캐릭터는?</h1>
      <h3 className="description">당신의 유형을 찾아보세요!</h3>
      <img className="mainImg" src={mainImg} alt="mainImage" />
      <Link to="/questions/" className="btn bigBtn">
        테스트 시작하기
      </Link>
    </>
  );
};

export default FirstPage;
