import styled from "styled-components" ;

export const MainChange = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    background-color: transparent;

    /* background-color: red; */

    height: 59vh;
    width: 25vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ChangeTitleContainer = styled.h1`
    font-size: large;
    
    padding-bottom: 6vh;
`
export const DivChangeTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    height: 5vh;
    font-size: large;
`
export const DivForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    height: 38vh;
    width: 22vw;
    padding-top: 2vh;

    /* background-color: yellow; */
`
export const TitleForm = styled.label`
    font-family: 'Josefin Sans', sans-serif;
    font-size: small;
    color: #00166a;

    display: flex;
    flex-direction: column;
    justify-content: left;

    padding-top: 3vh;
    padding-bottom: 1vh;

`
export const FormContainer = styled.input`
    width: 22vw;
    height: 7vh;
    border-radius: 6px;
    border: 1px #00166a solid;
    outline: none;

    padding-top: 2vh;
    padding-bottom: 3vh;
`

export const DivButtons = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;

    gap: 2vw;
    height: 10vh;
    padding-top: 4vh;

    /* background-color: aqua; */
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