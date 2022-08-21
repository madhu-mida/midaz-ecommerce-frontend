import { Col, Row, Button } from "react-bootstrap";
const Cart = () => {
    return (
        <div id="cart">
            <div className="cart-header" style={{ marginTop: '10px' }}>
                <h2>CART</h2>
            </div>
            <div className="cart-items">
                <Row>
                    <Col lg={7}>
                        <div className="cart-products">
                            <Row style={{ borderBottom: '1px solid #e8e8e1' }}>
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
                                        <Row>
                                            <Col>
                                                <div className="cart-prod-details-quantity">

                                                    <div className="cart-prod-details-quantity-inc">+</div>
                                                    <div>3</div>
                                                    <div className="cart-prod-details-quantity-dec">-</div>

                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className="cart-prod-details-remove">
                                                    <p style={{ fontSize: '16px', marginTop: '5px' }}>Remove</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="cart-prod-price">
                                        <p>$20</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                    <Col>
                        <div className="cart-checkout">
                            <div className="cart-checkout-box">
                                <div className="cart-checkout-box-subtotal">
                                    <div>
                                        SubTotal
                                    </div>
                                    <div>
                                        $100
                                    </div>
                                </div>
                                <div className="cart-checkout-box-checkout">
                                    <Button
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
                                        Continue Shopping
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


