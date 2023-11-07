import { Container, ImgProfile, Header, Title} from "./style"
import profile from '../../assets/profile.svg'
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../constants/url";



function AccountProfileHeader(){

    const [userData, setUserData] = useState('');
    
    useEffect(() => {
        const userId = localStorage.getItem("@Auth:id");
        try {
            axios.get(`${url.defaults.baseURL}/user/information/${userId}`)
            .then(response => {
                const userDataFromServer = response.data; 
                setUserData(userDataFromServer.data);
            });
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error.message);
        }
    }, []);

    return(
        <>
        <Container>
            <Header>
                <ImgProfile src={profile} alt='Foto de perfil'/>
                <Title>{userData.name}</Title>
            </Header>
            


        </Container>
        
        </>
    )
}

export default AccountProfileHeader