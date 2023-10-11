import styled from "styled-components";

export const ContainerButtons = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 3vh;
    height: 10vh;
    gap: 3vw;
`
export const ButtonCancel = styled.button`
    width: 13vw;
    height: 6vh;
    
    border: 1.5px solid #00166A;
    border-style: solid; 
    border-radius: 40px;
    background: #FFFF;

    color: #00166A;
    font-family: 'Josefin Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ButtonSave = styled.button`
    width: 13vw;
    height: 6vh;
    

    border-style: none;
    border-radius: 40px;
    background: #00166A;

    color: #FFF;
    font-family: 'Josefin Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ButtonDelete = styled.button`
    width: 13vw;
    height: 6vh;

    border-style: none;
    border-radius: 40px;
    background: #EE5050;

    color: #FFF;
    font-family: 'Josefin Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`