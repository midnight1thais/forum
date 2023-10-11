import { Container, ContentWrapper,} from './style'

import AccountHeader from "../../components/AccountHeader/AccountHeader"
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import EditProfileHeader from '../../components/EditProfileHeader/EditProfileHeader'
import EditMain from '../../components/EditMain/EditMain'
import EditButtons from '../../components/EditButtons/EditButtons'


function AccountEditScreen(){
    return(
        <>
        <AccountHeader/>
        <Container>
            <PostsMenu/>
            <ContentWrapper>
                    <EditProfileHeader/>
                    <EditMain/>
                    <EditButtons/>
            </ContentWrapper>
        </Container>
            </>
    )
}

export default AccountEditScreen