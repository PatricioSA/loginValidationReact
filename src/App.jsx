import './App.css'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <main className="flex min-h-screen">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Login visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <LoginForm/>
    </main>
  )
}

export default App
