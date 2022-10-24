import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Presentation from './pages/Presentation';
import Membres from './pages/Membres';
import Map from './pages/Map';
import Structure from './pages/Structure';
import Sondages from './pages/Sondages';
import Contact from './pages/Contact';

const App = () => {
  return (
    //Création des routes pour chaque component
    <Switch>
      <Route exact path="/" component={Accueil}/>
      <Route exact path="/presentation" component={Presentation}/>
      <Route exact path="/membres" component={Membres}/>
      <Route exact path="/map" component={Map}/>
      <Route exact path="/structure" component={Structure}/>
      <Route exact path="/sondages" component={Sondages}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
