import { DivImagemHello, ImgHello, MainLogin, DivForm, DivContentForm, LabelPassword, SubTitleContainer, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount, InputContainer} from './style'
import ImagemLogin from '../../assets/ImagemLogin.png'
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputLogin from '../../components/InputLogin/InputLogin';


function LoginScreen() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const goToHome = ()=>{
        navigate('home')
    }

    console.log(email)
    console.log(password)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json', 
            },
        })
        .then(response =>{
            alert(response.data.message)
            goToHome()
        })
        .catch(error => console.log(error))

    }




    return (
        <MainLogin>
            <DivForm>
                <LoginHeader/>
                <DivContentForm>
                    <TitleContainer> Entre no fórum </TitleContainer>
                    <SubTitleContainer>Acesse sua conta aqui para visualizar os assuntos mais falados sobre trabalho</SubTitleContainer>
                    <Form01 onSubmit={handleSubmit}> 
                        <LabelContainer>Email</LabelContainer>
                        <InputContainer
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <LabelPassword>Senha</LabelPassword>
                        <InputContainer
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <ButtonLogin 
                        type="submit" 
                        value="Entrar"
                        />
                    </Form01>
                    <DivDontHaveAccount>
                        <p>Não possui cadastro?</p>
                        <ButtonCreateAccount>Criar conta</ButtonCreateAccount> 
                    </DivDontHaveAccount>
                </DivContentForm>
            </DivForm>
            <DivImagemHello>
                <ImgHello src={ImagemLogin} alt='Imagem da tela de login'/>
            </DivImagemHello>
        </MainLogin>
    )
}

export default LoginScreen


