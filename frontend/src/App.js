import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState(''); //desetruturação
  /* Email retorna
        ele começa com '', string vazia
        esse estado de valor de e-mail eme tempo real, 
    useState retorna um vetor com duas posições
    setEmail atualiza o valor do estado

  */

  function handleSumit(event){
      event.preventDefault();

      console.log(email);
  }


  return (
    <div className="container">
        <img src={logo} alt=""/>

        <div className="content">
          <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.
          </p>

          <form onSubmit={handleSumit} >
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
        </div>
    </div>
  );
}

export default App;
