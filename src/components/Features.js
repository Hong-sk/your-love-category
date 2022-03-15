import React, { useEffect, useState } from 'react';

const Features = (result) => {
    const yourCategory = result.result;
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');

    useEffect(() => {
        switch (yourCategory) {
            case "Meros" || "Weros":
                setText1('열정적이고 정열적인 사랑을 추구하는 당신은 운명적인 사랑을 꿈꿉니다.')
                setText2('사랑은 최고의 가치이며 사랑하는 사람에게 몰입하고 뜨겁게 사랑합니다.')
                setText3('첫눈에 반하기도 하며, 상대방의 외모를 보는 경향이 있습니다.')
                setText4('이상형이 비교적 구체적이고 뚜렷하기도 하네요.')
                break;
            case "Mmania" || "Wmania":
                setText1('상대방을 사랑하는 만큼 그 사랑이 돌아오길 바래요.')
                setText2('질투심과 불안함이 비교적 강한 편이라 상대방이 무얼 하고 있는지 궁금해하고 걱정해해요.')
                setText3('애인에게 많이 기대고 의지하는 편입니다. ')
                setText4('상대방에게 애정표현과 관심을 받는 것을 좋아해요.')
                break;
            case "Mstorge" || "Wstorge":
                setText1('상대방에 대한 신뢰와 믿음을 중요시해 원래 알던 사이에서 연인 관계로 발전하는 경우가 많아요.')
                setText2('뜻이 맞고 재미있는 일을 함께하며 일상을 공유할 수 있는 연애를 선호해요.')
                setText3('설레는 연애보단 친구같은 편안한 연애를 좋아해요.')
                setText4('뜨겁지는 않지만 차분하고 느긋하게 연애가 지속되는 경우가 대부분이에요..')
                break;
            case "Mframga" || "Wframga":
                setText1('사랑을 할 때 그 사람이 나한테 잘 맞을지, 도움이 될 지를 생각하기 때문에 함부로 연애하지 않아요. ')
                setText2('서로를 책임질 수 있고 긍정적인 영향을 주고받을 수 있는, 현실적으로 든든한 연애를 추구하는 편이에요.')
                setText3('상대방에 대한 충분한 정보를 바탕으로 연애를 하기 때문에 눈이 높다는 소리를 듣기도 합니다.')
                setText4('')
                break;
            case "Magape" || "Wagape":
                setText1('나로 인해 애인이 행복해하면 그만큼 좋은 일이 있을 수가 없는 유형이에요.')
                setText2('서로 간에 힘든 일이 있어도 해결할 수 있는 일이라면 기꺼이 본인이 희생하고 양보하는 편이에요')
                setText3('뜨겁게 사랑하기보다는 묵묵히 그 사람에게 헌신하는 이미지가 강해요.')
                setText4('사랑은 노력하는 것과 같고, 상대방을 사랑하려는 의지가 강해요.')
                break;
            case "Mludus" || "Wludus":
                setText1('연인과 아무리 사랑해도 일정한 거리를 두는 편이에요.')
                setText2('동시에 여러 사람을 사랑하는 것도 가능하다고 생각해요.')
                setText3('이상형이 확고하지 않고 두루두루 좋아하는 편이에요.')
                setText4('밀당을 잘한다는 얘기를 듣기도 해요.')
                break;
            default:
                break;
        }
    }, [yourCategory])

    return (
        <div>
            <h2>당신의 연애 스타일은?</h2>
            <h3> {text1}</h3>
            <h3> {text2}</h3>
            <h3> {text3}</h3>
            <h3> {text4}</h3>
        </div>
    );
};

export default Features;