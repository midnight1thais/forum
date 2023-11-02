import { useNavigate } from 'react-router-dom'
import ImagemLogo from '../../assets/ImagemLogo.svg'
import { ButtonLoginHeader, HeaderLoginContainer, HeaderLoginImg } from './style'

function LoginHeader(){
    const navigate = useNavigate()

    function goToLoginScreen() {
        navigate('/')
    }

    return(
        <HeaderLoginContainer> 
            <ButtonLoginHeader onClick={goToLoginScreen}>
                <HeaderLoginImg src={ImagemLogo} alt='imagem da logo do fórum'/>
            </ButtonLoginHeader>
        </HeaderLoginContainer>
    )
}

export default LoginHeader