import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <nav className="bg-[#301934] text-white">
                <div className="w-3/4 mx-auto">
                    <div className="flex gap-4 justify-between px-10 py-5">
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>{isLogin ? <Link to="/profile">Profile</Link> : 'Login'}</div>
                    </div>
                </div>
            </nav>
        </>
    );
}
