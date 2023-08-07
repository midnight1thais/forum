import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 8vh;

`

export const LinkA = styled.a`

`

export const ImgLupa = styled.img`

`

export const ImgProfile = styled.img`
    margin-top: 0.5vh;
    width: 8vw;
    height: 7vh;
    margin-left: 5vw;

`

export const ImgLogo = styled.img`
    margin-top: 0.5vh;
    width: 8vw;
    height: 6vh;
    margin-right: 10vw;

`

export const Input = styled.input`
    border: transparent;
    border-style:none;
    outline:none;
    background-color: transparent;
    ::placeholder{
        color: #BBB;
        font-family:sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px; /* Espaçamento entre a imagem e o input */
`;