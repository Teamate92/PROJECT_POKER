import React, {Component} from 'react';
import "../style/components/_décompte.scss";

//classe qui effectue mon compte à rebours jusqu'à mon prochain événement
class Décompte extends Component {
   
   //Décompte initialisé à 0
    state = {
        days: 0,
        hours: '00',
        minutes: '00',
        seconds: '00',
        timeUp: false
   
   }
 
   componentDidMount() {
      setInterval(() => {        
         let eventDate = +new Date(this.props.date);  //on récupère la date lue dans la bdd locale (temps en ms)
         let difference = eventDate - (+new Date()); //différence de temps entre la date de l'event et la date d'aujourd'hui

         //si la date est passée ou l'event est aujourd'hui, on affiche pas le compte à rebours
   if (difference < 1) { 
            this.setState({ timeUp: true });
         } else {
            //si l'event n'est pas encore arrivé
            //on set les valeur du state de ma classe
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((difference / (1000 * 60)) % 60);
            let seconds = Math.floor((difference / (1000)) % 60);
            this.setState({
               hours: hours > 9 ? hours : `0${hours}`,
               minutes: minutes > 9 ? minutes : `0${minutes}`,
               seconds: seconds > 9 ? seconds : `0${seconds}`,
               days
            });
         }
      }, 1000)
   }
   render() {
        const {days, hours, minutes, seconds, timeUp} = this.state;
        const dayString = days > 1 ? 'jours' : 'jour';
       
   return (
      timeUp?
      <p> </p>
      :
      <div className="event">
      <h1> 
      Prochain Événement dans : {days} {dayString} {hours} heures {minutes}  minutes {seconds} secondes</h1>
      </div>
        );
   }
};

export default Décompte;
