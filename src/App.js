import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./pages/Result";
import RouteMatchNothing from "./components/RouteMatchNothing";
import "./App.scss";
import { Col, Container } from "react-bootstrap";
import FirstPage from "./pages/FirstPage";

const App = () => {
  return (
    <BrowserRouter>
      <Container className="container">
        <Col lg={4} md={8} sm={10} xs={12} className="line">
          <div className="linevh">
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/questions/:id" element={<Questions />} />
              <Route path="/result?type=:style" element={<Result />} />
              <Route element={<RouteMatchNothing />} />
            </Routes>
          </div>
        </Col>
      </Container>
    </BrowserRouter>
  );
};

export default App;
