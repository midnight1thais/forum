import { styled } from "styled-components";


export const CardContainer = styled.div`
    width: 70vw;
    height: 30vh;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    display: grid;
    grid-template-columns: 20vw 30vw;
    grid-template-rows: 30vh;
    grid-template-areas:"ImgCard"
                        "ContentCard";
    font-family: 'Josefin Sans', sans-serif;
`

export const ImgCard = styled.img`
    grid-area: "ImgCard";
    height: 30vh;
`

export const ContentCard = styled.div`
    grid-area: "ContentCard";
    display: grid;
    grid-template-columns: 57vw;
    grid-template-rows: 9vh 15vh 6vh;
    grid-template-areas:"HeaderContent"
                        "Content"
                        "FooterContent";
    margin-left: -7.27vw;

    border-radius: 10px;
`

export const HeaderContent =  styled.div`
    grid-area: "HeaderContent";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    padding-left: 1.5vw;
    gap: 1vw;
`

export const Content = styled.div`
    grid-area: "Content";
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3vw;
    padding-right: 2vw;

`

export const FooterContent = styled.div`
    grid-area: "FooterContent";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;

    padding-right: 1.5vw;
`

export const NameUserHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5vh;

    height: 8vh;
`

export const ImageUserHeader = styled.img`
    width: 3vw;
`

export const ButtonContainer = styled.button`
    background: none;
    border: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4vw;

    color: #00166A;
    font-weight: bold;
    font-size: x-small;
`

export const ButtonContainer2 = styled(ButtonContainer)`
    flex-direction: column;
    align-items: center;
`

export const BlueTextCard = styled.p`
    color: #00166A;
    font-weight: bold;
    font-size: x-small;
`

export const UserTextCard = styled.p`
    font-weight: bold;
    font-size: smaller;
`

export const MenssageImg = styled.img`
    width: 1.5vw;
`