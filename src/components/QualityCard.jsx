// src/components/QualityCard.jsx

export default function QualityCard({ iconClass, title, description }) {
    return (
        <div className={`col-12 col-md-6 col-lg-4`}>
            <div className="card quality-card h-100">
                <div className="card-body">
                    <div className="quality-icon">
                        <i className={iconClass}></i>
                    </div>
                    <h4 className="quality-title">{title}</h4>
                    <p className="quality-description">{description}</p>
                </div>
            </div>
        </div>
    );
}