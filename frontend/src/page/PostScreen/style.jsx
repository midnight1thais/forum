import styled from 'styled-components';

// export const DivPost = styled.div`
//     display: flex;
// `


export const MainPostContainer = styled.div`
    width: 100vw;
    height: 92vh;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

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
    gap: 5vh;
`

