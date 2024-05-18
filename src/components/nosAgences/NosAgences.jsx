import { agenceData } from "../../data/data";
import "./nosAgences.scss";
import {Link} from "react-router-dom"
const NosAgences = () => {
  return (
    <div className='agencesContainer' name="nos-agences">
          <div className="agenceContent">

                <h1>Nos agences</h1>
            
            <div className="agences">

             {agenceData.map(agence =>(
              <Link to={`agence/${agence.link}`} key={agence.id}>
                <div className="agenceCard">
                    <img src={agence.image} alt="" />
                    <h2>{agence.name} </h2>
                    <h3>{agence.city} </h3>                  
                </div>
              </Link>
             ) )}
              
            </div>

            {/* <Link to="/">
              <button>toutes les agences</button>
            </Link> */}

          </div>
                
    </div>
  )
}

export default NosAgences