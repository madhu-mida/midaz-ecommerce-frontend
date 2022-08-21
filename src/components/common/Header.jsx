import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Input } from "@mui/material";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../../logo.png';
const ariaLabel = { 'aria-label': 'description' };
const Header = () => {
    return (
        <div>
            <div id="top-header">
                <div className="top-header-contents">
                    <span id="top-header-content-slogan">Trust us and go happy</span>
                    <div id="top-header-contents-social-icons">
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>

            </div>
            <div id="header">
                <div className="header-search">
                    <Input placeholder="Search..." inputProps={ariaLabel} />
                    <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                        <div>
                            <IoSearchOutline />
                        </div>
                    </IconContext.Provider>

                </div>
                <div className="header-name">
                    <span><img id="header-logo" src={logo} /></span>
                </div>
                <div className="header-account-cart">
                    <div id="header-account">
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <RiAccountBoxLine />
                            </div>
                        </IconContext.Provider>
                        <span style={{ marginLeft: '10px' }}>ACCOUNT</span>

                    </div>
                    <div id="header-cart">
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <IoCartOutline />
                            </div>
                        </IconContext.Provider>

                        <span style={{ marginLeft: '10px' }}>CART</span>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'white ! important' }}>
                <Navbar variant="dark" className="header-nav-bar" >
                    <Container>

                        <Nav className="me-auto, header-categories" >
                            <Nav.Link style={{ color: "black" }} href="#home">SHOP BY COLLECTION</Nav.Link>
                            <Nav.Link style={{ color: "black" }} href="#features">SHOP BY TYPE</Nav.Link>
                            <Nav.Link style={{ color: "black" }} href="#pricing">ACCESSORIES</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;