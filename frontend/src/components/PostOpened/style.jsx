import styled from "styled-components";
import { ButtonContainer } from "../PostsCard/style";

export const OpenedPostContainer = styled.div`
    width: 75vw;
    font-family: 'Josefin Sans', sans-serif;

`

export const HeaderOpenedPost = styled.div`
    grid-area: HeaderOpenedPost;
    width: 75vw;
    height: 27vh;
    display: grid;
    grid-template-columns: 75vw;
    grid-template-rows: 10vh 12vh 5vh;
    grid-template-areas:"ProfileNameContainer"
                        "TitlePostContainer"
                        "TagsPostContainer";
`

export const ProfileNameContainer = styled.div`
    grid-area: ProfileNameContainer;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1vw;
`
export const ImgProfilePost = styled.img`
    width: 3vw;
`
export const TitlePostContainer = styled.div`
    grid-area: TitlePostContainer;
    display: flex;
    flex-direction: row;
    align-items: center;

`
export const TagsPostContainer = styled.div`
    grid-area: TagsPostContainer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5vw;
    background-color: transparent;
`

export const ContentOpenedPost = styled.div`
    border-bottom: 1px lightgray solid;
    padding-right: 1.5vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
`

export const CommentsOpenedPost = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
`

export const HeaderComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;

    height: 8vh;
    padding-right: 3vw;
`

export const ButtonAddComment = styled(ButtonContainer)`
    
`

export const FormComment = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputComment =  styled.input`
    background: none;
    border: 1px #00166A solid;
    border-radius: 8px;
    height: 5vh;
    width: 55vw;

    &:focus {
        outline: 0;
        padding-left: 0.5vw;
    }
    &::placeholder{
        margin-left: 5vw;
    }
    
`

export const ButtonComment = styled.button`
    color: #00166A;
    font-size: small;

    margin-left: 2vw;
    background: none;
    border: 1.5px #00166A solid;
    border-radius: 100px;

    width: 9vw;
    height: 4vh;

    &:hover{
        background-color: #c1caed;
    }
`