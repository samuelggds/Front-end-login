import React from 'react'
import Users from '../../assets/users.png'
import { TopBackground, Form, ContainerInputs, Title, Container, Input, InputLabel } from "./styles"
import { useRef } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    const navigate = useNavigate()


    async function registerNewUser() {
        const { data } = await api.post('/users', {
            email: inputEmail.current.value,
            age: inputAge.current.value,
            name: inputName.current.value
        })
        console.log(data);
        navigate('/users')

    }

    return (
        <Container>
            <TopBackground>
                <img src={Users} />

            </TopBackground>
            <Form>
                <Title>Cadastrar Usuário</Title>

                <ContainerInputs>
                    <div>
                        <InputLabel>Nome<span> *</span></InputLabel>
                        <Input type='text' placeholder='Nome do usuário' ref={inputName} />

                    </div>
                    <div>
                        <InputLabel>Idade<span> *</span></InputLabel>
                        <Input type='number' placeholder='Idade do usuário' ref={inputAge} />

                    </div>

                </ContainerInputs>
                <div style={{ width: '100%' }}>
                    <InputLabel>Email<span> *</span></InputLabel>
                    <Input type='email' placeholder='Email do usuário' ref={inputEmail} />
                </div>

                <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>

            </Form>

            <Button type='button' onClick={() => navigate('/users')}>Lista de Usuários</Button>
        </Container>

    )
}

export default Home