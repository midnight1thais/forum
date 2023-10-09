import styled from "styled-components" ;

export const MainDelete = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    background-color: transparent;
    background-color: red;
    height: 30vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const QuestionContainer = styled.h1`
    font-size: large;
`
export const DivQuestion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 5vh;
`

export const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 12vh;
`

export const ImageTrash = styled.img`
    height: 8vh;
    width: 12vw;
`

export const DivButtons = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;

    gap: 2vw;
    height: 10vh;
`


export const ButtonNo = styled.button`
    font-family: 'Josefin Sans', sans-serif;
    color:  #00166a;

    background-color: transparent;
    border: #00166a solid 1px;

    border-radius: 15px;
    height: 5vh;
    width: 8vw;
`
export const ButtonYes = styled.button`
    font-family: 'Josefin Sans', sans-serif;
    color: white;

    background-color: #00166a;
    border: #00166a solid 1px;

    border-radius: 15px;
    height: 5vh;
    width: 8vw;
`