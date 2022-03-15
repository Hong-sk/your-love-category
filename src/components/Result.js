import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from "./Loading";
import ResultComponent from './ResultComponent';

const Result = () => {
    const location = useLocation();
    const { isMan, category } = location.state;
    const [isLoading, setIsLoading] = useState(true);
    const result = () => {
        let resultString = isMan ? "W" : "M";
        const { eros, ludus, storge, agape, fragma, mania } = category;
        // 여기도 수정해야함. 제일 높은 숫자를 가져오기 때문에
        const biggest = Math.max(eros, ludus, storge, agape, fragma, mania);
        if (eros === biggest) {
            const word = "eros"
            resultString = resultString + word;
        };
        if (ludus === biggest) {
            const word = "ludus"
            resultString = resultString + word;
        };
        if (storge === biggest) {
            const word = "storge"
            resultString = resultString + word;
        };
        if (agape === biggest) {
            const word = "agape"
            resultString = resultString + word;
        };
        if (fragma === biggest) {
            const word = "fragma"
            resultString = resultString + word;
        };
        if (mania === biggest) {
            const word = "mania"
            resultString = resultString + word;
        };
        return resultString;
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading && <Loading />}
            {!isLoading && <ResultComponent result={result()} />}
        </div>)
};

export default Result;