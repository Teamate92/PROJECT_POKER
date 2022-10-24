import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';  //biliothèque pour l'utilisation de GoogleMap API

//classe qui affiche la GoogleMap centrée sur l'ECE Paris 
class MapBase extends Component{

    
    render() {
      //css de la google map qu'on affiche
        const mapStyles = {
            width: '50%',
            height: '60%',
            border: 0,
            'margin-left':  '25%',
          };
        return (
            <div>
            <div className="titre">
            <h1>Vous pouvez nous retrouver pour le prochain tournoi à la localisation suivante : </h1>
            </div>
            <div className="map">
            <Map
              google={this.props.google}
              zoom={14}  //zoom de ma vision satellite
              style={mapStyles}
              initialCenter={{ lat: 48.8520256, lng: 2.2859175}}  //vision centree sur la localisation de l ece paris
            >
                <Marker position={{ lat: 48.8520256, lng: 2.2859175}}/> 
                </Map>  
                </div>
                </div>
        );
      }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIc-9Qw-Ime5dg4ADN5kCpgY-hbPkBwKQ'
  })(MapBase);
//api externe en lien avec mon google cloud platform