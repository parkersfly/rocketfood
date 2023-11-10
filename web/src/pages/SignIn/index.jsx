import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { useState } from 'react'

export function SignIn(){
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return(
    <Container
    className="flex column"
    >
      <Logo />
      <div className="shield flex items-center justify-center">
        <Form
        className="flex column items-center justify-center"
        >
          <h1
          className="poppins poppins400Medium"
          >Faça login</h1>
          <Input 
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          labelId="email"
          htmlFor="email"
          id="email"
          title="Email"
          onChange = {e => setEmail(e.target.value)}
          />
          <Input 
          type="password"
          placeholder="No mínimo 6 caracteres"
          labelId="password"
          htmlFor="password"
          id="password"
          title="Senha"
          onChange = {e => setPassword(e.target.value)}
          />

          <Button 
          text="Entrar"
          onClick={handleSignIn}
          />

          <Link to="register" 
          className="poppins poppins100Medium"
          >
            criar uma conta
          </Link>

        </Form>
      </div>
    </Container>
  )
}