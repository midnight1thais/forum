import React from 'react';

import logo from '../../assets/Search.svg'
import lupa from '../../assets/searchnormal.svg'
import profile from '../../assets/profile.svg'

import { Header, ImgLupa, LinkA, Input, ImgLogo, ImgProfile, InputContainer} from './style';


function PostHeader(){

    return(

        <>
        <Header>

            <LinkA>
                <ImgLogo src={logo} />
            </LinkA>

            <InputContainer>
                <a><ImgLupa src={lupa}/></a>
                <Input className='search' placeholder='Clique para pesquisar'/>
            </InputContainer>

           
            <LinkA>
                <ImgProfile src={profile}/>
            </LinkA>

        </Header>
        </>

    )

}

 

export default PostHeader