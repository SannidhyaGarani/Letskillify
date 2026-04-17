import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles } from 'lucide-react';

const ProjectBanner = () => {
    return (
        <section className="project-banner">
            <div className="banner-mesh"></div>
            
            <div className="container project-banner-content">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <span className="p-2 bg-primary bg-opacity-10 rounded-circle text-primary">
                                    <Sparkles size={20} />
                                </span>
                                <span className="text-secondary fw-bold small text-uppercase tracking-wider">
                                    Our Portfolio
                                </span>
                            </div>

                            <h1>Our <span>Masterpieces</span>: Crafting the Future of Web.</h1>
                            
                            <p>
                                Explore our collection of premium digital experiences, where cutting-edge technology 
                                meets sophisticated design to deliver real business impact.
                            </p>

                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold d-flex align-items-center gap-2 border-0 shadow-lg"
                                style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                            >
                                Get Started <MousePointer2 size={18} />
                            </motion.button>
                        </motion.div>
                    </div>

                    <div className="col-lg-5 d-none d-lg-block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="position-relative"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" 
                                alt="Projects" 
                                className="img-fluid rounded-4 shadow-2xl"
                                style={{ transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' }}
                            />
                            <div className="position-absolute -bottom-10 -right-10 p-4 bg-white rounded-4 shadow-xl border border-light">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="h-12 w-12 bg-success bg-opacity-10 rounded-full flex items-center justify-center text-success">
                                        <span className="fw-bold">100%</span>
                                    </div>
                                    <span className="small fw-bold text-muted">Success Rate</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectBanner;
