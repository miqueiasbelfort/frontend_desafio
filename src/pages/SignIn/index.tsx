import React, {useState, useEffect, useContext} from 'react';
import styles from './SignIn.module.css';

import {GiPadlock} from 'react-icons/gi'
import { AuthContext } from '../../context/auth';

const SignIn: React.FC = () => {

    const authContext = useContext(AuthContext)

    const [remenberMe, setRemenberMe] = useState<boolean>()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const addCookiesRemenberMe = () => {
        console.log('Adicionar as cookies')
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        if(remenberMe){
            addCookiesRemenberMe()
        }
        authContext?.login(username, password)
    }

  return (
    <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            
            <div className={styles.formHeader}>
                <GiPadlock/>
                <p>Autenticação</p>
            </div>

            <div className={styles.formMain}>
                <input type="text" placeholder='Nome de Usuário' onChange={e => setUsername(e.target.value)}/>
                <input type="text" placeholder='Senha' onChange={e => setPassword(e.target.value)}/>
                <div className={styles.checkboxContainer}>
                    <input type="checkbox" onChange={e => setRemenberMe(e.target.checked)}/>
                    <span>Lembrar de mim!</span>
                </div>
                <input type="submit" value="Login" />
            </div>
            
        </form>
    </div>
  );
}

export default SignIn;