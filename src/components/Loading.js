import React from "react";
// import Title from "../resources/image/title.gif";

const Loading = () => {
    return (
        <>
            <img
                alt="title"
                // src={Title}
                style={{
                    width: "500px",
                    height: "400px",
                    display: "block",
                    margin: "0 auto",
                }}
            />
            <div>당신의 연애 캐릭터를 찾는 중입니다,,,</div>
        </>
    );
};

export default Loading;
