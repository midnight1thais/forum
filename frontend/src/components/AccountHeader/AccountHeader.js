import ImagemLogo from '../../assets/ImagemLogo.svg'
import { ContainerHeader, HeaderLoginImg } from './style'

function AccountHeader(){
    return(
        <ContainerHeader>
            <HeaderLoginImg src={ImagemLogo} alt='imagem da logo do fórum'/>
        </ContainerHeader>
    )
}

export default AccountHeader