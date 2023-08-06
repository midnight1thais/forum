import React from 'react';

import logo from '../../assets/LogoForum.svg'
import lupa from '../../assets/searchnormal.svg'
import profile from '../../assets/profile.svg'

import { Header, ImgLupa, LinkA, Input, ImgLogo, ImgProfile, InputContainer} from './style';


function PostHeader(){

    return(

        <>
        <Header>

            <LinkA href='#'>
                <ImgLogo src={logo} alt='Logo'/>
            </LinkA>

            <InputContainer>
                <a href='#'><ImgLupa src={lupa} alt='Ícone de pesquisa'/></a>
                <Input className='search' placeholder='Clique para pesquisar'/>
            </InputContainer>

           
            <LinkA href='#'>
                <ImgProfile src={profile} alt='Foto de perfil'/>
            </LinkA>

        </Header>
        </>

    )

}

 

export default PostHeader