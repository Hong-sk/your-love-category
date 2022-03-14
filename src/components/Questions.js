import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Questions = () => {
    console.log()

    const navigate = useNavigate();
    const [questionNum, setQuestionNum] = useState(1);
    const [isMan, setIsMan] = useState();

    const [category, setCategory] = useState({
        eros: 0,
        storge: 0,
        ludus: 0,
        fragma: 0,
        mania: 0,
        agape: 0
    })

    const [question, setQuestion] = useState('1. 당신의 성별은??');
    const [btn1Text, setBtn1Text] = useState('여자')
    const [btn2Text, setBtn2Text] = useState('남자')
    const [btn3Text, setBtn3Text] = useState('')
    const [btn4Text, setBtn4Text] = useState('')
    const [btn5Text, setBtn5Text] = useState('')

    useEffect(() => {
        switch (questionNum) {
            case 2:
                setQuestion("2. 애인에게 속마음을 잘 드러내고 애정표현 완전 듬뿍!");
                setBtn1Text('1. 거의 해당하지 않는다.')
                setBtn2Text('2. 약간 해당하지 않는 편이다.')
                setBtn3Text('3. 중간 정도인 것 같다.')
                setBtn4Text('4. 약간 해당하는 편이다.')
                setBtn5Text('5. 거의 해당하는 편이다.')
                break;
            case 3:
                setQuestion(
                    "3. 드라마나 영화같은 사랑을 보고 꿈꾸는 편이다",
                );

                break;
            case 4:
                setQuestion(
                    "4. 사랑은 내가 중요시하는 가치 중에서도 매우 높은 위치에 있다",
                );
                break;
            case 5:
                setQuestion(
                    "5. 첫 눈에 반했던 경험이 있거나 첫 눈에 반하는 것은 당연할 수 있다?",
                );

                break;
            case 6:
                setQuestion(
                    "6. 상대의 외적인 요소보다는 능력치가 더 중요하다",
                );

                break;
            case 7:
                setQuestion(
                    "7. 연애할 때 상대방이 나한테 도움이 되는지를 따져보거나 생각하는 것은 당연하다",
                );

                break;
            case 8:
                setQuestion(
                    "8. 나와 비슷한 형편의 상대와 연애하는 것이 좋다",
                );

                break;
            case 9:
                setQuestion(
                    "9. 달콤하고 설레는 연애보다는 편안하고 차분한 연애가 좋다",
                );

                break;
            case 10:
                setQuestion(
                    "10. 서로의 관심사가 같은 연애 상대방이 좋다",
                );

                break;

            default:
                break;
        }
    }, [questionNum]);

    const addProperty = (property) => {
        const arrowFunc = (prev) => {
            const prevValue = prev[property];
            return { ...prev, [property]: prevValue + 1 };
        };
        setCategory(arrowFunc);
    };

    const buttonTrigger = (btnNum) => {
        switch (btnNum) {
            case "btn_1":
                switch (questionNum) {
                    case 1:
                        setIsMan(true);
                        break;
                    case 2:
                        addProperty("inactive", 1);
                        break;
                    case 3:
                        addProperty("active", 1);
                        break;
                    case 4:
                        addProperty("rule", 3);
                        break;
                    case 5:
                        addProperty("indifference", 2);
                        break;
                    case 6:
                        addProperty("indifference", 2);
                        break;
                    case 7:
                        addProperty("rule", 3);
                        break;
                    case 8:
                        addProperty("active", 1);
                        break;
                    case 9:
                        addProperty("indifference", 2);
                        break;
                    case 10:
                        addProperty("rule", 3);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_2":
                switch (questionNum) {
                    case 1:
                        setIsMan(false);
                        break;
                    case 2:
                        addProperty("active", 1);
                        break;
                    case 3:
                        addProperty("active", 1);
                        break;
                    case 4:
                        addProperty("middle", 3);
                        break;
                    case 5:
                        addProperty("indifference", 2);
                        break;
                    case 6:
                        addProperty("indifference", 2);
                        break;
                    case 7:
                        addProperty("middle", 3);
                        break;
                    case 8:
                        addProperty("active", 1);
                        break;
                    case 9:
                        addProperty("indifference", 2);
                        break;
                    case 10:
                        addProperty("middle", 3);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_3":
                switch (questionNum) {
                    case 2:
                        addProperty("inactive", 1);
                        break;
                    case 3:
                        addProperty("inactive", 1);
                        break;
                    case 4:
                        addProperty("chaos", 3);
                        break;
                    case 5:
                        addProperty("aggressive", 2);
                        break;
                    case 6:
                        addProperty("aggressive", 2);
                        break;
                    case 7:
                        addProperty("chaos", 3);
                        break;
                    case 8:
                        addProperty("inactive", 1);
                        break;
                    case 9:
                        addProperty("aggressive", 2);
                        break;
                    case 10:
                        addProperty("chaos", 3);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (questionNum === 10) {
            navigate('/result/', {
                state: {
                    isMan, category
                }
            })
        }
    }
        , [category]);

    const nextQuestion = (e) => {
        const btnNum = e.target.className.slice(0, 5);
        buttonTrigger(btnNum);

        if (questionNum !== 10) {
            setQuestionNum(questionNum + 1);
        }
    };

    return (
        <div>
            <h3>{question}</h3>
            <div>
                <button
                    className="btn_1 btn"
                    onClick={nextQuestion}
                    style={{
                        fontFamily: "Song Myung, serif",
                        fontSize: "1.3rem",
                    }}
                >
                    {btn1Text}
                </button>
                <button
                    className="btn_2 btn"
                    onClick={nextQuestion}
                    style={{
                        fontFamily: "Song Myung, serif",
                        fontSize: "1.3rem",
                    }}
                >
                    {btn2Text}
                </button>
                {questionNum !== 1 && (
                    <>
                        <button
                            className="btn_3 btn"
                            onClick={nextQuestion}
                            style={{
                                fontFamily: "Song Myung, serif",
                                fontSize: "1.3rem",
                            }}
                        >
                            {btn3Text}
                        </button>
                        <button
                            className="btn_4 btn"
                            onClick={nextQuestion}
                            style={{
                                fontFamily: "Song Myung, serif",
                                fontSize: "1.3rem",
                            }}
                        >
                            {btn4Text}
                        </button>
                        <button
                            className="btn_5 btn"
                            onClick={nextQuestion}
                            style={{
                                fontFamily: "Song Myung, serif",
                                fontSize: "1.3rem",
                            }}
                        >
                            {btn5Text}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Questions;