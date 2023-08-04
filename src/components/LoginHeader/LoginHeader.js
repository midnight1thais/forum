import ImagemLogo from '../../assets/ImagemLogo.svg'
import { HeaderLoginContainer, HeaderLoginImg } from './styles'

function LoginHeader(){
    return(
        <HeaderLoginContainer>
            
            <HeaderLoginImg src={ImagemLogo} alt='imagem da logo do fórum'/>

        </HeaderLoginContainer>
    )
}

export default LoginHeader