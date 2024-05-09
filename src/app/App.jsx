import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { ProductDetail } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/product-detail/:id" element={<ProductDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
