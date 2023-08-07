import ImagemLogo from '../../assets/ImagemLogo.svg'
import { ButtonLoginHeader, HeaderLoginContainer, HeaderLoginImg } from './styles'

function LoginHeader(){
    return(
        <HeaderLoginContainer> 
            <ButtonLoginHeader>
                <HeaderLoginImg src={ImagemLogo} alt='imagem da logo do fórum'/>
            </ButtonLoginHeader>
        </HeaderLoginContainer>
    )
}

export default LoginHeader