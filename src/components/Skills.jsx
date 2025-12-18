import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 88 },
        { name: "MS Word", icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png", level: 90 },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 78 },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 75 },
        { name: "MS Excel", icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png", level: 85 },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85 },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 78 },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 85 },
        { name: "PowerPoint", icon: "https://cdn-icons-png.flaticon.com/512/732/732220.png", level: 88 }
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <div className="skills-header">
                    <h2 className="section-title">My Skills</h2>
                    <p className="section-subtitle">
                        I have developed a diverse skill set through hands-on experience with various web technologies and tools. 
                        My expertise spans front-end and back-end development, along with proficiency in Microsoft Office applications. 
                        I continuously enhance my abilities by staying updated with the latest industry trends and best practices.
                    </p>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon">
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="skill-icon-img"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/50/112240/64ffda?text=${skill.name.charAt(0)}`;
                                    }}
                                />
                            </div>
                            <div className="skill-info">
                                <div className="skill-name-container">
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-level" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;