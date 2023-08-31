import styled from "styled-components";

export const OpenedPostContainer = styled.div`
    width: 80vw;
    font-family: 'Josefin Sans', sans-serif;

`

export const HeaderOpenedPost = styled.div`
    grid-area: HeaderOpenedPost;
    width: 80vw;
    height: 27vh;
    display: grid;
    grid-template-columns: 80vw;
    grid-template-rows: 10vh 12vh 5vh;
    grid-template-areas:"ProfileNameContainer"
                        "TitlePostContainer"
                        "TagsPostContainer";
    background-color: aqua;
`

export const ProfileNameContainer = styled.div`
    grid-area: ProfileNameContainer;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1vw;
    padding-left: 1.5vw;
`
export const ImgProfilePost = styled.img`
    width: 3vw;
`
export const TitlePostContainer = styled.div`
    grid-area: TitlePostContainer;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 1.5vw;
    background-color: red;
`
export const TagsPostContainer = styled.div`
    grid-area: TagsPostContainer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5vw;
    padding-left: 1.5vw;
    background-color: transparent;
`

export const ContentOpenedPost = styled.div`
    border-bottom: 1px lightgray solid;
    padding: 1vw;
`

export const CommentsOpenedPost = styled.div`
    background-color: yellow;
`
