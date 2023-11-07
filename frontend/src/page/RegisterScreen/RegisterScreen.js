import { LabelContainerRegister, MainRegister, Form02, DivImagemRegister, DivFormRegister, DivContentFormRegister, TitleRegister, ImgRegister, ButtonRegister, InputRegisterContainer } from './style'
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import ImagemRegister from '../../assets/ImagemRegister.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { baseUrl } from '../../constants/url'


function RegisterScreen() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(""); 

    const isButtonDisabled = password !== confirmPassword;

    const registerUser = async (e) => {
        e.preventDefault();
        const data = {
          name,
          email,
          password,
        };
        try {
          await baseUrl.post("/user/create", data);
          console.log("Usuário criado com sucesso!");
    
          navigate('/')
        } catch (error) {
          console.error("Erro ao fazer login:", error);
          setError("Credenciais inválidas. Verifique seu email e senha.");
        }
      };
  


    return (
        <MainRegister>
            <DivFormRegister>
                <LoginHeader/>
                <DivContentFormRegister>
                    <TitleRegister> Criar conta </TitleRegister>
                    <Form02 onSubmit={registerUser}> 
                        <LabelContainerRegister>Nome de usuário</LabelContainerRegister>
                        <InputRegisterContainer
                            type='text'
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <LabelContainerRegister>E-mail</LabelContainerRegister>
                        <InputRegisterContainer
                            type='email'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <LabelContainerRegister>Senha</LabelContainerRegister>
                        <InputRegisterContainer
                            type='password'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <LabelContainerRegister>Confirmar senha</LabelContainerRegister>
                        <InputRegisterContainer
                            type='password'
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {error ?
                            <div>
                                <label>{error}</label>
                                <ButtonRegister type="submit" value="Cadastrar" disabled={isButtonDisabled}/>
                            </div>
                            :
                            <div>
                                <ButtonRegister type="submit" value="Cadastrar" />
                            </div>
                        }
                    </Form02>
                </DivContentFormRegister>
            </DivFormRegister>
            <DivImagemRegister>
                <ImgRegister src={ImagemRegister} alt='Imagem da tela de login'/>
            </DivImagemRegister>
        </MainRegister>
    )
}

export default RegisterScreen