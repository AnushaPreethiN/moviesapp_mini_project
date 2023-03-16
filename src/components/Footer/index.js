import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="para-container-contact-us">
    <div className="footer-container">
      <FaGoogle className="google-icon" />
      <FaTwitter className="google-icon" />
      <FaInstagram className="google-icon" />
      <FaYoutube className="you-tube-icon" />
    </div>
    <a href="https://www.linkedin.com/in/anu-p/">
      <p className="contact-us-para"> Contact us</p>
    </a>
  </div>
)

export default Footer
