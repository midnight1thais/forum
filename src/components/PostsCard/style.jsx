import { styled } from "styled-components";


export const CardContainer = styled.div`
    width: 55vw;
    height: 30vh;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: grid;
    grid-template-columns: 20vw 30vw;
    grid-template-rows: 30vh;
    grid-template-areas:"ImgCard"
                        "ContentCard";
`

export const ImgCard = styled.img`
    height: 30vh;
`

export const ContentCard = styled.div`
    display: grid;
    grid-template-columns: 42.4vw;
    grid-template-rows: 9vh 15vh 6vh;
    grid-template-areas:"HeaderContent"
                        "Content"
                        "FooterContent";
    margin-left: -7.27vw;

    border-radius: 10px;
`

export const HeaderContent =  styled.div`
    background-color: black;
`

export const Content = styled.div`
    background-color: blueviolet;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3vw;
`

export const FooterContent = styled.div`
    background-color: beige;
`