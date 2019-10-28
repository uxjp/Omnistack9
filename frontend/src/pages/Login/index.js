import React, { useState } from 'react';
import api from '../../services/api';


export default function Login({ history }) {
    // react hook 
    const [email, setEmail] = useState(''); //desetruturação
    /* Email retorna
        ele começa com '', string vazia
        esse estado de valor de e-mail eme tempo real, 
    useState retorna um vetor com duas posições
    setEmail atualiza o valor do estado

    */

    async function handleSubmit(event) {
        event.preventDefault();

    
        const response = await api.post('/sessions', { email }); 
        //base url implementada antes

        const { _id } = response.data;
        
        localStorage.setItem('user', _id);

        history.push('/dashboard'); 


    }

    return (
        <>
            <p>
                 Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.
            </p>

            <form onSubmit = {handleSubmit} >
                <label htmlFor="email"> E-MAIL *</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Seu melhor e-mail" 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}