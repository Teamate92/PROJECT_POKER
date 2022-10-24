import React, { useState } from 'react';
import axios from 'axios';
import '../style/components/_inscription.scss';


function Inscription() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addToList = () => {
    axios.post('http://localhost:3001/inscription', {firstname: firstname, lastname:lastname, email: email, password: password });
    };
  
  return (
    <div className="container-register">
      <h1>Inscription</h1>
      <form className="form-register">
        <input type="text" value={firstname} placeholder="Prénom" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastname} placeholder="Nom" onChange={(e) => setLastName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
        <button className="button" onClick={addToList} type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
