import PostHeader from "../../components/PostHeader/PostHeader"
import PostOpened from "../../components/PostOpened/PostOpened"
import Menu from "../../components/PostsMenu/PostsMenu"
import { MainPostOpenedScreen, MenuPostOpened, PostContainerOpened } from "./style"

function PostOpenedScreen() {
    return(
        <>
            <PostHeader/>
            <MainPostOpenedScreen>
                <MenuPostOpened>
                    <Menu/>
                </MenuPostOpened>
                <PostContainerOpened>
                    <PostOpened/>
                </PostContainerOpened>

            </MainPostOpenedScreen>
        </>
    )
}

export default PostOpenedScreen