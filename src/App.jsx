import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './Components/Cartcontext';
import Services from './Pages/Services';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import CartPage from './Pages/CartPage';
import Menu from './Pages/Menu';
import Booking from './Pages/Booking';
import './App.css';
import './index.css';
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactPage'

function App(){
    
    return(
        <CartProvider>
            <BrowserRouter>
              <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/book" element={<Booking />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;