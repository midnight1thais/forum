import styled from "styled-components" ;


export const BackgrondStyle = styled.div`
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    /* width: 10vw; */
    background-color: rgb 0, 0, 0, 0.7;
    z-index: 1000;
`

export const MainCreate = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 150px;
 
    background-color: white;
    flex-direction: row;
    align-items: center;
     width: 60vw;
    /*height: 90vh; */
    grid-template-areas: "DivForm DivForm02";
    font-family: 'Josefin Sans', sans-serif;
`
export const DivForm = styled.div`
    grid-area: "DivForm";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form01 = styled.form`
    width: 60vw;
    height: 80vh;
    background-color: transparent;

    display: grid;
    grid-template-columns: 25vw 35vw;
    grid-template-rows: 15vh 50vh 15vh;
    grid-template-areas:"InputTitle InputTitle"
                        "ContentInput ContentInput"
                        "ButtonsArea ButtonsArea";
    font-family: 'Josefin Sans', sans-serif;
`

export const InputTitle = styled.div`
    grid-area: InputTitle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5vh;
    padding-left: 2vw;
`
export const ContentInput = styled.div`
    grid-area: ContentInput;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5vh;
    padding-left: 2vw;
`
export const ButtonsArea = styled.div`
    grid-area: ButtonsArea;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5vh;
`

export const LabelConteudo = styled.label`
    color: #00166A;
`

export const LabelContainer = styled.label`
    color: #00166A;
`

export const TitleContainer = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60vw;
    height: 10vh;
    padding-left: 3vw;
`
export const ButtonCancel = styled.button`
    color: #00166A;
    font-size: large;

    background: none;
    border: 1.5px #00166A solid;
    border-radius: 100px;

    width: 20vw;
    height: 8vh;
`
export const ButtonSave = styled.button`
    color: white;
    font-size: large;

    background-color: #00166A;
    border: none;
    border-radius: 100px;

    width: 20vw;
    height: 8vh;
`

export const InputPost = styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 8vh;
    width: 55vw;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`


export const InputPost02 = styled.textarea`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 50vh;
    width: 55vw;
    resize: none;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`