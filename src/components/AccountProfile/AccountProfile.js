
import profile from '../../assets/profile.svg'
import { Container, ImgProfile, Header, Title} from "./style"


function AccountProfile(){
    return(
        <>
        <Container>
            <Header>
                <ImgProfile src={profile} alt='Foto de perfil'/>
                <Title>Sheyla Cardoso</Title>
            </Header>
            


        </Container>
        
        </>
    )
}

export default AccountProfile