import './footer.scss'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="footerSocial">
            <div className="icon">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>

            <div className="icon">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                </a>
            </div>

            <div className="icon">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
            </div>
        </div>
        <p>blue by Camtel 2024. All rights reserved</p>
    </div>
  )
}

export default Footer