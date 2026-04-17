import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Search } from "lucide-react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import './Banner.css';

export default function Banner() {
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, "courses"));
        const coursesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourses(coursesData);
        setFilteredCourses(coursesData);
        setTotalCourses(coursesData.length);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    const result = searchTerm
      ? courses.filter((course) =>
          course.title && course.title.toLowerCase().includes(searchTerm)
        )
      : courses;
    setFilteredCourses(result);
  };

  return (
    <>
      <section className="banner-premium-wrapper">
        <div className="banner-mesh"></div>
        
        {/* Animated Blobs */}
        <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
          <motion.div 
            className="floating-element"
            style={{ width: '400px', height: '400px', background: 'rgba(6, 106, 201, 0.1)', top: '-10%', left: '-5%' }}
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="floating-element"
            style={{ width: '300px', height: '300px', background: 'rgba(247, 195, 46, 0.1)', bottom: '10%', right: '5%' }}
            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container position-relative z-index-10">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6 col-xl-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="banner-badge">
                  <span className="badge-dot-live"></span>
                  <span className="text-secondary fw-semibold small text-uppercase tracking-wider">
                    Digital Excellence Hub
                  </span>
                </div>

                <h1 className="banner-title">
                  Empowering Futures: <br />
                  <span>
                    <TypeAnimation
                      sequence={[
                        "We Teach Full Stack",
                        2000,
                        "We Build Premium Websites",
                        2000,
                        "We Create Digital Success",
                        2000,
                        "We Master Real Projects",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h1>

                <p className="banner-desc">
                  Join India's most practical learning platform. Master Full-Stack development 
                  with real-world project experience or get your dream website built by industry experts.
                </p>

                <div className="search-container-premium">
                  <div className="search-glass">
                    <input
                      className="form-control search-input-premium"
                      type="search"
                      placeholder="What do you want to learn today?"
                      value={query}
                      onChange={handleSearch}
                    />
                    <button className="btn btn-search-premium">
                      <Search size={20} />
                    </button>
                  </div>

                  {/* Search Results Overlay */}
                  {query && (
                    <motion.ul 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="dropdown-menu show w-100 mt-2 border-0 shadow-lg rounded-4 p-2" 
                      style={{ maxHeight: "300px", overflowY: "auto" }}
                    >
                      {loading ? (
                        <li className="dropdown-item text-center p-3 text-muted">Searching...</li>
                      ) : filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                          <li key={course.id}>
                            <Link
                              className="dropdown-item rounded-3 p-3 mb-1"
                              to={`/courses/courseDetails/${course.slug}`}
                              onClick={() => setQuery("")}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="fw-bold">{course.title}</span>
                                <span className="text-primary fw-bold ms-2">
                                  {course.isPaid ? `₹${course.price}` : 'FREE'}
                                </span>
                              </div>
                              <small className="text-muted">{course.category}</small>
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="dropdown-item p-3 text-muted text-center">No results found</li>
                      )}
                    </motion.ul>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Media */}
            <div className="col-lg-6 col-xl-6 text-center position-relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  y: { repeat: Infinity, duration: 2 },
                  rotate: { duration: 0.5 },
                }}
                className="icon-lg bg-primary text-white rounded-4 shadow position-absolute top-0 start-100 translate-middle z-index-9 ms-n4 d-none d-md-flex align-items-center justify-content-center bell-icon"
                style={{ width: "60px", height: "60px", zIndex: 20 }}
              >
                <i className="fas fa-bell fs-4"></i>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="video-wrapper-premium shadow-lg border border-5 border-warning rounded-4 bg-warning"
              >
                <div className="video-container rounded-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube-nocookie.com/embed/n-q7VlmS3ok?autoplay=1&mute=1&loop=1&playlist=n-q7VlmS3ok"
                    title="LetSkillify Preview"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 stats-grid-container">
            <div className="col-md-6 col-lg-3">
              <div className="stats-premium-card stat-card-yellow">
                <div className="stat-icon-wrapper stat-icon-yellow">
                  <i className="fas fa-tv"></i>
                </div>
                <div className="stat-content">
                  <h4 className="fw-bold">
                    <CountUp end={totalCourses} duration={2} />+
                  </h4>
                  <p>Online Courses</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="stats-premium-card stat-card-blue">
                <div className="stat-icon-wrapper stat-icon-blue">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="stat-content">
                  <h4 className="fw-bold">
                    <CountUp end={11} duration={2} />+
                  </h4>
                  <p>Expert Tutors</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="stats-premium-card stat-card-purple">
                <div className="stat-icon-wrapper stat-icon-purple">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div className="stat-content">
                  <h4 className="fw-bold">
                    <CountUp end={155} duration={2} />+
                  </h4>
                  <p>Online Students</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="stats-premium-card stat-card-teal">
                <div className="stat-icon-wrapper stat-icon-teal">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <div className="stat-content">
                  <h4 className="fw-bold">
                   <CountUp end={25} duration={2} />+
                  </h4>
                  <p>Internship Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

