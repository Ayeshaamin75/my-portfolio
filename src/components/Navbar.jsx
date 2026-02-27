// // import { useState, useContext } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../context/AuthContext';
// // import '../styles/Navbar.css';

// // const Navbar = () => {
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const { user, logout } = useContext(AuthContext);
// //     const navigate = useNavigate();

// //     const handleLogout = () => {
// //         logout();
// //         navigate('/');
// //     };

// //     return (
// //         <nav className="navbar">
// //             <div className="container">
// //                 <div className="nav-content">
// //                     <Link to="/" className="logo">
// //                         <span className="logo-text">Portfolio</span>
// //                     </Link>

// //                     <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
// //                         <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
// //                         <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
// //                         <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
// //                         <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
// //                         <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        
// //                         {user ? (
// //                             <>
// //                                 <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
// //                                 <button className="logout-btn" onClick={handleLogout}>Logout</button>
// //                             </>
// //                         ) : (
// //                             <Link to="/login" className="auth-btn">Login</Link>
// //                         )}
// //                     </div>

// //                     <button 
// //                         className="menu-toggle" 
// //                         onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                     >
// //                         <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
// //                             <span></span>
// //                             <span></span>
// //                             <span></span>
// //                         </div>
// //                     </button>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;















// import { useState } from 'react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//             setIsMenuOpen(false);
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <div className="nav-content">
//                     <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
//                         <span className="logo-text">Portfolio</span>
//                     </a>

//                     <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//                         <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
//                         <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
//                         <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
//                         <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
//                         <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
//                     </div>

//                     <button 
//                         className="menu-toggle" 
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // "certificates" ko list mein add kar diya gaya hai
            const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <a 
                        href="#home" 
                        className="logo" 
                        onClick={(e) => { 
                            e.preventDefault(); 
                            scrollToSection('home'); 
                        }}
                    >
                        <span className="logo-text">MyPortfolio</span>
                    </a>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a 
                            href="#home" 
                            className={activeSection === 'home' ? 'active' : ''}
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection('home'); 
                            }}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className={activeSection === 'about' ? 'active' : ''}
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection('about'); 
                            }}
                        >
                            About
                        </a>
                        <a 
                            href="#projects" 
                            className={activeSection === 'projects' ? 'active' : ''}
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection('projects'); 
                            }}
                        >
                            Projects
                        </a>
                        <a 
                            href="#skills" 
                            className={activeSection === 'skills' ? 'active' : ''}
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection('skills'); 
                            }}
                        >
                            Skills
                        </a>
                        
                        {/* Naya Certificates Tab yahan add kiya gaya hai */}
                        <a 
                            href="#certificates" 
                            className={activeSection === 'certificates' ? 'active' : ''}
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection('certificates'); 
                            }}
                        >
                            Certificates
                        </a>

                        <a 
                            href="#contact" 
                            className={activeSection === 'contact' ? 'active' : ''}
                            onClick={(e) => { 
                                e.preventDefault(); 
                                scrollToSection('contact'); 
                            }}
                        >
                            Contact
                        </a>
                    </div>

                    <button 
                        className="menu-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;