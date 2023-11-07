import userImg from '../../assets/userImg.svg'
import menssages from '../../assets/messages.svg'

import { BlueTextCard, ButtonContainer, ButtonContainer2, CardContainer, Content, ContentCard, FooterContent, HeaderContent, ImageUserHeader, MenssageImg, NameUserHeader, UserTextCard, TempoPubli } from './style'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { url } from '../../constants/url'


function PostsCard(props) {

    const navigate = useNavigate()
    const [user, setUser] = useState()
    const id = props.userIdValue
    const [comentarios, setComentarios] = useState([])

    // useEffect(() => {
    //     const formData = {
    //         id: id
    //     }

    //     axios.post(`${url.defaults.baseURL}/user/findUser`, formData)
    //         .then(function (response) {
    //             setUser(response.data.data)
    //         })
    //         .catch(function (error) {
    //             alert("erro POST CARD")
    //         });
    // }, [id])

    // useEffect(() => {
    //     axios.get(`${url.defaults.baseURL}/comments/comments/${props.id}`)
    //         .then(function (response) {
    //             setComentarios(response.data.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         });
    // })

    return(
    <>
        <CardContainer>
            <ContentCard>
                <HeaderContent>
                    <ButtonContainer2>
                        <ImageUserHeader src={userImg} alt="Imagem do usuario"/>
                    </ButtonContainer2>
                    <NameUserHeader>
                        <p>AAAAAAAA</p>
                        {/* {/<UserTextCard>{user.name}</UserTextCard> */}
                        {/* <BlueTextCard>{user.cargo}</BlueTextCard> */}
                    </NameUserHeader>
                    <TempoPubli>TEMPOOOOOOOOOOO</TempoPubli>
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