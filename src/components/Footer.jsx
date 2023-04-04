import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to ='/' className="logo">
                    <img src={Logo} alt="FooterLogo" />
                </Link>
                <p>
                    You Gotta Believe It!
                </p>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/bojanala-samrat-21763817a" target="_blank" rel="noreferrer noopener">{<FaLinkedin/>}</a>
                
                <a href="https://www.facebook.com/bojanala.samrat" target="_blank" rel="noreferrer noopener">{<FaFacebookF/>}</a>
                                
                <a href="https://www.instagram.com/bojanala" target="_blank" rel="noreferrer noopener">{<AiFillInstagram/>}</a>  
            </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">FAQs</Link>
            </article>
        </div>

    </footer>
  )
}

export default Footer