import { useState, useEffect } from "react";
import Logo from "frontend/src/assets/images/Logo.png";
import "frontend/src/components/layout/CSS/Header.css";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
    <header className="header">
    
        <div className="header-left">
            <Logo />
            <h1 className="app-name">Biblioteca</h1>
        </div>

    
        <nav className="header-right">
        {!isLoggedIn ? (
            <>
                <button onClick={() => alert("Ir a login")}>Login</button>
                <button onClick={() => alert("Ver biblioteca")}>Biblioteca</button>
            </>
        ) : (
            <>
                <button onClick={() => alert("Ver perfil")}>Perfil</button>
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </>
        )}
        </nav>
        </header>
    );
}