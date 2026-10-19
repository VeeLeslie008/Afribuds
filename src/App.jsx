import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './Components/Cartcontext';
import Home from './Pages/home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import CartPage from './Pages/CartPage';
import Menu from './Pages/Menu';
import './App.css';
import './index.css';

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
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;