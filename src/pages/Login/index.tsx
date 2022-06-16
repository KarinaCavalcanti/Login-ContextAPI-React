import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value)
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value)
  }
  
  const handleLogin = async () => {
    if(email && password) {
      const isLogged = await auth.signin(email, password)
      if(isLogged) {
        navigate('/')
      } else {
        alert('O login falhou!')
      }
    }
  }

  return (
    <>
      <h2>Página de login</h2>
      <input 
        type="email" 
        value={email} 
        onChange={handleEmailInput}
        placeholder="Insira o e-mail" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={handlePasswordInput}
        placeholder="Insira a senha" 
      />
      <button 
        onClick={handleLogin}
      >
        Logar
      </button>
    </>
  )
}