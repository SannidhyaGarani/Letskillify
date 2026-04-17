import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const ProjectListing = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const worksRef = collection(db, 'our_works');
                const q = query(worksRef, orderBy('name', 'asc'));
                const snap = await getDocs(q);
                const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                setProjects(list);
            } catch (e) {
                console.error('Error fetching projects:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="projects-listing-section">
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-lg-8 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="fw-bold mb-3 display-5" style={{ color: '#1e293b' }}>
                                Featured Projects
                            </h2>
                            <p className="text-muted fs-5">
                                A curated selection of our most impactful digital solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status"></div>
                    </div>
                ) : (
                    <motion.div 
                        className="projects-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project) => (
                            <motion.div 
                                key={project.id} 
                                className="project-card-premium"
                                variants={itemVariants}
                            >
                                <div className="project-card-image">
                                    <img src={project.img} alt={project.name} />
                                    <div className="position-absolute top-4 right-4">
                                        <div className="bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                                            <ExternalLink size={18} className="text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-body">
                                    <span className="project-card-tag">Web Development</span>
                                    <h3 className="project-card-title">{project.name}</h3>
                                   
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-card-link"
                                    >
                                        Explore Work <ArrowRight size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProjectListing;
