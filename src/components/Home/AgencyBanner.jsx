import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Clock, Layout } from 'lucide-react';
import './AgencyBanner.css';

const AgencyBanner = () => {
    return (
        <section className="agency-premium-wrapper">
            <div className="agency-mesh"></div>
            
            <div className="container position-relative z-index-10">
                <div className="row align-items-center g-5">
                    {/* Content Left */}
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="banner-badge mb-4">
                                <span className="badge-dot-live"></span>
                                <span className="text-secondary fw-bold small text-uppercase tracking-wider">
                                    Premium Web Agency
                                </span>
                            </div>

                            <h2 className="banner-title">
                                We Build <span>Premium</span> <br />
                                & High-Performance Websites.
                            </h2>

                            <p className="banner-desc">
                                From concept to launch, we craft digital flagships that drive real business growth. 
                                Our experts have meticulously delivered over <b>20 premium websites</b> with 
                                sophisticated designs and industry-leading performance.
                            </p>

                            <div className="row g-3 mb-5">
                                <div className="col-sm-6">
                                    <div className="stats-premium-card p-3 shadow-none border-0 bg-white bg-opacity-50">
                                        <div className="stat-icon-wrapper bg-primary bg-opacity-10 text-primary">
                                            <Layout size={24} />
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">20+</h5>
                                            <p className="text-muted small mb-0">Websites Created</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stats-premium-card p-3 shadow-none border-0 bg-white bg-opacity-50">
                                        <div className="stat-icon-wrapper bg-warning bg-opacity-10 text-warning">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">Fast</h5>
                                            <p className="text-muted small mb-0">Rapid Turnaround</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-search-premium d-flex align-items-center gap-2 border-0"
                                style={{ padding: '15px 35px' }}
                            >
                                Get Your Project Started <ExternalLink size={18} />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image Right */}
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="video-wrapper-premium"
                            style={{ transform: 'perspective(1000px) rotateY(5deg)' }}
                        >
                            <div className="video-container shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                                    alt="Elite Web Development" 
                                    className="w-100 h-100 object-fit-cover"
                                />
                                <div className="position-absolute bottom-0 start-0 p-4 bg-white bg-opacity-75 backdrop-blur-md w-100 border-top">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-primary text-white p-2 rounded-circle">
                                            <CheckCircle size={20} />
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">Top Tier Quality</h6>
                                            <p className="text-muted small mb-0">Industry Leading Standards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgencyBanner;