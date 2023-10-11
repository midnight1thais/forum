import { Container, ImgProfile, Header, Title} from "./style"
import profile from '../../assets/profile.svg'



function EditProfileHeader(){
    return(
        <>
        <Container>
            <Header>
                <ImgProfile src={profile} alt='Foto de perfil'/>
                <Title>Sheyla</Title>
                <Title>Cardoso</Title>
            </Header>
            


        </Container>
        
        </>
    )
}

export default EditProfileHeader