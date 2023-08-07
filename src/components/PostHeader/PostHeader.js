import logo from '../../assets/LogoForum.svg'
import lupa from '../../assets/searchnormal.svg'
import profile from '../../assets/profile.svg'

import { Header, ImgLupa, Input, ImgLogo, ImgProfile, InputContainer} from './style';


function PostHeader(){

    return(
        <Header>
            <ImgLogo src={logo} alt='Logo'/>

            <InputContainer>
                <ImgLupa src={lupa} alt='Ícone de pesquisa'/>
                <Input className='search' placeholder='Clique para pesquisar'/>
            </InputContainer>

            <ImgProfile src={profile} alt='Foto de perfil'/>
        </Header>
    )
}

export default PostHeader