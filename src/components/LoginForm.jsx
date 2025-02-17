import { useState } from "react"
import { Toaster, toast } from 'sonner';

export default function LoginForm() {
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

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prev) => (
            { ...prev, [name]: value }
        ))
        setIsChanging((prev) => (
            { ...prev, [name]: true }
        ))

        if (name === 'email') {
            setIsValidEmail(value.includes('@') && value.includes('.') && value.includes('co' || 'com'))
        }
        if (name === 'password') {
            setIsValidPassword(value.length >= 8)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            toast.success("Login successful!");
            setIsLoading(false)
            setData({email: '', password: ''})
        }, 1500);
    }

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20">
            <Toaster />
            <div className="w-full max-w-md space-y-8 animate-fade-in">
                <div className="space-y-2 text-center mb-8">
                    <h1 className="text-3xl font-medium tracking-tight">Bem-Vindo de Volta</h1>
                    <p className="text-muted-foreground">Entre para o futuro</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name='email'
                            placeholder="name@example.com"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full h-12 px-4 transition-shadow duration-200 hover:shadow-md focus:shadow-md block border border-zinc-300 rounded-lg"
                        />
                        {!isValidEmail && isChanging.email && <small id="messageInvalidEmail" className="messageError">Email inválido</small>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            placeholder="••••••••"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full h-12 px-4 transition-shadow duration-200 hover:shadow-md focus:shadow-md block border border-zinc-300 rounded-lg"
                        />
                        {!isValidPassword && isChanging.password && <small id="messageInvalidPassword" className="messageError">Senha Inválida</small>}
                    </div>
                    <button type="submit"
                        id="btnLogin"
                        className={`w-full h-12 text-base rounded-lg transition-all duration-200 cursor-pointer hover:shadow-lg btn-disabled text-white ${isLoading ? 'opacity-60' : ''}`}
                        disabled={!isValidEmail || !isValidPassword}
                    >
                        {isLoading ? "Entrando..." : "Entrar"}
                    </button>
                    <button type="submit"
                        id="btnLoginGoogle"
                        className="btn w-full h-12 text-base rounded-lg transition-all duration-200 cursor-pointer hover:shadow-lg text-white"
                    >
                        Entrar com Google
                    </button>
                </form>
            </div>
        </div>
    )
}