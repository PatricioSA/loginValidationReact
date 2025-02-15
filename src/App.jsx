import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [isChanging, setIsChanging] = useState({
    email: false,
    password: false,
  })
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((prev) => (
      { ...prev, [name]: value }
    ))
    setIsChanging((prev) => (
      {...prev, [name]: true}
    ))

    if (name === 'email') {
      setIsValidEmail(value.includes('@') && value.includes('.') && value.includes('co' || 'com'))
    }
    if (name === 'password') {
      setIsValidPassword(value.length >= 8)
    }
    console.log(isChanging.email)
    console.log(isChanging.password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login')
  }

  return (
    <main id="container">
      <form id="loginForm" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="email"
            name='email'
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          {!isValidEmail && isChanging.email && <small id="messageInvalidEmail" className="messageError">Email inválido</small>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name='password'
            placeholder="Senha"
            value={data.password}
            onChange={handleChange}
          />
          {!isValidPassword && isChanging.password && <small id="messageInvalidPassword" className="messageError">Senha Inválida</small>}
        </div>
        <button type="submit" className="btn" id="btnLogin"
          disabled={!isValidEmail || !isValidPassword}
          >
          Entrar
        </button>
        <button type="submit" className="btn" id="btnLoginGoogle">Entrar com Google</button>
      </form>
    </main>
  )
}

export default App
