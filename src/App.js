
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CategorySection from './components/home/CategorySection';
import Slider from "./components/home/Slider"
import Main from './components/Main';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import OrderConfirmation from './pages/OrderConfirmation';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListingPage from './pages/ProductListingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductListingPage />} />
        <Route path='/product' element={<ProductDetailPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirmation' element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
