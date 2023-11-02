import styled from "styled-components" ;

export const MainLogin = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 100vh;
    grid-template-areas: "DivForm DivImagemHello";
    font-family: 'Josefin Sans', sans-serif;
`

export const Form01 = styled.form`
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`
export const DivImagemHello = styled.div`
    grid-area: "DivImagemHello";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`

export const LabelPassword = styled.label`
    margin-top: 3vh;
    color: #00166A;
`

export const LabelContainer = styled.label`
    color: #00166A;
`

export const DivForm = styled.div`
    grid-area: "DivForm";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivContentForm = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SubTitleContainer = styled.p`
    margin-bottom: 9vh;
    line-height: 5vh;
`

export const TitleContainer = styled.h1`
    color: #00166A;
`

export const ImgHello = styled.img`
    width: 50vw;
    height: 100vh;
`

export const ButtonLogin = styled.button`
    color: white;
    font-size: large;

    background-color: #00166A;
    border: none;
    border-radius: 8px;

    width: 40vw;
    height: 8vh;
    margin-top: 5vh;
    cursor: pointer;
`

export const DivDontHaveAccount = styled.div `
    margin-top: 2vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
`

export const ButtonCreateAccount = styled.button`
    background: none;
    border: none;

    color: #00166A;
    font-weight: bolder;
`


export const InputContainer = styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 7vh;
    width: 40vw;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`