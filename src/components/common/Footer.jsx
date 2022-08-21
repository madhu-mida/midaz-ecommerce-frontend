import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";
const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-links">
                <div>
                    <span style={{ fontWeight: "700" }}>Links</span>
                </div>
                <div className="footer-link-list footer-menu">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to="#">About us</Link>
                    <Link style={{ marginTop: '10px', color: 'black', textDecoration: 'none' }} to="#">Shipping</Link>
                    <Link style={{ marginTop: '10px', color: 'black', textDecoration: 'none' }} to="#">Exchange & Refund</Link>
                </div>
            </div>
            <div className="footer-get-in-touch">
                <div>
                    <span style={{ fontWeight: '700' }}>Get in Touch</span>
                </div>
                <div className="footer-menu">
                    <div className="footer-get-in-touch-ph-email">
                        <span style={{ display: 'flex' }}>
                            <IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
                                <div>
                                    <FiPhone />
                                </div>
                            </IconContext.Provider>
                            <span style={{ marginLeft: "7px", textDecoration: 'underline' }}>+1 805-(279)-3130</span>
                        </span>
                        <span style={{ display: 'flex', marginTop: '10px', }}>
                            <IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
                                <div>
                                    <FiMail />
                                </div>
                            </IconContext.Provider>

                            <span style={{ marginLeft: "7px", textDecoration: 'underline' }}>Email us</span></span>
                    </div>
                    <div className="footer-follow-us">
                        <span>Follow us</span>
                        <div>
                            <FaInstagram />
                            <FaYoutube style={{ marginLeft: '10px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;