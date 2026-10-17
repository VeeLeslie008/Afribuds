import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import './App.css';
import './index.css';

function App(){
    
    return(
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;