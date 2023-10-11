import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
`

export const EditInput = styled.div`
    display: flex;
    flex-direction: row;

`

export const Label = styled.label`
    display: flex;
    flex-direction: column; 

    color: #00166A;
    font-family: 'Josefin Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Input = styled.input`
    width: 25vw;
    height: 3vh;

    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #a29d9dfd;
    background-color: transparent;
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

export const ImgUser = styled.img`
    width: 2vw;
    height: 2vh;
    align-self: flex-end;
    margin-bottom: -2.2vh;
`

export const ContainerTopics = styled.div`
    background-color: transparent;
    margin-left: 3vw;
    
`

export const BorderTopics = styled.div`
    width: 20vw;
    height: 25vh;
    border-style: solid; 
    border-color:  blue; 
    border-radius: 20px;
`

export const TitleTopics = styled.p`
    color: #00166A;
    font-family: 'Josefin Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`