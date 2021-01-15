import { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, google, maps} from 'google-maps-react';

import imageD from "../../../assets/images/markerDefesa.png";
import imageN from "../../../assets/images/markerNome.png";
import imageC from "../../../assets/images/markerCasaAcolhimento.png";
import imageJ from "../../../assets/images/markerJuridico.png";
import imageP from "../../../assets/images/markerP.png";
 
export class MapContainer extends Component {
  render() {
    const locations = [
      {
        title: "Casa flor",
        lat: -23.5242209,
        log: -46.6345409,
        icon: {imageC}
      },
      {
        title: "Casa chama",
        lat: -23.551196,
        log: -46.6308642,
        icon: {imageC}
      },
      {
        title: "Arouchianos",
        lat: -23.5409045,
        log: -46.645172,
        icon: {imageC}
      },
      {
        title: "Casa 1",
        lat: -23.555882,
        log: -46.6415154,
        icon: {imageC}
      },
    ];
    
    return (
      <Map google={this.props.google}
        style={{ width: '100%', height: '100%' }}
        zoom={12.2}
        initialCenter={{
          lat: -23.5677666,
          lng: -46.6487763
        }}
        //centerAroundCurrentLocation={true}
        >
        
        {locations.map((item) => (
           <Marker
           title={item.title}
           name={item.title}
           position={{lat: item.lat, lng: item.log}}
           icon={{
            url: {imageC},
            //anchor: new google.maps.Point(32,32),
            //scaledSize: new google.maps.Size(64,64)
          }} 
           /> 
        ))}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBOPuA5Ayetqk3HhD__uRzr4AVi-L3TPE4')
})(MapContainer)