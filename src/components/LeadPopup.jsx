import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Rocket, Sparkles } from 'lucide-react';
import './LeadPopup.css';

const LeadPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
        
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappNumber = "917987841662";
        const text = `*New Lead from LetSkillify!*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
        handleClose();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="popup-overlay">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="popup-content"
                    >
                        <button className="close-btn" onClick={handleClose}>
                            <X size={24} />
                        </button>

                        <div className="popup-grid">
                            <div className="popup-visual d-none d-md-flex">
                                <div className="visual-elements">
                                    <Sparkles className="sparkle-1" />
                                    <Rocket className="rocket-icon" />
                                    <div className="visual-circle"></div>
                                </div>
                                <div className="visual-text">
                                    <h3>Growth Starts Here</h3>
                                    <p>Join 100+ businesses who trusted us.</p>
                                </div>
                            </div>

                            <div className="popup-form-side">
                                <div className="form-header">
                                    <h2>Create your <span>Website</span></h2>
                                    <p>Boost your business with LetSkillify's expertise</p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="input-group-premium">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name" 
                                            required 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="input-group-premium">
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            placeholder="WhatsApp Number" 
                                            required 
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="input-group-premium">
                                        <textarea 
                                            name="message" 
                                            placeholder="Tell us about your project" 
                                            required 
                                            rows="3"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn-premium">
                                        Build My Website <Send size={18} className="ms-2" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
