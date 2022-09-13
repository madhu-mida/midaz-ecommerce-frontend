import { Col, Row, Button } from "react-bootstrap";
import { RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri"
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
    const stateOrder = useSelector((state) => state.main.order);
    const stateUser = useSelector((state) => state.main.user)
    const dispatch = useDispatch();

    return (
        <div id="order-summary-page" style={{ background: '#f2f2f2' }}>
            <div id='order-summary' style={{ background: 'white' }}>
                <div>
                    <h3>Thanks for shopping!</h3>
                </div>
                <div>
                    <p>Hi {stateUser.firstName}, we have received your order and are getting it ready to be shipped.</p>
                    <p>We will notify you when it's on its way!</p>
                </div>
                <div className="order-icons">
                    <Row style={{ alignItems: 'center' }}>
                        <Col >
                            <div className="order-confirm-icons">
                                <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '2.5em' }}>
                                    <div>
                                        <RiShoppingBag3Line />
                                    </div>
                                </IconContext.Provider>

                            </div>
                        </Col>
                        <Col>
                            <hr />
                        </Col>
                        <Col  >
                            <div className="order-confirm-icons" style={{ opacity: '0.5' }}>
                                <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '2.5em' }}>
                                    <div>
                                        <MdOutlineLocalShipping />
                                    </div>
                                </IconContext.Provider>
                            </div>

                        </Col>
                        <Col><hr /></Col>
                        <Col >
                            <div className="order-confirm-icons" style={{ opacity: '0.5' }}>
                                <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '2.5em' }}>
                                    <div>
                                        <FiPackage />
                                    </div>
                                </IconContext.Provider>
                            </div>

                        </Col>
                    </Row>
                </div>
                <div className="order-summary-no-date" style={{ fontWeight: 'bold', marginTop: '14px' }}>
                    <div>
                        <span>Order No: &nbsp; {stateOrder.orderId}</span>
                    </div>
                    <div>
                        <span>Order Date: &nbsp; {moment().format('MMMM Do YYYY')}</span>
                    </div>
                </div>
                <div className="order-items" style={{ textAlign: 'left' }}>
                    {
                        stateOrder.products.map((element) => {
                            return (
                                <Row style={{ borderBottom: '1px solid #f2f2f2', marginTop: '10px' }}>
                                    <Col>
                                        <div className="cart-prod-img">
                                            <img className="checkout-product-thumbnail-img" src={element.img} alt="" ></img>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="cart-prod-details">
                                            <Row>
                                                <Col>
                                                    <div className="cart-prod-details-name">
                                                        <p style={{ fontSize: '17px' }}>{element.name}</p>
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

                                        </div>

                                    </Col>
                                    <Col>
                                        <div>{element.quantity}</div>
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

                <div className="order-confirm-shipping-total">
                    <Row>
                        <Col>
                            <div className="order-confirm-shipping-payment">
                                <h5 style={{ fontWeight: 'bold' }}>Payment & Shipping details</h5>
                                <div style={{ marginTop: '14px' }}>
                                    <Row>
                                        <Col style={{ fontWeight: 'bold' }}>
                                            <p>Payment Method</p>
                                        </Col>
                                        <Col >
                                            <p>Credit Card</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ fontWeight: 'bold' }}>
                                            <p>Delivered To</p>
                                        </Col>
                                        <Col>
                                            <p>{stateUser.firstName} {stateUser.lastName}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ fontWeight: 'bold' }}>
                                            <p>Delivery Address</p>
                                        </Col>
                                        <Col>
                                            <p>{stateOrder.shippigAddress.addressLine1}, {stateOrder.shippigAddress.addressLine2}, {stateOrder.shippigAddress.city}, {stateOrder.shippigAddress.state} - {stateOrder.shippigAddress.zipCode}</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col>
                            <div className="order-confirm-total" style={{ background: '#f2f2f2' }}>
                                <Row>
                                    <Col style={{ fontWeight: 'bold' }}>
                                        <p>Subtotal</p>
                                    </Col>
                                    <Col>
                                        <p>${stateOrder.orderSubTotal}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ fontWeight: 'bold' }}>
                                        <p>Shipping fee</p>
                                    </Col>
                                    <Col>
                                        <p>Free</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ fontWeight: 'bold' }}>
                                        <p>Tax(7%)</p>
                                    </Col>
                                    <Col>
                                        <p>${stateOrder.orderTax}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ fontWeight: 'bold' }}>
                                        <p>Total</p>
                                    </Col>
                                    <Col>
                                        <p>${stateOrder.orderTotal}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>


                </div>
                <div>
                    <Link to="/" style={{ textDecorationColor: 'black' }}>
                        <span style={{ color: 'black', textAlign: 'center' }}>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;