import { Col, Row, Button } from "react-bootstrap";
import { RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri"
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { IconContext } from "react-icons";

const OrderConfirmation = () => {
    return (
        <div id="order-summary-page" style={{ background: '#f2f2f2' }}>
            <div id='order-summary' style={{ background: 'white' }}>
                <div>
                    <h3>Thanks for shopping!</h3>
                </div>
                <div>
                    <p>Hi Madhu, we have received your order and are getting it ready to be shipped.</p>
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
                        <span>Order No: &nbsp; 12345</span>
                    </div>
                    <div>
                        <span>Order Date: &nbsp; Aug.1,2022</span>
                    </div>
                </div>
                <div className="order-items" style={{ textAlign: 'left' }}>
                    <Row style={{ borderBottom: '1px solid #f2f2f2', marginTop: '10px' }}>
                        <Col>
                            <div className="cart-prod-img">
                                <img className="checkout-product-thumbnail-img" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06381_120x.jpg?v=1655796706" alt="" ></img>
                            </div>
                        </Col>
                        <Col>
                            <div className="cart-prod-details">
                                <Row>
                                    <Col>
                                        <div className="cart-prod-details-name">
                                            <p style={{ fontSize: '17px' }}>Product Name</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="cart-prod-details-size">
                                            <p style={{ fontSize: '14px' }}>Size: XS</p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>

                        </Col>
                        <Col>
                            <div>3</div>
                        </Col>
                        <Col>
                            <div className="cart-prod-price">
                                <p>$20</p>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{ borderBottom: '1px solid #f2f2f2', marginTop: '10px' }}>
                        <Col>
                            <div className="cart-prod-img">
                                <img className="checkout-product-thumbnail-img" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06381_120x.jpg?v=1655796706" alt="" ></img>
                            </div>
                        </Col>
                        <Col>
                            <div className="cart-prod-details">
                                <Row>
                                    <Col>
                                        <div className="cart-prod-details-name">
                                            <p style={{ fontSize: '17px' }}>Product Name</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="cart-prod-details-size">
                                            <p style={{ fontSize: '14px' }}>Size: XS</p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>

                        </Col>
                        <Col>
                            <div>3</div>
                        </Col>
                        <Col>
                            <div className="cart-prod-price">
                                <p>$20</p>
                            </div>
                        </Col>
                    </Row>
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
                                            <p>Madhumida Sanjeev</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ fontWeight: 'bold' }}>
                                            <p>Delivery Address</p>
                                        </Col>
                                        <Col>
                                            <p>555 Laurie Ln, Apt B9, Thousand Oaks, CA - 91360</p>
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
                                        <p>$100</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ fontWeight: 'bold' }}>
                                        <p>Shipping fee</p>
                                    </Col>
                                    <Col>
                                        <p>$0</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ fontWeight: 'bold' }}>
                                        <p>Total</p>
                                    </Col>
                                    <Col>
                                        <p>$100</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;