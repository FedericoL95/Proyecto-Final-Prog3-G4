import "frontend\src\components\layout\CSS\Footer.css";
import Logo from "frontend\src\assets\images\Logo.png";
import { useState, useEffect } from "react";



export default function Footer() {
    return (
    <footer className="footer">
        <p>© 2026 Biblioteca — Todos los derechos reservados</p>
        <div className="footer-links">
            <a href="/ayuda">Ayuda</a>
            <a href="/contacto">Contacto</a>
            <a href="/terminos">Términos</a>
        </div>
        </footer>
    );
}