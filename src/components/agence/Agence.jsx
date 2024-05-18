import { agenceData } from '../../data/data';
import './agence.scss';
import { Link, useParams } from 'react-router-dom';

const Agence = () => {
    const {id} = useParams();
    const agence = agenceData.find(data=> data.link === id)
  return (
    <div className='containerAgence'>
        {agence.cityData.map(city=>(
            <div className="agence" key={city.id}>
                <div className="left">
                    <img src={city.image} alt="" />
                </div>
                <div className="right">
                    <h1>{city.name} </h1>
                    <ul>
                        {city.cityName.map((name, index) => (
                            <li key={index}>{name} </li>
                        ))}
                    </ul>
                <Link to={"/"}>
                    <button> Go to Homepage </button>
                </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Agence