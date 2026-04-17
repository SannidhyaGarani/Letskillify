import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ProjectForm = () => {
    return (
        <section className="project-form-section">
            <div className="form-mesh"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="project-form-container">
                            <div className="row g-5">
                                <div className="col-lg-5">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: true }}
                                    >
                                        <h2 className="form-title">Start Your <span>Journey</span> With Us.</h2>
                                        <p className="form-subtitle">
                                            Ready to elevate your digital presence? Send us your project details 
                                            and our consultants will reach out within 24 hours.
                                        </p>

                                        <div className="d-flex flex-column gap-3 mt-4">
                                            <div className="contact-method-card d-flex align-items-center gap-3">
                                                <div className="p-3 bg-primary bg-opacity-10 rounded-2xl">
                                                    <Mail className="text-primary" size={24} />
                                                </div>
                                                <div>
                                                    <h6 className="mb-0 fw-bold text-dark">Email Us</h6>
                                                    <p className="small text-muted mb-0">contact@letskillify.com</p>
                                                </div>
                                            </div>
                                            <div className="contact-method-card d-flex align-items-center gap-3">
                                                <div className="p-3 bg-primary bg-opacity-10 rounded-2xl">
                                                    <MessageSquare className="text-primary" size={24} />
                                                </div>
                                                <div>
                                                    <h6 className="mb-0 fw-bold text-dark">Live Support</h6>
                                                    <p className="small text-muted mb-0">Available 24/7 for you</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="col-lg-7">
                                    <form className="project-contact-form">
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="premium-input-group">
                                                    <label><User size={16} /> Full Name</label>
                                                    <input type="text" className="premium-input" placeholder="e.g. Alex Johnson" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="premium-input-group">
                                                    <label><Mail size={16} /> Email Address</label>
                                                    <input type="email" className="premium-input" placeholder="alex@creatives.com" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="premium-input-group">
                                                    <label><MessageSquare size={16} /> Project Details</label>
                                                    <textarea 
                                                        className="premium-input" 
                                                        rows="5" 
                                                        placeholder="Describe your vision, goals, and any specific requirements..."
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <motion.button 
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit" 
                                                    className="submit-btn-premium shadow-lg"
                                                >
                                                    Send Inquiry <Send size={20} />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectForm;
