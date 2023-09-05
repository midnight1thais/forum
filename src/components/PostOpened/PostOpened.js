import { CommentsOpenedPost, ContentOpenedPost, HeaderOpenedPost, ImgProfilePost, OpenedPostContainer, ProfileNameContainer, TagsPostContainer, TitlePostContainer } from "./style"

import profileTest from "../../assets/profile.svg"

import {
    Tag
  } from '@chakra-ui/react'
import Comments from "../Comments/Comments"

function PostOpened() {
    return(
        <OpenedPostContainer>
            <HeaderOpenedPost>
                <ProfileNameContainer>
                    <ImgProfilePost src={profileTest} alt="Imagem de exemplo do perfil"/>
                    <p>Carlinhos Meneguel</p>
                </ProfileNameContainer>
                <TitlePostContainer>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem  Odio alias distinctio dolorem  Odio alias distinctio dolorem  Odio alias distinctio dolorem aaaaaa</h2>
                </TitlePostContainer>
                <TagsPostContainer>
                    <Tag
                    bg={"#EEF2FE"}
                    padding={6}
                    borderRadius={20}>Sample Tag</Tag>
                </TagsPostContainer>
            </HeaderOpenedPost>
            <ContentOpenedPost>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias distinctio dolorem 
                </p>
            </ContentOpenedPost>
            <CommentsOpenedPost>
                <div>
                    <div>
                        <h3>Comentários</h3>
                    </div>
                    <div>
                        <button>a</button>
                    </div>
                </div>
                <div>
                    <Comments/>
                </div>
            </CommentsOpenedPost>
        </OpenedPostContainer>
    )
}

export default PostOpened