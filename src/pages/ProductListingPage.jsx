import { Col, Row } from "react-bootstrap";
import { CCard, CCardImage, CCardText, CCardBody, CDropdown, CButton, CDropdownMenu, CDropdownDivider, CDropdownToggle, CDropdownItem } from "@coreui/react";
import { FiGrid } from "react-icons/fi"
import { FaRegSquare } from "react-icons/fa"
import { VscListFlat } from "react-icons/vsc"
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import SweetPagination from "sweetpagination";
import { Link } from "react-router-dom";


const ProductListingPage = ({ catId }) => {

    const [products, setProducts] = useState(null);
    const [currentPageData, setCurrentPageData] = useState(null);

    const URL = "http://localhost:4000/products/";



    const getProducts = async () => {
        const data = await fetch(URL + `${catId}`).then(res => res.json());
        setProducts(data);
        setCurrentPageData(data.slice(0, 11));
        console.log(data)
    }


    useEffect(() => {
        getProducts()
    }, [])
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

                    {
                        products && currentPageData && currentPageData.map((element) => {
                            return (
                                <Col>
                                    <CCard style={{
                                        width: '18rem', border: 'None', marginRight: 'auto',
                                        marginLeft: 'auto'
                                    }}>
                                        <Link style={{ textDecoration: "none" }} to={`/product/${element.productId}`}>
                                            <CCardImage orientation="top" src={element.imageUrl ? element.imageUrl : 'https://mrsldna.org/wp-content/uploads/2019/03/product-placeholder.gif'} />
                                        </Link>
                                        <CCardBody>
                                            <CCardText>
                                                <p>{element.name}</p>
                                                <p>$ {element.price}</p>
                                            </CCardText>
                                        </CCardBody>
                                    </CCard>
                                </Col>
                            );
                        })
                    }


                </Row>

                <Row>
                    {products && currentPageData && <SweetPagination
                        currentPageData={setCurrentPageData}
                        dataPerPage={12}
                        getData={products}
                        navigation={true}
                    //getStyle={'style-2'}
                    />}
                </Row>
            </div>

        </div>
    );
}

export default ProductListingPage;