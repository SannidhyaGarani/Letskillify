import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="modern-preloader">
      {/* Dynamic Background Noise/Texture */}
      <div className="noise-overlay"></div>
      
      {/* Animated Background Gradients */}
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>

      <div className="loader-content">
        <motion.div 
          className="logo-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="logo-glow"></div>
          <img 
            src="https://letskillify.com/assets/images/icon/ls-nav.png" 
            alt="LetSkillify" 
            className="main-logo"
          />
          <div className="orbit-rings">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        </motion.div>

        <div className="info-section">
          <motion.h2 
            className="brand-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            LET<span>SKILLIFY</span>
          </motion.h2>

          <div className="progress-container">
            <div className="progress-meta">
              <span className="loading-label">Initializing Systems</span>
              <span className="percentage">{Math.min(progress, 100)}%</span>
            </div>
            <div className="progress-track">
              <motion.div 
                className="progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              ></motion.div>
            </div>
          </div>

          <motion.div 
            className="status-messages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="status-item">Optimizing assets...</p>
            <p className="status-item">Securing connection...</p>
            <p className="status-item">Building experience...</p>
          </motion.div>
        </div>
      </div>

      {/* Decorative footer elements */}
      <div className="preloader-footer">
        <div className="footer-line"></div>
        <span className="version-tag">VER 4.2.0</span>
      </div>
    </div>
  );
};

export default Preloader;