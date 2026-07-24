import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./CSS/Header.css";

export default function Header() {
    const location = useLocation();
    const enBiblioteca = location.pathname === "/biblioteca";
    const logueado = !!localStorage.getItem("token");

    return (
    <header className="header">
        <Link to="/biblioteca" className="header-left">
            <img src={Logo} alt="Logo" />
            <h1 className="app-name">Biblioteca</h1>
        </Link>

        <nav className="header-right">
            <Link to="/biblioteca" className="header-link">
                {enBiblioteca ? "Inicio" : "Biblioteca"}
            </Link>
            <Link to={logueado ? "/perfil" : "/login"} className="header-link">
                {logueado ? "Perfil" : "Login"}
            </Link>
        </nav>
    </header>
    );
}
