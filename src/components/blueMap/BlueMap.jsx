/* eslint-disable react/prop-types */
import  './blueMap.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { agenceData } from '../../data/data';
import { Link } from 'react-router-dom';
import L from 'leaflet'
// eslint-disable-next-line react/prop-types

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
const customIcon = new L.Icon({
  iconUrl: '/place.svg',
  iconSize: [35, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
 
});

const BlueMap = () => {
 

   
  return (
    <div className='mapContainer'>
         <MapContainer center={[ 4.765302, 10.343439]} zoom={8} scrollWheelZoom={false} className='map'>
         <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />


              {
                agenceData.map(data=>(
                     
              <Link key={data.id} to={`agence/${data.link}`}>
              <Marker  position={[ data.coordination.latitude, data.coordination.longitude]} icon={customIcon} className="marker">
                <Popup>
                  <div className="popUpContainer">
                      <img src={data.image} alt={data.image} />
                  </div>
                </Popup>
              </Marker>
              </Link>
                ))
              }
      

  </MapContainer>
    </div>
  )
}

export default BlueMap