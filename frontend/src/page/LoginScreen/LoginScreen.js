import { DivImagemHello, ImgHello, MainLogin, DivForm, DivContentForm, LabelPassword, SubTitleContainer, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount, InputContainer} from './style'
import ImagemLogin from '../../assets/ImagemLogin.png'
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import { useNavigate } from 'react-router-dom';
import { url } from '../../constants/url'
import { useState } from 'react';

function LoginScreen() {
    const navigate = useNavigate()
    
    function goToRegisterScreen() {
        navigate('/register')
    }

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const data = {
          name,
          password
        };

        console.log('---------> dada', data)

        try {
            const response = await url.post("/auth/login", data);
    
            console.log('***********response: ', response)

            if (response.data.success === true) {
                console.log("User connected!");
    
                url.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.data.token}`;
    
                localStorage.setItem("@Auth:user", JSON.stringify(response.data.data.name));
                localStorage.setItem("@Auth:token", response.data.data.token);
    
                navigate('/home');
            } else {
                setError("Credenciais inválidas. Verifique seu nome e senha.");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("Credenciais inválidas. Verifique seu nome e senha.");
        }
    };


    return (
        <MainLogin>
            <DivForm>
                <LoginHeader/>
                <DivContentForm>
                    <TitleContainer> Entre no fórum </TitleContainer>
                    <SubTitleContainer>Acesse sua conta aqui para visualizar os assuntos mais falados sobre trabalho</SubTitleContainer>
                    <Form01> 
                        <LabelContainer>Nome</LabelContainer>
                        <InputContainer
                        type='text'
                        value={name}
                        onChange={(e) => [setName(e.target.value), setError("")]}
                        />
                        <LabelPassword>Senha</LabelPassword>
                        <InputContainer
                        type='password'
                        value={password}
                        onChange={(e) => [setPassword(e.target.value), setError("")]}
                        />
                        {error ? 
                            <div>
                                <label>{error}</label>
                                <ButtonLogin onClick={handleLogin} disabled>Entrar</ButtonLogin>
                            </div>
                        :
                            <div>
                                <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                            </div>
                        }
                    </Form01>
                    <DivDontHaveAccount>
                        <p>Não possui cadastro?</p>
                        <ButtonCreateAccount onClick={goToRegisterScreen}>Criar conta</ButtonCreateAccount> 
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


