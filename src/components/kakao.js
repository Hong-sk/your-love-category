// import React from 'react';

// const { Kakao } = window;

// function KaKao({ result }) {
//     let replaced_sub = _sub.replace('<br/>', ' ');
//     let replaced_imageUrl = '';
//     replaced_imageUrl = 'https://lovestyle.netlify.app/' + _imageUrl.replace('../', '');

//     const onHandleShareKaKao = () => {

//         Kakao.Link.sendDefault({
//             objectType: 'feed',
//             content: {
//                 title: replaced_sub + ', \'' + _title + '\'',
//                 description: '당신의 연애 캐릭터는?\n나는 어떤 연애를 하고 있을까?',
//                 imageUrl: '../resource/'
//                 link: {
//                     webUrl: 'https://lovestyle.netlify.app/',
//                     mobileWebUrl: 'https://lovestyle.netlify.app/',
//                 }
//             },
//             buttons: [
//                 {
//                     title: '결과 보기',
//                     link: {
//                         webUrl: 'https://lovestyle.netlify.app//result/' + _finalType,
//                         mobileWebUrl: 'https://lovestyle.netlify.app//result/' + _finalType,
//                     }
//                 },
//                 {
//                     title: '테스트하기',
//                     link: {
//                         webUrl: 'https://lovestyle.netlify.app/',
//                         mobileWebUrl: 'https://lovestyle.netlify.app/',
//                     }
//                 }
//             ]
//         });
//     };

//     return (
//         <ShareBtn value="KaKao" onClick={onHandleShareKaKao} >
//             <Img src={kakao} />
//         </ShareBtn>
//     );
// }

// export default KaKao;