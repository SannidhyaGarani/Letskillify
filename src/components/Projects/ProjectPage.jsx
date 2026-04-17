import React, { useEffect } from 'react';
import ProjectBanner from './ProjectBanner';
import ProjectListing from './ProjectListing';
import ProjectForm from './ProjectForm';
import './Projects.css';

const ProjectPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="project-page-wrapper">
            <ProjectBanner />
            <ProjectListing />
            
            {/* Additional Section: Technology Stack (Optional but adds value) */}
            <section className="tech-stack-preview py-5 bg-white">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center gap-5 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for tech icons or logos */}
                        <span className="fw-bold text-muted">REACT</span>
                        <span className="fw-bold text-muted">VITE</span>
                        <span className="fw-bold text-muted">FIREBASE</span>
                        <span className="fw-bold text-muted">TAILWIND</span>
                        <span className="fw-bold text-muted">FRAMER MOTION</span>
                    </div>
                </div>
            </section>

            <ProjectForm />
        </main>
    );
};

export default ProjectPage;
