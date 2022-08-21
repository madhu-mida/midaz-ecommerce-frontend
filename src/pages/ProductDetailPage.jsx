import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';


const ProductDetailPage = () => {
    const pdpImgArray = JSON.parse("[\"https://n.nordstrommedia.com/id/sr3/13f1dca5-8f4b-4126-a485-4bbd129488ad.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196\",\"https://n.nordstrommedia.com/id/sr3/c6d2ecd1-5a0a-4fc5-a704-a992af643498.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196\",\"https://n.nordstrommedia.com/id/sr3/4dedb243-c16a-45a5-a8b2-cb6dc77d122d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196\"]")

    const [bigImage, setBigImage] = useState(pdpImgArray[0])

    const [selectedSize, setSelectedSize] = useState("")

    const handleClick = (imgUrl) => {
        setBigImage(imgUrl)
    }

    return (
        <div className="product-detail-page">
            <div>
                <Row>
                    <Col xs={12} md={8} lg={6}>
                        <div className="product-detail-page-prod-images">
                            <Row>
                                <Col>
                                    {
                                        pdpImgArray.map((element, index) => {
                                            return (
                                                <Row>
                                                    <Col>
                                                        <img src={element} alt={`img-${index}`} className="pdp-images" onClick={() => {
                                                            handleClick(element)
                                                        }} />
                                                    </Col>
                                                </Row>
                                            )
                                        })
                                    }
                                </Col>
                                <Col xs={10}>
                                    {
                                        <img src={bigImage} alt="bigImage" className="pdp-big-img" />
                                    }
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={6}>
                        <div role="presentation" onClick={handleClick} className="pdp-breadcrumbs-top">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/"
                                >
                                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                    MUI
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/"
                                >

                                    Category
                                </Link>
                                <Typography
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="text.primary"
                                >

                                    Product ID
                                </Typography>
                            </Breadcrumbs>
                        </div>

                        <div className="pdp-product-name">
                            <h2 id="pdp-prod-name">PRODUCT NAME</h2>
                        </div>

                        <div className="pdp-size">
                            <div className="pdp-size-name">
                                <span id="pdp-sizeName">Size</span>
                            </div>
                            <div className="pdp-size-names" style={{ marginTop: '5px' }}>
                                <div className={`pdp-size-box ${selectedSize === 'XS' ? 'pdp-on-click-size-box' : ''}`} onClick={() => { setSelectedSize('XS') }}> XS</div>
                                <div className={`pdp-size-box ${selectedSize === 'S' ? 'pdp-on-click-size-box' : ''}`} onClick={() => { setSelectedSize('S') }}>S</div>
                                <div className={`pdp-size-box ${selectedSize === 'M' ? 'pdp-on-click-size-box' : ''}`} onClick={() => { setSelectedSize('M') }}>M</div>
                                <div className={`pdp-size-box ${selectedSize === 'L' ? 'pdp-on-click-size-box' : ''}`} onClick={() => { setSelectedSize('L') }}>L</div>
                                <div className={`pdp-size-box ${selectedSize === 'XL' ? 'pdp-on-click-size-box' : ''}`} onClick={() => { setSelectedSize('XL') }}>XL</div>
                                <div className={`pdp-size-box ${selectedSize === 'XXL' ? 'pdp-on-click-size-box' : ''}`} onClick={() => { setSelectedSize('XXL') }}>XXL</div>
                            </div>
                        </div>

                        <div className="pdp-price-section">
                            <div className="pdp-price-name">
                                <span id="pdp-sizeName">Price</span>
                            </div>
                            <div className="pdp-price-amount" style={{ marginTop: '5px' }}>
                                $<span>23</span>
                            </div>
                        </div>

                        <div className="pdp-add-to-cart">
                            <Button
                                style={{
                                    backgroundColor: '#fc5884',
                                    border: 'none',
                                    width: '256px',
                                    fontSize: '18px',
                                    fontWeight: '700'
                                }}>
                                Add to Cart
                            </Button>
                        </div>


                        <div className="product-detail-page-prod-details">
                            <div className="pdp-size-details">
                                <p>Please refer to the sizing below before placing your order, and select the desired size from variants:&nbsp;</p>
                                <p>XS:&nbsp; Shoulder- 13.5”; Bust- 32”; Waist- 28”; Hips- 38”;</p>
                                <p>S:&nbsp; Shoulder- 14”; Bust- 34”; Waist- 30”; Hips- 40”; </p>
                                <p>M:&nbsp; Shoulder- 14”; Bust- 36”; Waist- 32”; Hips- 42”;</p>
                                <p>L:&nbsp; Shoulder- 14.5”; Bust- 38”; Waist- 34”; Hips- 44”;</p>
                                <p>XL:&nbsp; Shoulder- 15”; Bust- 40”; Waist- 36”; Hips- 46”;</p>
                                <p>XXL:&nbsp; Shoulder- 15.5”; Bust- 42”; Waist- 38”; Hips- 48”;</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProductDetailPage