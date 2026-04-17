import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import fallbackData from './ourWork.json';
import './OurWorks.css';

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <ArrowRight size={24} />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <ArrowLeft size={24} />
    </div>
  );
};

const OurWorks = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const worksRef = collection(db, 'our_works');
        const q = query(worksRef, orderBy('name', 'asc'));
        const snap = await getDocs(q);
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (list.length > 0) setItems(list);
        else setItems(fallbackData);
      } catch (e) {
        console.error('Error fetching works:', e);
        setItems(fallbackData);
      } finally {
        setLoading(false);
      }
    };
    fetchWorks();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <section className="our-works-premium">
      <div className="bg-mesh"></div>
      
      <div className="container">
        {/* Header (Previous Design) */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="works-title-enhanced" style={{ color: '#1e1e2f', fontWeight: '700' }}>
                Our Works
              </h2>
              <div className="header-badge my-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-dot" style={{ width: '10px', height: '10px', background: '#ff4d6d', borderRadius: '50%' }}></span>
                <span style={{ color: '#6c757d', fontWeight: '500' }}>Check out our awesome works</span>
                <span className="badge-dot" style={{ width: '10px', height: '10px', background: '#ff4d6d', borderRadius: '50%' }}></span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Content */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Slider {...sliderSettings}>
              {items.map((item) => (
                <div key={item.id} className="work-item-wrapper">
                  <div className="premium-work-card">
                    <div className="work-image-container">
                      <img src={item.img} alt={item.name} loading="lazy" />
                      <div className="work-info-overlay">
                        <span className="work-category">Web Experience</span>
                        <h4 className="work-name">{item.name}</h4>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="work-action-btn"
                        >
                          View Case Study <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurWorks;

