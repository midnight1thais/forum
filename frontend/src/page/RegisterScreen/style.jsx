import styled from "styled-components" ;

export const MainRegister = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 100vh;
    grid-template-areas: "DivForm DivImagemHello";
    font-family: 'Josefin Sans', sans-serif;
`

export const Form02 = styled.form`
    width: 40vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`
export const DivImagemRegister = styled.div`
    grid-area: "DivImagemHello";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`

export const LabelContainerRegister = styled.label`
    color: #00166A;
`

export const DivFormRegister = styled.div`
    grid-area: "DivForm";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivContentFormRegister = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleRegister = styled.h1`
    color: #00166A;
    margin-bottom: 2vh;
`

export const ImgRegister = styled.img`
    width: 50vw;
    height: 100vh;
`

export const ButtonRegister = styled.input`
    color: white;
    font-size: large;

    background-color: #00166A;
    border: none;
    border-radius: 8px;

    width: 40vw;
    height: 7vh;
    margin-top: 3vh;
`

export const InputRegisterContainer = styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 6vh;
    width: 40vw;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
`