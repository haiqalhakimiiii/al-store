import './App.css';
import { Header } from './layout/Header';
import { useRoutes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { ProductDetail } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

// library.add(faSortUp,faSortDown);

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
            <div className="w-3/5 mx-auto max-[425px]:w-full max-[425px]:px-2">{routes}</div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
