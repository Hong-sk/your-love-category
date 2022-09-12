import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Questions = () => {
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
    const [btn1Text, setBtn1Text] = useState('여')
    const [btn2Text, setBtn2Text] = useState('남')
    const [btn3Text, setBtn3Text] = useState('')
    const [btn4Text, setBtn4Text] = useState('')
    const [btn5Text, setBtn5Text] = useState('')

    useEffect(() => {
        switch (questionNum) {
            case 2:
                setQuestion("2. 애인에게 속마음을 잘 드러내고 애정표현 완전 듬뿍!");
                setBtn1Text('1')
                setBtn2Text('2')
                setBtn3Text('3')
                setBtn4Text('4')
                setBtn5Text('5')
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
            case 11:
                setQuestion(
                    "11. 상대방과의 믿음을 쌓는데 상당히 오랜 시간이 걸린다",
                );
                break;
            case 12:
                setQuestion(
                    "12. 상대방이 나를 사랑하는지 항상 궁금해 하고 확인한다.",
                );
                break;
            case 13:
                setQuestion(
                    "13. 내가 사랑하는 만큼 내 연인이 나를 사랑했으면 한다",
                );
                break;
            case 14:
                setQuestion(
                    "14. 연인이 내 행동을 싫어하진 않을까 전전긍긍한 적이 많다",
                );
                break;
            case 15:
                setQuestion(
                    "15. 애인이 바람을 피우지 않을까 자주 걱정한다",
                );
                break;
            case 16:
                setQuestion(
                    "16. 내가 애인에게 방해물이 된다면 헤어질 것이다.",
                );
                break;
            case 17:
                setQuestion(
                    "17. 내가 하는 사랑은 의지와 노력이 동반된다.",
                );
                break;
            case 18:
                setQuestion(
                    "18. 연애를 위해 많은 것을 포기할 수 있다",
                );
                break;
            case 19:
                setQuestion(
                    "19. 아무리 사랑하는 상대라도 어느 정도의 거리는 필요하다",
                );
                break;
            case 20:
                setQuestion(
                    "20. 진지하고 오글거리는 연애는 부담스럽다",
                );
                break;
            case 21:
                setQuestion(
                    "21. 동시에 여러 명을 좋아하는 것은 가능한 일이다",
                );
                break;
            case 22:
                setQuestion(
                    "22. 이상형은 그 때 그 때 다르다",
                );
                break;


            default:
                break;
        }
    }, [questionNum]);

    const addProperty = (property, score) => {
        const arrowFunc = (prev) => {
            const prevValue = prev[property];
            return { ...prev, [property]: prevValue + score };
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
                        addProperty("eros", 0);
                        break;
                    case 3:
                        addProperty("eros", 0);
                        break;
                    case 4:
                        addProperty("eros", 0);
                        break;
                    case 5:
                        addProperty("fragma", 4); // 수정할 것 - 에로스랑 수치 조정 필요
                        break;
                    case 6:
                        addProperty("fragma", 0);
                        break;
                    case 7:
                        addProperty("fragma", 0);
                        break;
                    case 8:
                        addProperty("fragma", 0);
                        break;
                    case 9:
                        addProperty("storge", 0);
                        break;
                    case 10:
                        addProperty("storge", 0);
                        break;
                    case 11:
                        addProperty("storge", 0);
                        break;
                    case 12:
                        addProperty("mania", 4);// 스토르게, 매니아 조정할 것
                        break;
                    case 13:
                        addProperty("mania", 0);
                        break;
                    case 14:
                        addProperty("mania", 0);
                        break;
                    case 15:
                        addProperty("mania", 0);
                        break;
                    case 16:
                        addProperty("agape", 0);
                        break;
                    case 17:
                        addProperty("agape", 0);
                        break;
                    case 18:
                        addProperty("agape", 0);
                        break;
                    case 19:
                        addProperty("agape", 4); // 루두스랑 조정할 것
                        break;
                    case 20:
                        addProperty("ludus", 0);
                        break;
                    case 21:
                        addProperty("ludus", 0);
                        break;
                    case 22:
                        addProperty("luldus", 0);
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
                        addProperty("eros", 1);
                        break;
                    case 3:
                        addProperty("eros", 1);
                        break;
                    case 4:
                        addProperty("eros", 1);
                        break;
                    case 5:
                        addProperty("fragma", 2);
                        break;
                    case 6:
                        addProperty("fragma", 1);
                        break;
                    case 7:
                        addProperty("fragma", 1);
                        break;
                    case 8:
                        addProperty("fragma", 1);
                        break;
                    case 9:
                        addProperty("storge", 1);
                        break;
                    case 10:
                        addProperty("storge", 1);
                        break;
                    case 11:
                        addProperty("storge", 1);
                        break;
                    case 12:
                        addProperty("mania", 2);// 스토르게, 매니아 조정할 것
                        break;
                    case 13:
                        addProperty("mania", 1);
                        break;
                    case 14:
                        addProperty("mania", 1);
                        break;
                    case 15:
                        addProperty("mania", 1);
                        break;
                    case 16:
                        addProperty("agape", 1);
                        break;
                    case 17:
                        addProperty("agape", 1);
                        break;
                    case 18:
                        addProperty("agape", 1);
                        break;
                    case 19:
                        addProperty("agape", 2); // 루두스랑 조정할 것
                        break;
                    case 20:
                        addProperty("ludus", 1);
                        break;
                    case 21:
                        addProperty("ludus", 1);
                        break;
                    case 22:
                        addProperty("luldus", 1);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_3":
                switch (questionNum) {
                    case 2:
                        addProperty("eros", 2);
                        break;
                    case 3:
                        addProperty("eros", 2);
                        break;
                    case 4:
                        addProperty("eros", 2);
                        break;
                    case 5:
                        addProperty("eros", 0);
                        break;
                    case 6:
                        addProperty("fragma", 2);
                        break;
                    case 7:
                        addProperty("fragma", 2);
                        break;
                    case 8:
                        addProperty("fragma", 2);
                        break;
                    case 9:
                        addProperty("storge", 2);
                        break;
                    case 10:
                        addProperty("storge", 2);
                        break;
                    case 11:
                        addProperty("storge", 2);
                        break;
                    case 12:
                        addProperty("storge", 0);// 스토르게, 매니아 조정할 것
                        break;
                    case 13:
                        addProperty("mania", 2);
                        break;
                    case 14:
                        addProperty("mania", 2);
                        break;
                    case 15:
                        addProperty("mania", 2);
                        break;
                    case 16:
                        addProperty("agape", 2);
                        break;
                    case 17:
                        addProperty("agape", 2);
                        break;
                    case 18:
                        addProperty("agape", 2);
                        break;
                    case 19:
                        addProperty("ludus", 0); // 루두스랑 조정할 것
                        break;
                    case 20:
                        addProperty("ludus", 2);
                        break;
                    case 21:
                        addProperty("ludus", 2);
                        break;
                    case 22:
                        addProperty("luldus", 2);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_4":
                switch (questionNum) {
                    case 1:
                        setIsMan(true);
                        break;
                    case 2:
                        addProperty("eros", 3);
                        break;
                    case 3:
                        addProperty("eros", 3);
                        break;
                    case 4:
                        addProperty("eros", 3);
                        break;
                    case 5:
                        addProperty("eros", 2); // 수정할 것 - 에로스랑 수치 조정 필요
                        break;
                    case 6:
                        addProperty("fragma", 3);
                        break;
                    case 7:
                        addProperty("fragma", 3);
                        break;
                    case 8:
                        addProperty("fragma", 3);
                        break;
                    case 9:
                        addProperty("storge", 3);
                        break;
                    case 10:
                        addProperty("storge", 3);
                        break;
                    case 11:
                        addProperty("storge", 3);
                        break;
                    case 12:
                        addProperty("storge", 2);// 스토르게, 매니아 조정할 것
                        break;
                    case 13:
                        addProperty("mania", 3);
                        break;
                    case 14:
                        addProperty("mania", 3);
                        break;
                    case 15:
                        addProperty("mania", 3);
                        break;
                    case 16:
                        addProperty("agape", 3);
                        break;
                    case 17:
                        addProperty("agape", 3);
                        break;
                    case 18:
                        addProperty("agape", 3);
                        break;
                    case 19:
                        addProperty("ludus", 2); // 루두스랑 조정할 것
                        break;
                    case 20:
                        addProperty("ludus", 3);
                        break;
                    case 21:
                        addProperty("ludus", 3);
                        break;
                    case 22:
                        addProperty("luldus", 3);
                        break;
                    default:
                        break;
                }
                break;
            case "btn_5":
                switch (questionNum) {
                    case 1:
                        setIsMan(true);
                        break;
                    case 2:
                        addProperty("eros", 4);
                        break;
                    case 3:
                        addProperty("eros", 4);
                        break;
                    case 4:
                        addProperty("eros", 4);
                        break;
                    case 5:
                        addProperty("eros", 4); // 수정할 것 - 에로스랑 수치 조정 필요
                        break;
                    case 6:
                        addProperty("fragma", 4);
                        break;
                    case 7:
                        addProperty("fragma", 4);
                        break;
                    case 8:
                        addProperty("fragma", 4);
                        break;
                    case 9:
                        addProperty("storge", 4);
                        break;
                    case 10:
                        addProperty("storge", 4);
                        break;
                    case 11:
                        addProperty("storge", 4);
                        break;
                    case 12:
                        addProperty("storge", 4);// 스토르게, 매니아 조정할 것
                        break;
                    case 13:
                        addProperty("mania", 4);
                        break;
                    case 14:
                        addProperty("mania", 4);
                        break;
                    case 15:
                        addProperty("mania", 4);
                        break;
                    case 16:
                        addProperty("agape", 4);
                        break;
                    case 17:
                        addProperty("agape", 4);
                        break;
                    case 18:
                        addProperty("agape", 4);
                        break;
                    case 19:
                        addProperty("ludus", 4); // 루두스랑 조정할 것
                        break;
                    case 20:
                        addProperty("ludus", 4);
                        break;
                    case 21:
                        addProperty("ludus", 4);
                        break;
                    case 22:
                        addProperty("luldus", 4);
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
        if (questionNum === 22) {
            navigate('/result/', {
                state: {
                    isMan, category
                }
            })
        }
    }
        , [category, isMan, navigate, questionNum]);
    // ,[category]);

    const nextQuestion = (e) => {
        const btnNum = e.target.className.slice(0, 5);
        buttonTrigger(btnNum);

        if (questionNum !== 22) {
            setQuestionNum(questionNum + 1);
        }
    };

    return (
        <div>
            <ProgressBar questionNum={questionNum} />
            <h3>{question}</h3>
            <div className='buttonCase'>
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