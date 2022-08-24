
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CategorySection from './components/home/CategorySection';
import Slider from "./components/home/Slider"
import Main from './components/Main';
import Account from './pages/Account';
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
        <Route path='/products/tops' element={<ProductListingPage catId='9002001' />} />
        <Route path='/products/coats-jackets' element={<ProductListingPage catId='9002002' />} />
        <Route path='/products/dresses' element={<ProductListingPage catId='9002003' />} />
        <Route path='/products/sweaters' element={<ProductListingPage catId='9002004' />} />
        <Route path='/products/active-wear' element={<ProductListingPage catId='9002005' />} />
        <Route path='/products/skirts' element={<ProductListingPage catId='9002006' />} />
        <Route path='/products/:search' />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirmation' element={<OrderConfirmation />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
