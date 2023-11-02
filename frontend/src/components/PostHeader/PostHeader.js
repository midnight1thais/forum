import logo from '../../assets/LogoForum.svg'
import lupa from '../../assets/searchnormal.svg'
import profile from '../../assets/profile.svg'

import { Header, ImgLupa, Input, ImgLogo, ImgProfile, InputContainer, DivAccountLogout, ButtonLogout} from './style';
import { useNavigate } from 'react-router-dom';

function PostHeader(){
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('token')
        navigate('/')
    }

    return(
        <Header>
            <ImgLogo src={logo} alt='Logo'/>

            <InputContainer>
                <ImgLupa src={lupa} alt='Ícone de pesquisa'/>
                <Input className='search' placeholder='Clique para pesquisar'/>
            </InputContainer>

            <DivAccountLogout>
                <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>
                <ImgProfile src={profile} alt='Foto de perfil'/>
            </DivAccountLogout>
        </Header>
    )
}

export default PostHeader