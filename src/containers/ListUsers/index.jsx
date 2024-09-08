import React, { useState, useEffect } from "react"
import { Button } from "../../components/Button/styles"
import Users from '../../assets/users.png'
import { TopBackground, Title, ContainerUsers, TrashIcon, CardUsers, Container, AvatarUser } from "./styles"
import api from "../../services/api"
import Trash from '../../assets/trash.svg'
import { useNavigate } from "react-router-dom"




function ListUsers() {

    const [users, setUsers] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/users')

            setUsers(data)
            console.log(data);

        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)

    }


    return (
        <Container>
            <TopBackground>
                <img src={Users} />

            </TopBackground>

            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.length > 0 ? (
                    users.map(user => (
                        <CardUsers key={user.id}>
                            <AvatarUser src={`https://ui-avatars.com/api/?name=${user.name}`} />
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.age}</p>
                                <p>{user.email}</p>
                            </div>
                            <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />
                        </CardUsers>
                    ))
                ) : (
                    <p style={{ color: '#fff' }}>Carregando usuários...</p>
                )}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>

    )
}


export default ListUsers