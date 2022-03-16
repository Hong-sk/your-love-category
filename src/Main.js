import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";
import RouteMatchNothing from "./components/RouteMatchNothing";
// import "./resources/css/Main.css";/
// import Title from "./resources/image/title.gif";
import "./App.scss"
import { Col, Container } from 'react-bootstrap';

const FirstPage = () => {
  return (
    <>

      <h1 className="mainTitle">당신의 연애 캐릭터는?</h1>
      <h3 className="description">
        당신의 유형을 찾아보세요!
      </h3>
      <img
        className="mainImg"
        src="https://via.placeholder.com/300"
        alt="mainImage"
      />
      <Link to="/intro/" className="btn bigBtn">
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
          재미로 뚝딱뚝딱 만든 심리검사입니다. 가볍게 즐겨주시면 감사드리겠습니다.
        </p>
        <br />
        <p>
          캐릭터의 경우 과장되거나 잘 어울리지 않을 수 있습니다. 양해 부탁드려요 :)
        </p>
        <br />

        <p>
          문제를 보시고 그 문제에 나는 얼마큼 해당하는 것 같다에 점수를 주시면 됩니다.
        </p>
        <br />

        <p>
          1번은 0점, 5번은 4점입니다!
        </p>
      </div>
      <Link to='/questions/' className='btn bigBtn' >
        시작하기
      </Link>
    </div>
  );
};


const Main = () => {
  return (

    <BrowserRouter>
      <Container className="container">
        <Col lg={6} md={8} sm={10} xs={12} className="line">
          <div className="linevh">
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/intro/" element={<Intro />} />
              <Route path="/questions/" element={<Questions />} />
              <Route path="/result/" element={<Result />} />
              <Route element={<RouteMatchNothing />} />
            </Routes>
          </div>
        </Col>
      </Container>
    </BrowserRouter>
  );
};

export default Main;
