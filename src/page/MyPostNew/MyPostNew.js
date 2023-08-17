
import PostsMenu from "../../components/PostsMenu/PostsMenu"
import PostHeader from "../../components/PostHeader/PostHeader"
import { Titulo, Titulo2, MainPostContainer, MenuContainerScreen, PostsContainerScreen, Button } from "./style.jsx"


import profile from '../../assets/profile.svg'

import { ImgProfile } from './style';

import { IconButton } from '@chakra-ui/react' 
import { AddIcon } from '@chakra-ui/icons'



function MyPostNew() {
    return(
        <>
            <PostHeader/>
            <MainPostContainer>
                <MenuContainerScreen>
                    <PostsMenu />
                </MenuContainerScreen>

                <PostsContainerScreen>
                <ImgProfile src={profile} alt='Foto de perfil'/>
                <Titulo>Não há nenhuma postagem sua ainda</Titulo>
                <Titulo2>...</Titulo2>
                
                <Button>
                <IconButton
                      isRound={true}
                      variant='solid'
                      colorScheme='blue'
                      aria-label='Done'
                      fontSize='20px'
                      icon={<AddIcon/>}   
                      size='lg'   
                      w='10vh' 
                      h='10vh'              
                />
                </Button>
                </PostsContainerScreen>
            </MainPostContainer>
            
            
        </>
    )
}

export default MyPostNew