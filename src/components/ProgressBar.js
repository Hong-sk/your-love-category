import React from "react";

const ProgressBar = (props) => {
    const { questionNum } = props;
    return (
        <div className="progressBox">
            {questionNum} / 22
            <br />
        </div>
    );
};

export default ProgressBar;
