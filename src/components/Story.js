import React, { useState, useEffect } from 'react';

const Story = (result) => {
    const [script, setScript] = useState('');
    const [explanation, setExplanation] = useState('');
    const yourCategory = result.result;

    useEffect(() => {
        switch (yourCategory) {
            case "Meros":
                setScript("프라그마")
                setExplanation("뜨겁게 사랑하는 당신! 사랑을 자신에게 도움이 되는지를 생각하고 판단하는 프라그마 형(캐릭터로 바꿀 것)이 당신에게는 계산적이고 이해타산적으로 보일 수도 있어요. ")
                break;
            case "Weros":
                setScript("프라그마")
                setExplanation("뜨겁게 사랑하는 당신! 사랑을 자신에게 도움이 되는지를 생각하고 판단하는 프라그마 형(캐릭터로 바꿀 것)이 당신에게는 계산적이고 이해타산적으로 보일 수도 있어요. ")
                break;
            case "Magape":
                setScript("나를 미치게 하는 여자 에이미(아미 슈머)")
                setExplanation("사랑을 할 때 헌신하고 희생하는 당신! 사랑할 때 재미를 추구하고 사적인 선을 넘지 않기를 바라며 여러 명을 동시에 좋아할 수도 있는 루두스 유형은 기피대상이에요!")
                break;
            case "Wagape":
                setScript("참을 수 없는 존재의 가벼움 토마시")
                setExplanation("사랑을 할 때 헌신하고 희생하는 당신! 사랑할 때 재미를 추구하고 사적인 선을 넘지 않기를 바라며 여러 명을 동시에 좋아할 수도 있는 루두스 유형은 기피대상이에요!")
                break;
            case "Mludus":
                setScript("아낌없이 주는 나무")
                setExplanation("여러 사람과 동시에 사랑할 수도 있다고 생각하는 당신! 한 사람에게 올인하며 헌신하는 아가페 유형이랑 만난다면 상처만 가득한 연애를 줄 수도 있을 거에요.")
                break;
            case "Wludus":
                setScript("킬미힐미 박서준")
                setExplanation("여러 사람과 동시에 사랑할 수도 있다고 생각하는 당신! 한 사람에게 올인하며 헌신하는 아가페 유형이랑 만난다면 상처만 가득한 연애를 줄 수도 있을 거에요.")
                break;
            case "Mfragma":
                setScript("유미의 세포들 김유미")
                setExplanation("사랑을 할 때 현실적으로 고민하고 판단하는 당신! 사랑할 때 화끈하고 열정적으로 불타오르고, 사랑을 최고의 가치로 생각하는 에로스랑은 연애 스타일이 안 맞을 수 있어요.")
                break;
            case "Wfragma":
                setScript("도깨비 김신(공유)")
                setExplanation("사랑을 할 때 현실적으로 고민하고 판단하는 당신! 사랑할 때 화끈하고 열정적으로 불타오르고, 사랑을 최고의 가치로 생각하는 에로스랑은 연애 스타일이 안 맞을 수 있어요.")
                break;
            case "Mmania":
                setScript("해리포터 헤르미온느(엠마 왓슨)")
                setExplanation("여자친구(혹은 남자친구)를 소유하고픈 당신! 서로 간 보이지 않는 신뢰를 전제하고 편한 스타일의 연애를 추구하는 스토르게랑은 궁합이 안 좋을 수 있어요!")
                break;
            case "Wmania":
                setScript("응답하라 1994 쓰레기(정우)")
                setExplanation("여자친구(혹은 남자친구)를 소유하고픈 당신! 서로 간 보이지 않는 신뢰를 전제하고 편한 스타일의 연애를 추구하는 스토르게랑은 궁합이 안 좋을 수 있어요!")
                break;
            case "Mstorge":
                setScript('짧은 대본 이나(윤상정)');
                setExplanation('편안하고 차분한 연애를 선호하는 당신! 상대방을 소유하고 싶고, 질투를 많이 하는 유형인 매니아가 당신에게는 지치고 벅찰 수 있어요.');
                break;
            case "Wstorge":
                setScript('탐나는 인재 5기 손상훈');
                setExplanation('편안하고 차분한 연애를 선호하는 당신! 상대방을 소유하고 싶고, 질투를 많이 하는 유형인 매니아가 당신에게는 지치고 벅찰 수 있어요.');
                break;
            default:
                break;
        }
    }, [yourCategory]);
    return (
        <div>
            <h2>{script}</h2>
            <h3>{explanation}</h3>
        </div>
    );
};

export default Story;