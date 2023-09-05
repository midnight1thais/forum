import PostHeader from "../../components/PostHeader/PostHeader";
import PostOpened from "../../components/PostOpened/PostOpened";
import Menu from "../../components/PostsMenu/PostsMenu";
import { PostsContainerScreen } from "../PostScreen/style";
import { MainPostOpenedScreen, MenuOpenedScreen } from "./style";


function PostOpenedScreen() {
    return(
        <>
            <PostHeader/>
            <MainPostOpenedScreen>
                <MenuOpenedScreen>
                    <Menu />
                </MenuOpenedScreen>

                <PostsContainerScreen>
                    <PostOpened />
                </PostsContainerScreen>
            </MainPostOpenedScreen>
        </>
    )
}

export default PostOpenedScreen