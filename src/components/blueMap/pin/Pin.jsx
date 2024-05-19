/* eslint-disable react/prop-types */
import  './pin.scss';
import {  Popup, Marker} from 'react-leaflet'

const Pin = ({item}) => {
    console.log([...item])
  return (

        <>   
        {item.map(data=>(
          <Marker key={data.id} position={[data.coordination.latitude, data.coordination.longitude]}>
            <Popup>
            {data.city}   <br /> Easily customizable.
            </Popup>
        </Marker>
        ))}
        
        
          
        </>

  )
}

export default Pin