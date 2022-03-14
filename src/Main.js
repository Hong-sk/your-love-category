import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";
import RouteMatchNothing from "./components/RouteMatchNothing";
// import "./resources/css/Main.css";/
// import Title from "./resources/image/title.gif";

const FirstPage = () => {
  return (
    <>
      <h1 className="mainTitle">당신의 연애 캐릭터는?</h1>
      <h3 className="description">
        나의 연애 캐릭터는 무엇일까?
      </h3>
      <img
        src="https://via.placeholder.com/300"
        alt="mainImage"
        style={{
          width: '500px',
          height: '400px',
          display: 'block',
          margin: '0 auto'
        }}
      />

      <Link to="/intro/" className="btn">
        테스트 시작하기
      </Link>
    </>
  );
};

const Intro = () => {
  return (
    <div>
      <div>
        <p>
          재미로만 봐주시고 과신하지 말아주세요.
        </p>
        <p>
          재미로만 봐주시고 과신하지 말아주세요.
        </p>
      </div>
      <Link to='/questions/' className='btn' >
        시작하기
      </Link>
    </div>
  );
};


const Main = () => {
  return (

    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/intro/" element={<Intro />} />
          <Route path="/questions/" element={<Questions />} />
          <Route path="/result/" element={<Result />} />
          <Route element={<RouteMatchNothing />} />
        </Routes>
      </div>
      <hr style={{ width: "500px", marginTop: "40px" }} />
      <footer
        style={{
          width: "500px",
          textAlign: "center",
          margin: "0 auto",
          // textAlign: "right",
        }}
      >
        &copy;2021 Nomad Event
      </footer>
    </BrowserRouter>
  );
};

export default Main;
