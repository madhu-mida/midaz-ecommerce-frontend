import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <div className="Main">
            <Routes>
                <Route path="/products" />
                <Route path="/product" />
            </Routes>
        </div>
    );
}

export default Main;