import React from 'react';

const { Kakao } = window;

function KaKao(result) {
    const yourCategory = result.result;
    let staticImageURL
    switch (yourCategory) {
        case "Meros":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Meros.952cbcde9f9678c94c60.jpg'
            break;
        case "Weros":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Weros.e946efeabdaee4c93fe7.jpg'
            break;
        case "Mludus":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Mludus.7b3b29c1f7e3a92d365a.jpg'
            break;
        case "Magape":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Magape.6142096b6b1117ba5706.jpg'
            break;
        case "Wagape":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Wagape.c5f54da6f9b5e6788144.jpg'
            break;
        case "Mfragma":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Mfragma.17a4cbe8778b02afac0f.jpg'
            break;
        case "Wfragma":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Wfragma.b3ec9965e143e6485310.png'
            break;
        case "Mstorge":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Mstorge.42d8c9406758255a549b.jpg'
            break;
        case "Wstorge":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Wstorge.7755795bfe5325fa5e09.jpg'
            break;
        case "Mmania":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Mmania.01132e5166c092388800.jpg'
            break;
        case "Wmania":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Wmania.e0535f2ef5566462d7d7.jpg'
            break;
        case "Wludus":
            staticImageURL = 'https://lovestyle.netlify.app/static/media/Wludus.76de138acb0759ec1cb1.jpg'
            break;
        default:
            break;
    }

    const onHandleShareKaKao = () => {

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: yourCategory,
                description: '당신의 연애 캐릭터는?\n나는 어떤 연애를 하고 있을까?',
                imageUrl: staticImageURL,
                link: {
                    webUrl: 'https://lovestyle.netlify.app/',
                    mobileWebUrl: 'https://lovestyle.netlify.app/',
                }
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        webUrl: 'https://lovestyle.netlify.app//result/',
                        mobileWebUrl: 'https://lovestyle.netlify.app//result/'
                    }
                },
                {
                    title: '테스트하기',
                    link: {
                        webUrl: 'https://lovestyle.netlify.app/',
                        mobileWebUrl: 'https://lovestyle.netlify.app/',
                    }
                }
            ]
        });
    };

    return (
        <div onClick={onHandleShareKaKao} >
            카톡으로 공유하기
        </div>
    );
}

export default KaKao;