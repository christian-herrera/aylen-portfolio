import { Outlet } from "react-router-dom";

import "../styles/public_footer.css";

export default function PublicLayout() {
    return (
    <>
        <Outlet />
        <footer className="site-footer">
            <div className="container">
                <div className="row g-4 align-items-start">
                    <div className="col-12 col-lg-6">
                        <h5 className="footer-title">Contacto</h5>
                        <ul className="list-unstyled mb-0 footer-list">
                            <li>
                                <i className="bi bi-envelope me-2"></i>
                                <a className="text-decoration-none" href="mailto:aylen.herrera8@gmail.com">
                                    aylen.herrera8@gmail.com
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-telephone me-2"></i>
                                <a className="text-decoration-none" href="tel:+5491112345678">
                                    +54 9 11 1234 5678
                                </a>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt me-2"></i>
                                La Plata, Argentina
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h5 className="footer-title">Redes</h5>
                        <div className="d-flex flex-wrap gap-2 footer-socials">
                            <a className="social-link" href="https://www.instagram.com/aylen__herrera/" target="_blank" rel="noreferrer">
                                <i className="bi bi-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a className="social-link" href="https://www.linkedin.com/in/aylen-herrera/" target="_blank" rel="noreferrer">
                                <i className="bi bi-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a className="social-link" href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
                                <i className="bi bi-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} Aylen Elizabeth Herrera · Lic. en Obstetricia
                </div>
            </div>
        </footer>
    </>
    );
}