import './App.css';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { useRoutes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { ProductDetail } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

function App() {
    const routes = useRoutes([
        {
            index: true,
            element: <Landing />,
        },
        {
            path: 'profile',
            element: <Profile />,
        },
        {
            path: 'product-detail/:id',
            element: <ProductDetail />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);

    return (
        <>
            <Header />
            <div className="w-3/5 mx-auto">{routes}</div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
