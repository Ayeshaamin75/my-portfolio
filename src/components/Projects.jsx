import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Land Interior Design",
            images: [
                { src: "/images/project1-1.png" },
                { src: "/images/project1-2.png" }
            ],
            description: "Modern interior design platform with 50-day delivery guarantee, 1500+ happy customers, and online consultation booking system.",
            technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Node.js"]
        },
        {
            id: 2,
            title: "About Me Portfolio",
            images: [
                { src: "/images/project2-1.png" },
                { src: "/images/project2-2.png" }
            ],
            description: "Professional portfolio website showcasing design skills, services, testimonials, and complete project details.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Design"]
        },
        {
            id: 3,
            title: "Task Management App",
            images: [
                { src: "/images/project3-1.png" },
                { src: "/images/project3-2.png" }
            ],
            description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
            technologies: ["React", "Firebase", "Material-UI", "CSS", "Javascript"]
        },
        {
            id: 4,
            title: "Portfolio Website",
            images: [
                { src: "/images/project4-1.png" },
                { src: "/images/project4-2.png" }
            ],
            description: "Clean and responsive portfolio website template with project showcase, skills section, and contact form.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
        },
        {
            id: 5,
            title: "My Story Portfolio",
            images: [
                { src: "/images/project5-1.png" },
                { src: "/images/project5-2.png" }
            ],
            description: "One-page HTML portfolio template based on Bootstrap for personal branding and project showcase.",
            technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "Responsive"]
        },
        {
            id: 6,
            title: "DevOps Dashboard",
            images: [
                { src: "/images/project6-1.PNG" }
            ],
            description: "Technical dashboard showing DevOps concepts, full stack developer roadmap, and web development trends.",
            technologies: ["React", "Node.js", "MongoDB", "Javascript", "API"]
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">Showcasing my latest web development work and technologies used</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-images-container">
                                <div className={`images-wrapper ${project.images.length === 1 ? 'single-image' : 'multiple-images'}`}>
                                    {project.images.map((img, index) => (
                                        <div 
                                            key={index} 
                                            className={`image-container ${project.id === 4 ? 'project4-images' : ''} ${project.id === 5 && index === 0 ? 'project5-image1' : ''}`}
                                        >
                                            <img 
                                                src={img.src} 
                                                alt={`${project.title} - View ${index + 1}`}
                                                className={`project-image ${project.id === 4 ? 'project4-img' : ''} ${project.id === 5 && index === 0 ? 'project5-img1' : ''}`}
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/400x250/112240/64ffda?text=${project.title}`;
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-title-wrapper">
                                    <h3 className="project-title">{project.title}</h3>
                                </div>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="tech-tags">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;