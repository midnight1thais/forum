import styled from "styled-components" ;

export const MainCreate = styled.div`
    background-color: darkgreen;
    display: grid;
    width: 60vw;
    height: 90vh;
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
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`

export const LabelImagem = styled.label`
    margin-top: 3vh;
    margin-left: 5vw;
    color: #00166A;
`

export const LabelConteudo = styled.label`
    margin-top: 3vh;
    margin-left: 5vw;
    color: #00166A;
`

export const LabelContainer = styled.label`
    color: #00166A;
    margin-left: 5vw;
    background-color: red;
`

export const TitleContainer = styled.h1`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 10vh;
    margin-top: 3vw;
    color: #000414;
`
export const ButtonCancel = styled.input`
    color: white;
    font-size: large;

    background-color: #00166A;
    border: none;
    border-radius: 8px;

    width: 25vw;
    height: 8vh;
    margin-top: 5vh;
    margin-left: 5vw;
`
export const ButtonSave = styled.input`
    color: white;
    font-size: large;

    background-color: #00166A;
    border: none;
    border-radius: 8px;

    width: 25vw;
    height: 8vh;
    margin-top: 5vh;
`

export const InputPost = styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 100vh;
    width: 40vw;
    margin-left: 2vw;
    margin-top: 5vh;
    background-color: red;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const InputPost01 = styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 7vh;
    width: 20vw;
    margin-left: 2vw;
    margin-top: 5vh;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`

export const InputPost02 = styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 7vh;
    width: 20vw;
    margin-left: 2vw;
    margin-top: 5vh;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`