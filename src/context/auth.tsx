import React, {createContext, useState} from "react"
import {useNavigate} from "react-router-dom"

import { apiClients } from "../services/api"
import { AuthT } from "../interfaces/apiClients"

type ChildrenT = {
    children: React.ReactNode
}

type AuthContextInterface = {
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isLogged: boolean
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

export const AuthContextProvider = ({children}: ChildrenT) => {

    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const addTokenToLocalStorage = (token: string) => {
        localStorage.setItem('token', token)
    }

    const login = async (username: string, password: string): Promise<void> => {
        
        await apiClients.post('/api/auth/login', {
            username,
            password
        }).then((res) => {
            
            setIsLogged(true)
            addTokenToLocalStorage(res.data.token)
            navigate('/')

        }).catch(err => console.log(err))
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
        navigate('/signin')
    }

    return (
        <AuthContext.Provider
            value={{login, isLogged, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}