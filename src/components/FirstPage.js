import React from "react";
import { Link } from "react-router-dom";


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

            <Link to="/questions/" className="btn">
                테스트 시작하기
            </Link>
        </>
    );
};

export default FirstPage;