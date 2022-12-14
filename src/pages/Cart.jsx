import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { removeItem, increment, decrement } from "../reducer/mainReducer";
import { CgSmileSad } from "react-icons/cg";
import { IconContext } from "react-icons";

const Cart = () => {
    const { user, isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    let navigate = useNavigate();

    const cart = useSelector((state) => state.main.cart);
    const dispatch = useDispatch();

    const stateUser = useSelector((state) => state.main.user)

    const URL = " https://ecom-midaz-ms-95.herokuapp.com/cart";

    const updateCart = async () => {
        console.log("Update Cart is Called")
        if (isAuthenticated) {
            const cartData = {
                "products": cart,
                "user": stateUser?._id
            }
            console.log("cartData", cartData)
            let updatedCart = await fetch(URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(cartData),
            }).then(res => res.json())
            console.log("updatedCart", updatedCart)

        }
    }

    const [subTotal, setSubTotal] = useState("");

    function calculateSubTotal() {
        let sum = 0
        cart.map(element => {
            console.log("cartElement", element.price)
            sum += (element.price * element.quantity)
        })
        setSubTotal(sum)
        console.log("SubTotal", subTotal)
    }

    function checkAuthentication() {
        console.log("Clicked")
        if (isAuthenticated) {
            console.log("You are authenticated")
            navigate("/checkout", { replace: true });
        } else {
            loginWithRedirect();
        }
    }


    useEffect(() => {
        updateCart()
        calculateSubTotal()
    }, [cart])

    return (
        <div id="cart">
            <div className="cart-header" style={{ marginTop: '10px' }}>
                <h2>CART</h2>
            </div>
            <div className="cart-items">
                <Row>
                    <Col lg={7}>
                        {cart && cart.length > 0 ? <div className="cart-products">
                            {
                                cart.map((element) => {
                                    return (
                                        <Row style={{ borderBottom: '1px solid #e8e8e1', marginTop: '10px' }}>

                                            <Col>
                                                <div className="cart-prod-img">
                                                    <img className="checkout-product-thumbnail-img" src={element.img} alt={element.name} ></img>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="cart-prod-details">
                                                    <Row>
                                                        <Col>
                                                            <div className="cart-prod-details-name">
                                                                <Link to={`/product/${element.productId}`} style={{ color: 'black', textDecoration: 'none' }}>
                                                                    <p style={{ fontSize: '17px' }}>{element.name}</p>
                                                                </Link>

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <div className="cart-prod-details-size">
                                                                <p style={{ fontSize: '14px' }}>Size: {element.size}</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <div className="cart-prod-details-quantity">

                                                                <div className="cart-prod-details-quantity-inc" >
                                                                    <Button
                                                                        style={{ background: 'transparent', border: '0', color: 'black' }}
                                                                        disabled={element.quantity === 1 ? true : false}
                                                                        onClick={() => { dispatch(decrement(element)) }} >
                                                                        -
                                                                    </Button>
                                                                </div>
                                                                <div>
                                                                    <input
                                                                        className="cart-element-quantity"
                                                                        disabled={true}
                                                                        value={element.quantity}>
                                                                    </input>

                                                                </div>
                                                                <div className="cart-prod-details-quantity-dec" >
                                                                    <Button style={{ background: 'transparent', border: '0', color: 'black' }}
                                                                        onClick={() => { dispatch(increment(element)) }}
                                                                    >
                                                                        +
                                                                    </Button></div>

                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <div className="cart-prod-details-remove">
                                                                <a style={{ fontSize: '16px', marginTop: '5px', color: 'black', textDecoration: 'none' }}
                                                                    href="" onClick={() => { dispatch(removeItem(element)) }}>Remove</a>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </Col>
                                            <Col>
                                                <div className="cart-prod-price">
                                                    <p>${element.price * element.quantity}</p>
                                                    <p style={{ fontSize: '12px', fontWeight: '400' }}>${element.price} each</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }

                        </div>
                            : <IconContext.Provider value={{ size: "1.2em", className: "global-class-name" }}>
                                <div>
                                    <span style={{ fontSize: '20px' }}>Your cart is empty &nbsp;</span><CgSmileSad />
                                </div>
                            </IconContext.Provider>
                        }

                    </Col>
                    <Col>
                        <div className="cart-checkout">
                            <div className="cart-checkout-box">
                                <div className="cart-checkout-box-subtotal">
                                    <div>
                                        SubTotal
                                    </div>
                                    <div>
                                        ${subTotal}
                                    </div>
                                </div>
                                <div className="cart-checkout-box-checkout">

                                    <Button
                                        disabled={!cart.length}
                                        onClick={() => {
                                            checkAuthentication()
                                        }}
                                        style={{
                                            backgroundColor: '#fc5884',
                                            border: 'none',
                                            width: '360px',
                                            height: '50px',
                                            fontSize: '18px',
                                            fontWeight: '700'
                                        }}>

                                        Check out
                                    </Button>


                                    <Button
                                        style={{
                                            backgroundColor: 'white',
                                            border: 'none',
                                            width: '360px',
                                            height: '50px',
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            color: 'black',
                                            marginTop: '10px'
                                        }}>
                                        <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
                                            Continue Shopping
                                        </Link>
                                    </Button>
                                </div>
                                <div style={{ fontSize: '0.85em', marginTop: '5px' }}>
                                    Shipping, taxes, and discount codes calculated at checkout.
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Cart;


