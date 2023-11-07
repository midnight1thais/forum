import userImg from '../../assets/userImg.svg'
import menssages from '../../assets/messages.svg'

import { BlueTextCard, ButtonContainer, ButtonContainer2, CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, MenssageImg, NameUserHeader, UserTextCard, TempoPubli } from './style'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { url } from '../../constants/url'


function PostsCard(props) {

    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const userId = props.userIdValue;
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        axios.get(`${url.defaults.baseURL}/user/information/${userId}`)
            .then(function (response) {
                setUser(response.data.data);
            })
            .catch(function (error) {
                alert("Erro ao buscar informações do usuário");
            });
    }, [userId]);

    return(
    <>
        <CardContainer>
            <ContentCard>
                <HeaderContent>
                    <ButtonContainer2>
                        <ImageUserHeader src={userImg} alt="Imagem do usuario"/>
                    </ButtonContainer2>
                    <NameUserHeader>
                    {user ? (
                            <>
                                <p>{user.name}</p>
                            </>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </NameUserHeader>
                    <TempoPubli>{props.date}</TempoPubli>
                </HeaderContent>
                <Content>
                    <h2>{props.titulo}</h2>
                </Content>
                <FooterContent>
                    <ButtonContainer>
                        <MenssageImg src={menssages} alt='Ícone de mensagens'/>
                        {comentarios.length} comentários
                    </ButtonContainer>
                </FooterContent>
            </ContentCard>
        </CardContainer>
            <></>

    </>
    )
}

export default PostsCard