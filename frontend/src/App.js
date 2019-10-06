import React, {useState} from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {

  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    
    const res = await api.post('/sessions', {email});

    console.log(res);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"></img>

      <div className="content">
          <p>
              Oferaça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
          </p>

          <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-MAIL*</label>
              <input 
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                onChange={event => setEmail(event.target.value)}
              ></input>

              <button className="btn" type="submit">Entrar</button>
          </form>
      </div>
    </div>
  );
}

export default App;
