import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-header">
                    <h2 className="section-title">About <span className="highlight">Me</span></h2>
                    <p className="section-subtitle">Let me introduce myself</p>
                </div>
                
                <div className="about-content">
                    <div className="about-intro">
                        <div className="intro-text">
                            <h3>Hello, I'm <span className="name">Hajra Amin</span></h3>
                            <p>
                                I'm a passionate <span className="highlight-text">web developer</span> with expertise in creating 
                                dynamic, responsive, and user-friendly web applications. My journey 
                                started with curiosity and has grown into a full-fledged passion.
                            </p>
                            <p>
                                I specialize in modern web technologies and always stay updated 
                                with the latest trends and best practices in the industry.
                            </p>
                        </div>
                        
                        <div className="stats-container">
                            <div className="stat-box">
                                <div className="stat-number">50+</div>
                                <div className="stat-title">Projects</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">2+</div>
                                <div className="stat-title">Years</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">100%</div>
                                <div className="stat-title">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-approach">
                        <div className="approach-box">
                            <h4 className="approach-title">My Approach</h4>
                            <div className="approach-items">
                                <div className="approach-item">
                                    <div className="approach-icon">✓</div>
                                    <div className="approach-text">
                                        <h5>Clean Code</h5>
                                        <p>Writing maintainable and efficient code</p>
                                    </div>
                                </div>
                                <div className="approach-item">
                                    <div className="approach-icon">✓</div>
                                    <div className="approach-text">
                                        <h5>Responsive Design</h5>
                                        <p>Perfect on all devices and screen sizes</p>
                                    </div>
                                </div>
                                <div className="approach-item">
                                    <div className="approach-icon">✓</div>
                                    <div className="approach-text">
                                        <h5>User Focused</h5>
                                        <p>Creating intuitive user experiences</p>
                                    </div>
                                </div>
                                <div className="approach-item">
                                    <div className="approach-icon">✓</div>
                                    <div className="approach-text">
                                        <h5>Modern Tech</h5>
                                        <p>Using latest tools and frameworks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;