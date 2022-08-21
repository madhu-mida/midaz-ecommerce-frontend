import { Col, Row } from "react-bootstrap";
import { CCard, CCardImage, CCardText, CCardBody, CDropdown, CButton, CDropdownMenu, CDropdownDivider, CDropdownToggle, CDropdownItem } from "@coreui/react";
import { FiGrid } from "react-icons/fi"
import { FaRegSquare } from "react-icons/fa"
import { VscListFlat } from "react-icons/vsc"
import { IconContext } from "react-icons";

const ProductListingPage = () => {
    return (
        <div className="ProductListingPage">
            <div className="productListingPage-top-sort">
                <div>
                    <span>182 Products</span>
                </div>
                <div className="productListingPage-top-grid-dropdown">
                    <div className="productListingPage-top-dropdown">
                        <CDropdown variant="btn-group" direction="dropup">
                            <CDropdownToggle color="light">Sort</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Alphabatically, A-Z</CDropdownItem>
                                <CDropdownItem href="#">Alphabatically, Z-A</CDropdownItem>
                                <CDropdownItem href="#">Price, Low to High</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Price, High to Low</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </div>
                    <div className="productListingPage-top-sort-alignment">
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <FaRegSquare />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <FiGrid />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                            <div>
                                <VscListFlat />
                            </div>
                        </IconContext.Provider>



                    </div>
                </div>

            </div>
            <div className="productListingPage-products">
                <Row md={4} lg={4}>
                    <Col>
                        <CCard style={{
                            width: '18rem', border: 'None', marginRight: 'auto',
                            marginLeft: 'auto'
                        }}>
                            <CCardImage orientation="top" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06479_720x.jpg?v=1655797195" />
                            <CCardBody>
                                <CCardText>
                                    <p>Ziya Cotton</p>
                                    <p>$ 65</p>
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </Col>
                    <Col>
                        <CCard style={{ width: '18rem' }}>
                            <CCardImage orientation="top" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06363_720x.jpg?v=1655796706" />
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </Col>
                    <Col>

                        <CCard style={{ width: '18rem' }}>
                            <CCardImage orientation="top" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06363_720x.jpg?v=1655796706" />
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>

                    </Col>
                    <Col>

                        <CCard style={{ width: '18rem' }}>
                            <CCardImage orientation="top" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06363_720x.jpg?v=1655796706" />
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>

                    </Col>
                    <Col>

                        <CCard style={{ width: '18rem' }}>
                            <CCardImage orientation="top" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06363_720x.jpg?v=1655796706" />
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>

                    </Col>
                    <Col>

                        <CCard style={{ width: '18rem' }}>
                            <CCardImage orientation="top" src="https://cdn.shopify.com/s/files/1/2505/6452/products/DSC06363_720x.jpg?v=1655796706" />
                            <CCardBody>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>

                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default ProductListingPage;