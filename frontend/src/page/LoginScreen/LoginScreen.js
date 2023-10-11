import { DivImagemHello, ImgHello, MainLogin, DivForm, DivContentForm, LabelPassword, SubTitleContainer, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount, InputContainer} from './style'
import ImagemLogin from '../../assets/ImagemLogin.png'
import LoginHeader from '../../components/LoginHeader/LoginHeader'

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputLogin from '../../components/InputLogin/InputLogin';
import { useUserOperations } from '../../hooks/useUserOperations';


function LoginScreen() {
    
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const {form, onChangeForm, handleSubmit} = useUserOperations({nome:'', password:''} , 'user/login')


    return (
        <MainLogin>
            <DivForm>
                <LoginHeader/>
                <DivContentForm>
                    <TitleContainer> Entre no fórum </TitleContainer>
                    <SubTitleContainer>Acesse sua conta aqui para visualizar os assuntos mais falados sobre trabalho</SubTitleContainer>
                    <Form01 onSubmit={handleSubmit}> 
                        <LabelContainer>Nome</LabelContainer>
                        <InputContainer
                        placeholder='Nome'
                        type='text'
                        name='nome'
                        value = {form.nome}
                        onChange={onChangeForm}
                        />
                        <LabelPassword>Senha</LabelPassword>
                        <InputContainer
                        type='password'
                        name='password'
                        value={form.password}
                        onChange={onChangeForm}
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


