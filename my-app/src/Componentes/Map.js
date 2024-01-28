import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconUrl from '../logo.png';

const MapWithMarkers = () => {
  const initialPosition = [0, 0]; // Latitude e longitude iniciais
  const markers = [
    { position: [51.51, -0.1], title: 'Mapa Londres', description: 'Descrição para Londres' },
    { position: [51.52, -0.12], title: 'Marcador 2', description: 'Descrição para Marcador 2' },
    { position: [51.49, -0.1], title: 'Marcador 3', description: 'Descrição para Marcador 3' },
    { position: [-19.912998, -43.940933], title: 'BH', description: 'Descrição para BH' },
  ];

  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [20, 20],
    iconAnchor: [20, 40],
  });

  return (
    <MapContainer center={initialPosition} zoom={2} style={{ height: '600px', width: '80%' }}>
      {/* <TileLayer
        url="https://api.mapbox.com/styles/v1/clachx/clrxvofyz017i01p52f4m2djt.html?title=copy&access_token=pk.eyJ1IjoiY2xhY2h4IiwiYSI6ImNsMTFkaDU4ZTAwbWwzanF1bGVpczA0eGIifQ.-3YebIQuIk48cuPH-bYVyA&zoomwheel=true&fresh=true#1.6/-13.9/-51.7"
        attribution='&copy;  <a href="https://www.mapbox.com/">Mapbox</a> contributors'
        id="mapbox://styles/clachx/clrxvofyz017i01p52f4m2djt" // Altere o estilo do mapa aqui (por exemplo, mapbox/dark-v10)
        accessToken="pk.eyJ1IjoiY2xhY2h4IiwiYSI6ImNsMTFkaDU4ZTAwbWwzanF1bGVpczA0eGIifQ.-3YebIQuIk48cuPH-bYVyA"
      /> */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Popup>
            <h3>{marker.title}</h3>
            <p>{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
