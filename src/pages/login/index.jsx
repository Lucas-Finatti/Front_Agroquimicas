import React, { useState, Navigate } from "react";
import { redirect } from "react-router-dom";
import './styles.css';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('')

    const handleSubmit = (e) => {
        // EVENTO DE SUBMIT
        e.preventDefault();
        console.log('submit ', {email, password})

        // Redirecionamento
        window.location.href = 'localhost:3000/service'
    } 

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <div className="email">Email</div>
                    <input 
                        required
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="field">
                    <div htmlfor="password">Senha</div>
                    <input 
                        required
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="actions">
                    <button type="submit" >ENTRAR</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage