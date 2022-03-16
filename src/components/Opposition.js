import React, { useState, useEffect } from 'react';

const Opposition = (result) => {
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');
    const yourCategory = result.result;

    useEffect(() => {
        switch (yourCategory) {
            case "Meros":
                setCategory("가담항설 백매")
                setText("뜨겁게 사랑하는 당신! 사랑을 자신에게 도움이 되는지를 생각하고 판단하는 가담항설의 백매가 당신에게는 계산적이고 이해타산적으로 보일 수도 있어요. ")
                break;
            case "Weros":
                setCategory("펜트하우스 하윤철")
                setText("뜨겁게 사랑하는 당신! 사랑을 자신에게 도움이 되는지를 생각하고 판단하는 펜트하우스의 하윤철이 당신에게는 계산적이고 이해타산적으로 보일 수도 있어요. ")
                break;
            case "Magape":
                setCategory("나를 미치게 하는 여자 에이미(아미 슈머)")
                setText("사랑을 할 때 헌신하고 희생하는 당신! 사랑할 때 재미를 추구하고 사적인 선을 넘지 않기를 바라며 여러 명을 동시에 좋아할 수도 있는 루두스 유형은 기피대상이에요!")
                break;
            case "Wagape":
                setCategory("참을 수 없는 존재의 가벼움 토마시")
                setText("사랑을 할 때 헌신하고 희생하는 당신! 사랑할 때 재미를 추구하고 사적인 선을 넘지 않기를 바라며 여러 명을 동시에 좋아할 수도 있는 루두스 유형은 기피대상이에요!")
                break;
            case "Mludus":
                setCategory("아낌없이 주는 나무")
                setText("여러 사람과 동시에 사랑할 수도 있다고 생각하는 당신! 한 사람에게 올인하며 헌신하는 아가페 유형이랑 만난다면 상처만 가득한 연애를 줄 수도 있을 거에요.")
                break;
            case "Wludus":
                setCategory("킬미힐미 오리온(박서준)")
                setText("여러 사람과 동시에 사랑할 수도 있다고 생각하는 당신! 한 사람에게 올인하며 헌신하는 아가페 유형이랑 만난다면 상처만 가득한 연애를 줄 수도 있을 거에요.")
                break;
            case "Mfragma":
                setCategory("유미의 세포들 김유미")
                setText("사랑을 할 때 현실적으로 고민하고 판단하는 당신! 사랑할 때 화끈하고 열정적으로 불타오르고, 사랑을 최고의 가치로 생각하는 에로스랑은 연애 스타일이 안 맞을 수 있어요.")
                break;
            case "Wfragma":
                setCategory("도깨비 김신(공유)")
                setText("사랑을 할 때 현실적으로 고민하고 판단하는 당신! 사랑할 때 화끈하고 열정적으로 불타오르고, 사랑을 최고의 가치로 생각하는 에로스랑은 연애 스타일이 안 맞을 수 있어요.")
                break;
            case "Mmania":
                setCategory("해리포터 헤르미온느(엠마 왓슨)")
                setText("여자친구(혹은 남자친구)를 소유하고픈 당신! 서로 간 보이지 않는 신뢰를 전제하고 편한 스타일의 연애를 추구하는 스토르게랑은 궁합이 안 좋을 수 있어요!")
                break;
            case "Wmania":
                setCategory("응답하라 1994 쓰레기(정우)")
                setText("여자친구(혹은 남자친구)를 소유하고픈 당신! 서로 간 보이지 않는 신뢰를 전제하고 편한 스타일의 연애를 추구하는 스토르게랑은 궁합이 안 좋을 수 있어요!")
                break;
            case "Mstorge":
                setCategory('짧은 대본 이나(윤상정)');
                setText('편안하고 차분한 연애를 선호하는 당신! 상대방을 소유하고 싶고, 질투를 많이 하는 유형인 매니아가 당신에게는 지치고 벅찰 수 있어요.');
                break;
            case "Wstorge":
                setCategory('탐나는 인재 5기 손상훈');
                setText('편안하고 차분한 연애를 선호하는 당신! 상대방을 소유하고 싶고, 질투를 많이 하는 유형인 매니아가 당신에게는 지치고 벅찰 수 있어요.');
                break;
            default:
                break;
        }
    }, [yourCategory]);


    return (
        <div className='opposition'>
            <h2>기피대상 연애캐릭터</h2>
            <p> {category} </p>
            <p> {text} </p>
        </div>
    );
};

export default Opposition;