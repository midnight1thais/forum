import { useEffect, useState } from "react";
import { ContainerInput, Input, Label, Main, ContainerTopics, BorderTopics, TitleTopics} from "./style"
import { url } from "../../constants/url";
import axios from "axios";

function AccountMain(){

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
        <Main>
            <ContainerInput>
                <Label> Nome:
                    <Input placeholder={userData.name}/>
                </Label>
                <Label> Email:
                    <Input placeholder={userData.email}/>
                </Label>

            </ContainerInput>
        </Main>
    )
}

export default AccountMain