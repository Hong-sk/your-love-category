import React from "react";
import loading from "../resources/loading.gif"

const Loading = () => {
    return (
        <>
            <img
                alt="title"
                src={loading}
            />
            <div className="loadingMent">당신의 연애 캐릭터를 찾는 중입니다,,,</div>
        </>
    );
};

export default Loading;
