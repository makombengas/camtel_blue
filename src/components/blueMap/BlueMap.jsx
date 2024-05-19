/* eslint-disable react/prop-types */
import  './blueMap.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { agenceData } from '../../data/data';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BlueMap = () => {
 

   
  return (
    <div className='mapContainer'>
         <MapContainer center={[ 4.765302, 10.343439]} zoom={8} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


              {
                agenceData.map(data=>(
                     
              <Link key={data.id} to={`agence/${data.link}`}>
              <Marker  position={[ data.coordination.latitude, data.coordination.longitude]} className="marker">
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