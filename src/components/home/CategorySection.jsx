import active from "./category-images/active.jpeg";
import coats from "./category-images/coats.jpeg";
import dress from "./category-images/dress.jpeg";
import skirt from "./category-images/skirt.jpeg";
import tops from "./category-images/tops.jpeg";
import sweater from "./category-images/sweater.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CategorySection = () => {

    let navigate = useNavigate();

    return (
        <div className="category" style={{ padding: "40px" }}>
            <span style={{
                display: 'flex', marginLeft: '30px',
                fontSize: '24px'
            }}>SHOP BY CATEGORY</span>
            <div id="category-section">
                <div className="categrory-active-wear ">
                    <div className="category-each">
                        <img className="category-img" src={active} />
                    </div>
                    <div className="category-name">
                        <span onClick={() => navigate("/products/active-wear", { replace: true })}>ACTIVE WEAR</span>
                    </div>
                </div>
                <div className="categrory-coats-jackets">
                    <div className="category-each">
                        <img className="category-img" src={coats} />
                    </div>
                    <div className="category-name">
                        <span onClick={() => navigate("/products/coats-jackets", { replace: true })}>COATS & JACKETS</span>
                    </div>

                </div>
                <div className="categrory-dresses">
                    <div className="category-each">
                        <img className="category-img" src={dress} />
                    </div>
                    <div className="category-name">
                        <span onClick={() => navigate("/products/dresses", { replace: true })}>DRESSES</span>
                    </div>

                </div>
                <div className="categrory-skirts">
                    <div className="category-each">
                        <img className="category-img" src={skirt} />
                    </div>
                    <div className="category-name">
                        <span onClick={() => navigate("/products/skirts", { replace: true })}>SKIRTS</span>
                    </div>

                </div>
                <div className="categrory-sweaters">
                    <div className="category-each">
                        <img className="category-img" src={sweater} />
                    </div>
                    <div className="category-name">
                        <span onClick={() => navigate("/products/sweaters", { replace: true })}>SWEATERS</span>
                    </div>

                </div>
                <div className="categrory-tops">
                    <div className="category-each">
                        <img className="category-img" src={tops} />
                    </div>
                    <div className="category-name">
                        <span onClick={() => navigate("/products/tops", { replace: true })}>TOPS</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CategorySection;