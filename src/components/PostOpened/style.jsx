import styled from "styled-components";

export const OpenedPostContainer = styled.div`
    width: 80vw;
`

export const HeaderOpenedPost = styled.div`
    width: 80vw;
    height: 30vh;
    display: grid;
    grid-template-columns: 80vw;
    grid-template-rows: 10vh 15vh 5vh;
    grid-template-areas:"ProfileNameContainer"
                        "TitlePostContainer"
                        "TagsPostContainer";
    font-family: 'Josefin Sans', sans-serif;
`