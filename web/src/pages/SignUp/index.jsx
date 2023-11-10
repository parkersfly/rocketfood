import { Container, Form } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { api } from "../../services/api"

import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch( error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar!")
      }
    })
  }

  return(
    <Container
    className="flex column"
    >
      <Logo />
      <div className="shield flex justify-center items-center">
        <Form
        className="flex column items-center justify-center"
        >
        <h1
        className="poppins poppins400Medium"
        >Crie sua conta</h1>
        <Input 
          type="text"
          placeholder="Exemplo: Maria da Silva"
          labelId="name"
          htmlFor="name"
          id="name"
          title="Seu nome"
          onChange={e => setName(e.target.value)}
          />
          <Input 
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          labelId="email"
          htmlFor="email"
          id="email"
          title="Email"
          onChange={e => setEmail(e.target.value)}
          />
          <Input 
          type="password"
          placeholder="No mínimo 6 caracteres"
          labelId="password"
          htmlFor="password"
          id="password"
          title="Senha"
          onChange={e => setPassword(e.target.value)}
          />

          <Button 
          text="Criar conta"
          onClick={handleSignUp}
          />

          <Link to="/" 
          className="poppins poppins100Medium"
          >
            Já tenho uma conta
          </Link>

        </Form>
      </div>
    </Container>
  )
}