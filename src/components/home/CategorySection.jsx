import active from "./category-images/active.jpeg";
import coats from "./category-images/coats.jpeg";
import dress from "./category-images/dress.jpeg";
import skirt from "./category-images/skirt.jpeg";
import tops from "./category-images/tops.jpeg";
import sweater from "./category-images/sweater.jpeg";


const CategorySection = () => {
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
                        <span>ACTIVE WEAR</span>
                    </div>
                </div>
                <div className="categrory-coats-jackets">
                    <div className="category-each">
                        <img className="category-img" src={coats} />
                    </div>
                    <div className="category-name">
                        <span>COATS & JACKETS</span>
                    </div>

                </div>
                <div className="categrory-dresses">
                    <div className="category-each">
                        <img className="category-img" src={dress} />
                    </div>
                    <div className="category-name">
                        <span>DRESSES</span>
                    </div>

                </div>
                <div className="categrory-skirts">
                    <div className="category-each">
                        <img className="category-img" src={skirt} />
                    </div>
                    <div className="category-name">
                        <span>SKIRTS</span>
                    </div>

                </div>
                <div className="categrory-sweaters">
                    <div className="category-each">
                        <img className="category-img" src={sweater} />
                    </div>
                    <div className="category-name">
                        <span>SWEATERS</span>
                    </div>

                </div>
                <div className="categrory-tops">
                    <div className="category-each">
                        <img className="category-img" src={tops} />
                    </div>
                    <div className="category-name">
                        <span>TOPS</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CategorySection;