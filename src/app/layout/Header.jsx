import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <nav>
                <div className="flex gap-4 bg-black text-white justify-between px-10 py-5">
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/profile'>Profile</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
