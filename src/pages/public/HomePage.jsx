import { useEffect, useState } from "react";

// ==> Estilos
import "../../styles/homepage.css";

// ==> Componentes
import QualityCard from "../../components/QualityCard";

export default function HomePage() {
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImage = async () => {
            setLoading(true);
            const img = await import("../../assets/web_profile.png");
            setLogo(img.default);

            setTimeout(() => {
                setLoading(false);
            }, 1500);
        };
        loadImage();
    }, []);


    return (
        <div className="homepage">
            {/* Hero Section - Presentación Principal */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center g-3">
                        {/* Columna de Imagen */}
                        <div className="col-12 col-md-5 col-lg-4 text-center">
                            <div className="profile-image-container">
                                {/* Imagen de perfil */}
                                {loading ? (
                                    <div className="profile-loading-circle">
                                        <i className="bi bi-person-circle"></i>
                                    </div>
                                ) : (
                                    <img
                                        src={logo}
                                        alt="Foto de perfil profesional"
                                        className="profile-image profile-image-flip"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Columna de Información Personal */}
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="personal-info">
                                <h1 className="name-title">Aylén Elizabeth Herrera</h1>
                                <h2 className="profession-title">Licenciada en Obstetricia</h2>
                                <div className="matricula-badge">
                                    <span className="badge-label">Matrícula:</span>
                                    <span className="badge-number">M.P. 11.457</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Flecha de scroll */}
                <div
                    className="scroll-arrow"
                    onClick={() => {
                        document.querySelector('.about-section')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >
                    <i className="bi bi-chevron-down"></i>
                </div>
            </section>

            {/* About Section - Quién Soy */}
            <section className="about-section">
                <div className="container">
                    <h3 className="section-title">¿Quién soy?</h3>
                    <p className="about-text">
                        Soy Licenciada en Obstetricia, dedicada al acompañamiento integral de la mujer
                        en todas las etapas de su vida reproductiva. Mi vocación es brindar un cuidado
                        humano, profesional y respetuoso, acompañando cada momento con empatía y
                        conocimiento científico actualizado.
                    </p>
                </div>
            </section>

            {/* Cualidades Section */}
            <section className="qualities-section">
                <div className="container">
                    <h3 className="section-title">Mis Cualidades Profesionales</h3>
                    <div className="row g-4">
                        {/* Cualidad 1 */}
                        <QualityCard
                            iconClass="bi bi-heart-pulse"
                            title="Empatía y Calidez"
                            description="Acompañamiento cercano y humano en cada etapa del proceso, entendiendo las necesidades únicas de cada paciente."
                        />

                        {/* Cualidad 2 */}
                        <QualityCard
                            iconClass="bi bi-hospital"
                            title="Profesionalismo"
                            description="Formación continua y práctica basada en evidencia científica actualizada."
                        />
                                   

                        {/* Cualidad 3 */}
                        <QualityCard
                            iconClass="bi bi-person-hearts"
                            title="Vocación de Servicio"
                            description="Dedicación genuina al cuidado integral de la salud reproductiva de la mujer."
                        />
                                   

                        {/* Cualidad 4 */}
                        <QualityCard
                            iconClass="bi bi-shield-plus"
                            title="Confianza y Respeto"
                            description="Generación de un espacio seguro y confidencial para el cuidado de la salud."
                        />
                          

                        {/* Cualidad 5 */}
                        <QualityCard
                            iconClass="bi bi-clipboard-pulse"
                            title="Atención Integral"
                            description="Enfoque holístico considerando aspectos físicos, emocionales y sociales."
                        />
                                   

                        {/* Cualidad 6 */}
                        <QualityCard
                            iconClass="bi bi-people"
                            title="Trabajo en Equipo"
                            description="Colaboración con otros profesionales de la salud para brindar un cuidado integral."
                        />

                    </div>
                </div>
            </section>
        </div>
    );
}