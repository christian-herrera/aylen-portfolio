import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown <= 0) {
            navigate("/"); // redirecciona internamente sin recargar
            return;
        }
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown, navigate]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light" >
            <h1 className="fw-bold text-danger" style={{ fontSize: "5rem" }}>403</h1>
            <p className="lead text-muted">No estás autorizado para ver esta página</p>
            <p className="lead text-muted">Serás redirigido al home en {countdown} segundos...</p>
        </div>
    )
}