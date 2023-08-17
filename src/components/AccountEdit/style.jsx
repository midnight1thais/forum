import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;

    color: #00166A;
    font-family: 'Josefin Sans';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Input = styled.input`
    width: 30vw;
    height: 3vh;

    background-color: transparent;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-color: #919191;
    outline: none;

    &::placeholder{
        color: #000000;
        font-family: 'Josefin Sans';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
export const ImgIcon = styled.img`
    width: 5vw;
    height: 5vh;
`