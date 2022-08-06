import React from 'react'
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMap} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = ({windowSize}) => {
  return (
    <footer style={{backgroundImage: "url('images/footer-bg.jpg')"}}>
        <div className="overlay">
        <div className="footer-container"
        style={{padding: windowSize > 1200 ? "5rem 9% 0 9%" : "1rem"}}
        >
            <div className="quick-links">
                <h3 className="footer-links-heading">Quick Links</h3>
                <ul className="quick-links-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div className="quick-links">
                <h3 className="footer-links-heading">Extra Links</h3>
                <ul className="quick-links-list">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">My Order</a></li>
                    <li><a href="#">My Wishlist</a></li>
                    <li><a href="#">Ask Questions</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="quick-links">
                <h3 className="footer-links-heading">Contact Info</h3>
                <ul className="quick-links-list">
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <span className="data">
                            010 170 891 62
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <span className="data">
                            010 170 891 62
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className="data">
                            eslam@gmail.com
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faMap} />
                            </span>
                            <span className="data">
                            Egypt, Gharbia
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="quick-links">
                <h3 className="footer-links-heading">Follow Me</h3>
                <ul className="quick-links-list">
                <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                            <span className="data">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span className="data">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                            <span className="data">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                            <span className="data">Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="footer-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <span className="data">Github</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <span className="copy">
        Created By <span className="my-name">Eslamo</span> | All Rights Reserved!
        </span>
        </div>
    </footer>
  )
}

export default Footer