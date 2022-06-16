import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export default function Private() {
  const auth = useContext(AuthContext)
  return (
    <>
      <h2>Página privada</h2>
      Olá {auth.user?.name}!
    </>
  )
}