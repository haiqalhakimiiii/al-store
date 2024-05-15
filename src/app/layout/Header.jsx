import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <nav className="bg-[#382a81] text-white">
                <div className="w-3/5 mx-auto">
                    <div className="flex gap-4 justify-between py-5">
                        <div>
                            <Link to="/" className="flex gap-1 items-center font-bold tracking-widest">
                                <FontAwesomeIcon icon={faStore} />
                                AL-STORE
                            </Link>
                        </div>
                        <div>{isLogin ? <Link to="/profile">Profile</Link> : 'Login'}</div>
                    </div>
                </div>
            </nav>
        </>
    );
}
