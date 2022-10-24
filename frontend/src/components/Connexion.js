import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../style/components/_connexion.scss';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[usersList,setUsersList]=useState([]);
  const[newEmail,setNewEmail]=useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/membres').then((response) => {
      setUsersList(response.data);
    });

  }, []);

 const addToList = () => {
  axios.post('http://localhost:3001/connexion', {email: email, password: password });
  };

  const updateEmail= (id) => {
    axios.put("http://localhost:3001/maj", {
      id:id,
      newEmail:newEmail,
    });
  };

  const deleteUser= (id) => {
    axios.delete(`http://localhost:3001/suppression/${id}`)
  };

  return (
    <div className="container-login">
      <h1>Connexion</h1>
      <form className="form-login" >
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
        <button className="button" onClick={addToList} type="submit">Se Connecter</button>
      </form>
      <div className="liste">
      <h1>Membres:</h1>
      {usersList.map((val,key) => {
        return (
          <div className="form2"key={key}>
            <h2> {val.firstname}{" "}{val.lastname} </h2>
            <input type="text" placeholder="Modifier le mail..."
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}/>
            <button className="button2" onClick={() => updateEmail(val._id)}>Modifier</button>
            <button className="button2" onClick={() => deleteUser(val._id)}>Supprimer</button>
          </div> 
        );
      })}
      </div>
    </div>
  );
}

export default Connexion;
