import styled from "styled-components" ;

export const MainAdd = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    background-color: transparent;
    background-color: red;
    height: 35vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TitleContainer = styled.h1`
    font-size: large;
`
export const DivTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    height: 5vh;
`
export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    height: 25vh;

    /* background-color: yellow; */
`
export const TitleForm = styled.label`
    font-family: 'Josefin Sans', sans-serif;
    font-size: small;
    color: #00166a;
`
export const FormContainer = styled.input`
    width: 20vw;
    height: 6vh;
    border-radius: 9px;
    border: 1px #00166a solid;
    outline: none;
`

export const DivButtons = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;

    gap: 2vw;
    height: 10vh;
    padding-top: 2vh;
`
export const ButtonCancel = styled.button`
    font-family: 'Josefin Sans', sans-serif;
    font-size: small;
    color:  #00166a;

    background-color: transparent;
    border: #00166a solid 1px;

    border-radius: 17px;
    height: 6vh;
    width: 9vw;
`
export const ButtonSave = styled.button`
    font-family: 'Josefin Sans', sans-serif;
    font-size: small;
    color: white;

    background-color: #00166a;
    border: #00166a solid 1px;

    border-radius: 17px;
    height: 6vh;
    width: 9vw;
`