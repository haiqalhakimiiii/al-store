import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { ProductDetail } from './pages/ProductDetails';
import { Profile } from './pages/Profile';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/product-detail" element={<ProductDetail />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
