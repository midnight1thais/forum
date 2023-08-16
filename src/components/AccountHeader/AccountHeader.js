import ImagemLogo from '../../assets/ImagemLogo.svg'
import { Container, HeaderLoginImg } from './style'

function AccountHeader(){
    return(
        <Container>
            <HeaderLoginImg src={ImagemLogo} alt='imagem da logo do fórum'/>
        </Container>
    )
}

export default AccountHeader