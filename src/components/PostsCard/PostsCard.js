import tecnology from '../../assets/tecnnology.svg'
import userImg from '../../assets/userImg.svg'
import menssages from '../../assets/messages.svg'

import { BlueTextCard, ButtonContainer, ButtonContainer2, CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, ImgCard, MenssageImg, NameUserHeader, TextHeader, UserTextCard } from './style'

function PostsCard() {
    return(
        <CardContainer>
            <div>
                <ImgCard src={tecnology} alt="Imagem do conteúdo"/>
            </div>
            <ContentCard>
                <HeaderContent>
                    <ButtonContainer2>
                        <ImageUserHeader src={userImg} alt="Imagem do usuario"/>
                    </ButtonContainer2>
                    <NameUserHeader>
                        <UserTextCard>Nome do Usuário</UserTextCard>
                        <BlueTextCard>Tempo da publicação</BlueTextCard>
                    </NameUserHeader>
                </HeaderContent>
                <Content>
                    <h2>Exemplo de título de uma públicação realizada em um post</h2>
                </Content>
                <FooterContent>
                    <ButtonContainer>
                        <MenssageImg src={menssages} alt='Ícone de mensagens'/>
                        Comentários
                    </ButtonContainer>
                </FooterContent>
            </ContentCard>
        </CardContainer>
    )
}

export default PostsCard