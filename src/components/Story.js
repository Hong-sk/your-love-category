import React, { useState, useEffect } from 'react';

const Story = (result) => {
    const [script, setScript] = useState('');
    const [explanation, setExplanation] = useState('');
    const yourCategory = result.result;

    useEffect(() => {
        switch (yourCategory) {
            case "Meros":
                setScript("“너와 함께 한 시간 모두 눈부셨다. 날이 좋아서. 날이 좋지 않아서. 날이 적당해서.모든 날이 좋았다. 그리고 무슨 일이 벌어져도, 니 잘못이 아니다.”")
                setExplanation("자신에게 죽음을 줄 수 있는 도깨비 신부와 운명적인 사랑을 하며, 오직 사랑을 위한 일념만으로 이승과 저승의 경계에서 9년이란 세월을 헤맨 당신은 김신(공유)입니다.")
                break;
            case "Weros":
                setScript("“얘들아. 진심이 지금처럼 필요할 때는 없어. 진심을 안 보이고 어떻게 사랑을 얻니?”")
                setExplanation("사람 안에는 각각 그 행동과 성격을 책임지는 세포들이 있습니다. 유미의 안에도 다양한 세포들이 있고 그 중에서도 사랑세포는 유미의 프라임세포입니다. 운명적인 만남을 생각하고, 사랑에 솔직하며 적극적으로 표현하는 당신은 김유미입니다.")
                break;
            case "Magape":
                setScript("“한번에 접히면 땡큐고, 한번더 펼쳐보면 미련이고. 두번 펼쳐보면 슬픔이고, 세번 펼쳐보면 아픔이고. 그렇게 자꾸 자꾸 펼쳐보다 너덜너덜해지면 그렇게 마음이 찢어지는 거고, 찢어지면 또 무뎌질 때까지 견디는 거고, 그런거지 뭐.”")
                setExplanation("배다른 남매인 오리진을 짝사랑하고 있습니다. 그녀를 위해 뒤에서 묵묵하게 곁을 지켜주는, 당신은 오리온입니다. ")
                break;
            case "Wagape":
                setScript("“그래도 나무는 행복했습니다.”")
                setExplanation("돌아오는 것을 기대하지 않고 베푸는 행위 자체에서 행복함을 느끼는, 당신은 아낌없이 주는 나무입니다.")
                break;
            case "Mludus":
                setScript("그(토마시)는 에로틱한 우정이 공격적인 사랑으로 변하지 않도록 하기 위해 그는 고정 애인 하나하나를 긴 간격을 두고 만났다.")
                setExplanation("여자와 잠은 자지만 잠은 자지 않는 토마시. 가벼운 사랑을 추구하는 당신은 토마시입니다.")
                break;
            case "Wludus":
                setScript("“응, 난 다른 남자랑도 놀아. 왜 이 일로 날 우울하게 만들어. 자기도 다른 여자랑 놀아.”")
                setExplanation("어릴 적 아빠한테 들은 엄마와의 이혼사유는 일부일처제. 예쁜 인형은 많은데 한 인형만 가지고 놀 것이냐고 얘기를 들었고 그 후 에이미는 여러 남자와 자유로운 연애를 추구하는 어른으로 자랐습니다. 재미를 가장 우선으로 추구하고 여러 사람과 가벼운 연애를 즐기는 당신은 에이미입니다.")
                break;
            case "Mfragma":
                setScript("“티 좀 내면 안 되나? 촌놈이 촌티 좀 내보겠다는데? 평생 당신 눈치보며 좋아하지도 않는 시리얼에 빵에 비위 맞춰준 거야.”")
                setExplanation("작중에서 하윤철은 현실과 타협하고 최고가 되는 것을 목표로 하며 달리는 야망남입니다, 사랑을 할 때 현실적인 조건을 고려하고 그 사람이 본인한테 도움이 되는지를 보는 당신은 하윤철입니다.")
                break;
            case "Wfragma":
                setScript("“폐하, 진심도 변합니다. 상황이 진심을 압도합니다. 폐하.”")
                setExplanation("백매는 가난한 집안에서 태어나 온갖 고난과 사회적 차별을 겪으며 자랐고, 나중에는 왕 위에 군림하는 신룡의 총애를 받기도 합니다. 사랑을 할 때 현실적인 조건을 고려하고 만남을 가지는 당신은 백매입니다.")
                break;
            case "Mmania":
                setScript("“안녕하세요. 탐나는 인재 5기 손상훈입니다.”")
                setExplanation("상훈님이랑 같은 연애 스타일을 가지고 있습니다. 자세한 내용은 상훈님 참고 부탁드려요 :)")
                break;
            case "Wmania":
                setScript("“나 사랑해? 안 사랑해?”")
                setExplanation("연애 상대방에게 끊임없이 사랑의 여부를 확인하고, 상대방이 무엇을 하고 있는지, 다른 여자랑 있지는 않는지 불안해하고 그 사람이랑 하루하루를 매일 같이하고픈 당신은 이나(윤상정)입니다.")
                break;
            case "Mstorge":
                setScript('“춥다. 감기 걸린다 가시나... 잘가 응?”');
                setExplanation('개구쟁이같고 장난끼 많은 우리의 쓰레기. 친구처럼 편하고 같이있으면 마음이 편안해지는 연애를 추구하는 당신은 쓰레기(정우)입니다');
                break;
            case "Wstorge":
                setScript("“Shut up, Malfoy.”");
                setExplanation('어렸을 때부터 론과 티격태격하며 자라온 헤르미온느. 그러다 둘이 결혼하지요. 친구같고 편한 연애 스타일을 추구하는 당신은 헤르미온느입니다.');
                break;
            default:
                break;
        }
    }, [yourCategory]);
    return (
        <div className='story'>
            <p>{script}</p>
            <p>{explanation}</p>
        </div>
    );
};

export default Story;