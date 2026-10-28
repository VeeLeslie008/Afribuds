import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './Components/Cartcontext';
import Services from './Pages/Services';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import CartPage from './Pages/CartPage';
import Menu from './Pages/Menu';
import Booking from './Pages/Booking';
import TermsPage from './Pages/Terms';
import PrivacyPage from './Pages/PrivacyPage';
import CancellationPage from './Pages/CancellationPage';
import ScrollToTopButton from './Components/ScrollToTopButton';
import './App.css';
import './index.css';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactPage'
import ScrollToTop from './Components/ScrollToTop';

function App(){
    
    return(
        <CartProvider>
            <BrowserRouter>
              <ScrollToTop/>
              <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/book" element={<Booking />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/cancellation" element={<CancellationPage />} />
                </Routes>
                <ScrollToTopButton /> 
                <Footer/>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;