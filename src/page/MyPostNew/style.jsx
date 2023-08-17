import styled from 'styled-components';

// export const DivPost = styled.div`
//     display: flex;
// `


export const MainPostContainer = styled.div`
    width: 100vw;
    height: 92vh;

    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: 80vh;
    grid-template-areas:"Menu Posts";
`

export const MenuContainerScreen = styled.div`
    grid-area: "Menu";
    padding-top: 50vh;
`

export const PostsContainerScreen = styled.div`
    grid-area: "Posts";
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgProfile = styled.img`
    margin-top: 3vh;
    width: 8vw
    height: 9vh;
    margin-right: 65vw;

`

export const Button = styled.div`
    margin-top: 15vh;
    width: 18vw;
    height: 17vh;
    margin-left: 75vw;

`

export const Titulo = styled.h1`
    margin-top: 20vh;
    margin-right: 55px;
    font-size: 40px;
    font-family: josefin sans;

    
    
`
export const Titulo2 = styled.h1`
    margin-top: -5vh;
    margin-right: 85px;
    font-size: 80px;
    font-family: josefin sans;
`