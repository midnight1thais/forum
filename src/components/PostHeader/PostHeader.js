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
                <ImgLogo src={logo} />
            </LinkA>

            <InputContainer>
                <a href='#'><ImgLupa src={lupa}/></a>
                <Input className='search' placeholder='Clique para pesquisar'/>
            </InputContainer>

           
            <LinkA href='#'>
                <ImgProfile src={profile}/>
            </LinkA>

        </Header>
        </>

    )

}

 

export default PostHeader