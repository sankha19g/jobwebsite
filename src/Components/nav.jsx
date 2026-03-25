import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./nav.css";

const Nav = ({ onSearchClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav className='navbar'>
            <div className="logo">
                <img src="data:image/png;base64,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" alt="Brand Logo" />
            </div>

            <div className="mobile-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
            </div>

            <div className={`navbuttons ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => { onSearchClick(); closeMenu(); }} style={{ cursor: 'pointer' }}>Search</li>
                    <li onClick={closeMenu}>Home</li>
                    <li className='clicked' onClick={closeMenu}>Jobs</li>
                    <li onClick={closeMenu}>Bookmarks</li>
                    <li onClick={closeMenu}>Profile</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;