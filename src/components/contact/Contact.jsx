import { allImagesDate } from '../../data/dataImage/dataImage';
import  './contact.scss';
import { MdEmail, MdPhone } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
const Contact = () => {
  return (
    <div className='contactContainer' name="contact">
            <img src={allImagesDate.contactBg} alt="" />
        <div className="contactUsContainer">
        <div className="contactContent">
                <h1>
                    Contactez nous
                </h1>
           <div className="contact">
           <div className="left">
                <div className="main">
                    <div className="icon">
                    <MdEmail />
                    </div>
                    <div className="content">
                        <h3>Mail</h3>
                        <p>blue@camtel.cm</p>
                    </div>
                </div>

                <div className="main">
                    <div className="icon">
                    <MdPhone />
                    </div>
                    <div className="content">
                        <h3>Phone</h3>
                        <p>+237 222 23 40 65</p>
                    </div>
                </div>

                <div className="main">
                    <div className="icon">
                    <RiMapPin2Fill />
                    </div>
                    <div className="content">
                        <h3>Address</h3>
                        <p>Yaoundé Cameroun - Boulevard du 20 Mai</p>
                    </div>
                </div>
            </div>
            <div className="right">
            <div className="container">
            <form action="#">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" placeholder="Votre nom.."/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Votre adresse e-mail.."/>

                <label htmlFor="country">Département</label>
                <select id="country" name="country">
                <option value="littoral">Littoral</option>
                <option value="centre">Centre</option>
                <option value="ouest">Ouest</option>
                <option value="Nord-ouest">Nord-ouest</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject"  placeholder="Écrivez votre message svp.." ></textarea>

                <input type="submit" value="envoyer"/>
            </form>
            </div>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Contact