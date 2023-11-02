import styled from 'styled-components';
 
 
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
    gap: 5vh;
`
 
export const ButtonCreatePost = styled.button`
    border: none;
    background-color: transparent;
 
    display: flex;
    justify-content: flex-end;
    /* padding-left: 95vw; */
`
export const ImageCreate = styled.img`
    width: 10vw;
    height: 10vh;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7); /* Cor escura com transparência */
    z-index: 1000; /* Certifique-se de que a sobreposição esteja acima de outros elementos */
    display: ${(props) => (props.show ? 'block' : 'none')};
`

export const FooterPostScreen = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`