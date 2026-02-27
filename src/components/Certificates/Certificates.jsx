import React from 'react';
import './Certificates.css';

const Certificates = () => {
    const certificates = [
        { 
    title: "Web Designing ", // As per certificate
    organization: "Saylani Mass IT Training (SMIT)", //
    date: "Nov 2024", // Completion date
    icon: "🌐", 
    link: "/images/web_design_certificate.pdf" // Jo link aapne Google Drive se copy kiya hai
},
        {
            title: "Artificial Intelligence",
            organization: "Nova Academy",
            date: "Oct 2025",
            icon: "🤖",
            link: "/images/AI tools.jpeg"
        },
        {
            title: "App Development Workshop",
            organization: "Nova Academy",
            date: "Oct 2025",
            icon: "📱",
            link: "/images/App development workshop.jpeg"
        },
     { 
    title: "Python Programming", 
    organization: "Stanford University", 
    date: "June 2025",
    icon: "🐍", 
    link: "https://codeinplace.stanford.edu/cip5/certificate/9cmii5" 
}
    ];

    return (
        <section className="certs-section" id="certificates">
            <div className="container">
                <div className="certs-header">
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        I have successfully completed various professional courses to enhance my technical expertise.
                    </p>
                </div>
                <div className="certs-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-org">{cert.organization}</p>
                                <div className="cert-footer">
                                    <span className="cert-date">{cert.date}</span>
                                    <a href={cert.link} target="_blank" rel="noreferrer" className="view-link">
                                        View Certificate <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;