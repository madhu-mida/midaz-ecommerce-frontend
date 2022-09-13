import { useAuth0 } from "@auth0/auth0-react";
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom"
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Input } from "@mui/material";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../../logo.png';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const ariaLabel = { 'aria-label': 'description' };



const Header = () => {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const cart = useSelector((state) => state.main.cart);
    let navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);

        console.log('SearchTerm:', event.target.value);
    };

    //console.log("Cart Size :: ", cart.length);

    function checkAuthentication() {
        console.log("Clicked")
        if (isAuthenticated) {
            console.log("You are authenticated")
            navigate("/account", { replace: true });
        } else {
            loginWithRedirect();
        }
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <Input style={{}}
                        placeholder="Search..."
                        type="text"
                        name="searchTerm"
                        onChange={handleChange}
                        value={searchTerm}
                        inputProps={ariaLabel} />
                    <IconContext.Provider value={{ size: "1.5em", className: "global-class-name", color: "#6c757d" }}>
                        <div>
                            <Link to={`/products/${searchTerm}`} >
                                <IoSearchOutline />
                            </Link>
                        </div>
                    </IconContext.Provider>

                </div>
                <div className="header-name">
                    <span><img id="header-logo" src={logo} onClick={() => { navigate("/", { replace: true }) }} /></span>
                </div>
                <div className="header-account-cart">
                    <div id="header-account">
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <RiAccountBoxLine />
                            </div>
                        </IconContext.Provider>
                        <span onClick={() => { checkAuthentication() }} style={{ marginLeft: '10px', cursor: "pointer" }}>ACCOUNT</span>
                        {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}

                    </div>
                    <div id="header-cart">
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <IoCartOutline />
                            </div>
                        </IconContext.Provider>

                        <Link to="/cart" style={{ color: 'black', textDecoration: 'none' }}>
                            <span style={{ marginLeft: '10px', color: 'black' }}>CART ({cart.length})</span>
                        </Link>

                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'white ! important' }}>
                <Navbar variant="dark" className="header-nav-bar" >
                    <Container>

                        <Nav className="me-auto, header-categories" >
                            <Nav.Link style={{ color: "black" }}>

                                <div style={{ fontFamily: 'serif' }}>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <span style={{ fontSize: '16px', color: 'black', fontFamily: 'serif' }}>SHOP BY COLLECTION</span>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}

                                    >
                                        <MenuItem>
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/active-wear">
                                                Active Wear
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/coats-jackets">
                                                Coats & Jackets
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/dresses">
                                                Dresses
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/skirts">
                                                Skirts
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/sweaters">
                                                Sweaters
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/tops">
                                                Tops
                                            </Link>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Nav.Link>
                            <Nav.Link style={{ color: "black" }}>

                                <div style={{ fontFamily: 'serif' }}>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <span style={{ fontSize: '16px', color: 'black', fontFamily: 'serif' }}>SHOP BY TYPE</span>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}

                                    >
                                        <MenuItem>
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/active-wear">
                                                Active Wear
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/coats-jackets">
                                                Coats & Jackets
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/dresses">
                                                Dresses
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/skirts">
                                                Skirts
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/sweaters">
                                                Sweaters
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/tops">
                                                Tops
                                            </Link>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Nav.Link>

                            <Nav.Link style={{ color: "black" }}>

                                <div style={{ fontFamily: 'serif' }}>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <span style={{ fontSize: '16px', color: 'black', fontFamily: 'serif' }}>SHOP BY CATEGORY</span>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}

                                    >
                                        <MenuItem>
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/active-wear">
                                                Active Wear
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/coats-jackets">
                                                Coats & Jackets
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/dresses">
                                                Dresses
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/skirts">
                                                Skirts
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/sweaters">
                                                Sweaters
                                            </Link>
                                        </MenuItem>
                                        <MenuItem >
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to="/products/tops">
                                                Tops
                                            </Link>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Nav.Link>


                            {/* <Nav.Link style={{ color: "black" }} href="#features">SHOP BY TYPE</Nav.Link> */}
                            {/* <Nav.Link style={{ color: "black" }} href="#pricing">ACCESSORIES</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;