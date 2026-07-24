import "./CSS/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
    <footer className="footer">
        <p>© 2026 Biblioteca — Todos los derechos reservados</p>
        <div className="footer-links">
            <Link to="/faq">Ayuda</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/terminos">Términos</Link>
        </div>
    </footer>
    );
}
