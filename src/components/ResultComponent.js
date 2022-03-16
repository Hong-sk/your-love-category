import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Opposition from './Opposition';
import Story from './Story';
import Features from './Features';
import KaKao from './kakao';

const ResultComponent = ({ result }) => {
    const [character, setCharacter] = useState('');
    const [image, setImage] = useState();
    const answer = result;

    useEffect(() => {
        switch (result) {
            case "Meros":
                import('../resources/Meros.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("도깨비 김신(공유)");
                    })
                    .catch();
                break;
            case "Mstorge":
                import('../resources/Mstorge.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("응답하라 쓰레기(정우)");
                    })
                    .catch();
                break;
            case "Mludus":
                import('../resources/Mludus.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("참을 수 없는 존재의 가벼움 토마시");
                    })
                    .catch();
                break;
            case "Magape":
                import('../resources/Magape.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("킬미힐미 오리온(박서준)");
                    })
                    .catch();
                break;
            case "Mmania":
                import('../resources/Mmania.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("탐나는 인재 5기 손상훈님");
                    })
                    .catch();
                break;
            case "Mfragma":
                import('../resources/Mfragma.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("펜트하우스 하윤철(윤종훈)");
                    })
                    .catch();
                break;
            case "Weros":
                import('../resources/Weros.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("유미의 세포들 김유미");
                    })
                    .catch();
                break;
            case "Wmania":
                import('../resources/Wmania.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("짧은 대본 이나(윤상정)");
                    })
                    .catch();
                break;
            case "Wagape":
                import('../resources/Wagape.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("아낌없이 주는 나무");
                    })
                    .catch();
                break;
            case "Wstorge":
                import('../resources/Wstorge.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("해리포터 헤르미온느");
                    })
                    .catch();
                break;
            case "Wfragma":
                import('../resources/Wfragma.png')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("가담항설 백매");
                    })
                    .catch();
                break;
            case "Wludus":
                import('../resources/Wludus.jpg')
                    .then((obj) => {
                        setImage(obj.default);
                        setCharacter("나를 미치게 하는 여자 에이미(아미 슈머)");
                    })
                    .catch();
                break;
            default:
                break;
        }
    })

    return (
        <div>
            <div className='result-container'>
                <h1>당신의 연애 캐릭터는</h1>
                <img alt="result-img" src={image} />
                <p className='result-category'>{character}입니다. <br /> </p>
                <Story result={answer} />
                <Features result={answer} />
                <Opposition result={answer} />
                <div style={{ display: 'flex' }}>
                    <p>
                        <Link to={'..'} style={{ marginTop: '0', marginRight: '20px' }}>
                            테스트 다시 하기
                        </Link>
                    </p>
                    <KaKao result={answer} />
                </div>
            </div>
        </div >
    )
}

export default ResultComponent;