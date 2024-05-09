import './App.css';
import { Header } from './layout/header/Header';
import { Footer } from './layout/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="h-full">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default App;
