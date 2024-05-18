import './services.scss';
import { FaHome, FaMobileAlt} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { allImagesDate } from '../../data/dataImage/dataImage';
import ServiceCarousel from './serviceCarousel/ServiceCarousel';
import "../services/serviceCarousel/serviceCarousel.scss";
import { blueHomeData} from '../../data/data';
import { FaDownload } from "react-icons/fa";
const OPTIONS = { dragFree: true, loop: true }

const SLIDES = blueHomeData.map(slides => slides)
const Services = () => {
   
    
  return (
    <div className='servicesContainer'>
        <div className="allServicesContainer" name="services">
            <h1>Services</h1>
            <div className="serviceContent">
                <div className="service">
                    <FaHome className='serviceIcon' />
                    <h2>Blue home</h2>
                    <hr />
                    <p>
                        Rapide - Illimité - Plug&play
                    </p>
                    <div className="content">
                    <img src={allImagesDate.house} alt="" />
                        <ul>
                            <li>Achète un modem Wifi</li>
                            <li>60.000XAF</li>
                            <li>Obtiens Blue Home L </li>
                            <li>Illimité</li>
                        </ul>

                    </div>
                </div>

                <div className="service">
                <FaMobileAlt className='serviceIcon' />
                    <h2>Blue mobile</h2>
                    <hr />
                    <p>
                        Tous réseaux - Haut débit
                    </p>
                    <div className="content">
                    <img src={allImagesDate.smartphone} alt="" />
                    <ul>

                            <li>Recharge ton mobile </li>
                            <li>Via YUP</li>
                            <li>Ou via #237*620# </li>
                            <li>et active</li>
                            <li>ton forfait</li>
                            <li>sur *825#</li>
                        </ul>
                    </div>
                </div>

                <div className="service">
                    <RiTeamFill  className='serviceIcon' />
                    <h2>Blue team</h2>
                    <hr />
                    <p>
                       Appels tous réseaux
                    </p>
                    <div className="content">
                    <img src={allImagesDate.group} alt="" />
                        <ul>
                            <li>Appels illimités</li>
                            <li>Sms illimités</li>
                            <li>Minutes & SMS offerts pour tous les reseaux</li>
                            <li>Data Internet 3G/4G</li>
                        </ul>

                    </div>
                </div>
            </div>
          
        </div>
        <div className="serviceCarouselContainer">
                <h1>Blue Home</h1>
                <ServiceCarousel slides={SLIDES} options={OPTIONS}/>
                <p>
                    Taille S: Au-delà du quota de 35 Go, la vitesse internet maximale passe à 1 Mbps.

                    Taille M : au-delà du quota de 75 Go, la vitesse internet maximale passe à 1 Mbps

                    Taille L : au-delà du quota de 150 Go, la vitesse internet maximale passe à 1 Mbps
                    <br />
                    <b>Recharge ton modem sur YUP , Switchn, ou via</b>
                    <br />
                    #237*620# et active ton forfait au *825#
                </p>
            </div>
            <div className="serviceBanner">
                <h1> {"un point c'est blue"}  </h1>
                <div className="titleContainer">
                   <a href="https://www.switchn.net/fr/" target="_blank" rel="noopener noreferrer">
                    <div className="left">
                        <FaDownload className='serviceIcon'  />
                            <span> {"Télécharger l'application mobile - SwitchN-"} </span>
                        </div>
                   </a>
                    <a href="https://play.google.com/store/apps/details?id=fr.tagpay.mwallet.app.yup&hl=en&gl=US" target="_blank" rel="noopener noreferrer">
                        <div className="right">
                            <FaDownload className='serviceIcon' />
                            <span> {"Télécharger l'application mobile - YUP-"} </span>
                        </div>
                    </a>
                </div>
                <img src={allImagesDate.ImageOne} alt="" />
            </div>
            
          
    </div>
  )
}

export default Services