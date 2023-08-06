import PostsCard from "../../components/PostsCard/PostsCard"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import PostHeader from "../../components/PostHeader/PostHeader"
import { MainPostContainer, MenuContainerScreen, PostsContainerScreen } from "./style"


function PostScreen() {
    return(
        <>
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>

                <PostsContainerScreen>
                    <PostsCard />
                    <PostsCard />
                </PostsContainerScreen>
            </MainPostContainer>
            
        </>
    )
}

export default PostScreen