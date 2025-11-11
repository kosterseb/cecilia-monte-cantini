import './Home.scss';
import heroImage from '../assets/IMG-20250804-WA0056.jpg';
import introImage from '../assets/IMG-20250804-WA0229.jpg';

const Home = () => {

  return (
    <div className="home-page">
      {/* Decorative sun element */}
      <div className="decorative-sun left-bottom">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" fill="#D4956C" opacity="0.2" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 50 + Math.cos(angle) * 25;
            const y1 = 50 + Math.sin(angle) * 25;
            const x2 = 50 + Math.cos(angle) * 38;
            const y2 = 50 + Math.sin(angle) * 38;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#D4956C"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.2"
              />
            );
          })}
        </svg>
      </div>

      {/* Decorative lines */}
      <div className="decorative-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
      </div>

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="fade-in">Welcome to Donatello</h1>
            <p className="hero-subtitle fade-in">Your Tuscan Retreat in Montecatini Terme</p>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Montecatini Terme</h2>
              <p>
                Montecatini Terme is one of Tuscany's most elegant spa towns, renowned for its 
                historic thermal baths, refined architecture, and relaxed Italian lifestyle. 
                The town attracts a steady flow of international visitors seeking wellness, 
                culture, and authenticity, making it an attractive destination for both tourism 
                and long-term investment.
              </p>
              <p>
                With its tree-lined boulevards, beautiful parks, and thriving restaurant and 
                retail scene, Montecatini Terme combines classic Tuscan charm with modern 
                comfort and convenience.
              </p>
            </div>
            <div className="intro-image">
              <img
                src={introImage}
                alt="Montecatini Terme"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container">
          <h2 className="text-center">Perfect Location</h2>
          <div className="location-grid">
            <div className="location-card">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Florence</h3>
              <p>30 minutes</p>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 6L2 8v12z" />
                  <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <h3>Lucca</h3>
              <p>30 minutes</p>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
              <h3>Pisa Airport</h3>
              <p>30 minutes</p>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10" />
                  <path d="M2 12c0 2.5 1 4.5 2.5 6M12 2c1.5 2 2.5 4.5 2.5 7s-1 5-2.5 7" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3>Tuscan Coast</h3>
              <p>1 hour</p>
            </div>
          </div>
          <div className="location-description">
            <p>
              Strategically located in the heart of Tuscany, Montecatini Terme lies just 
              30 minutes from Florence, Lucca, and Pisa International Airport, and one hour 
              from the Tuscan coastline. Its central position makes it an ideal base for 
              exploring Tuscany's most iconic cities, vineyards, and countryside.
            </p>
            <p>
              Excellent transport connections — including nearby motorway and rail links — 
              ensure easy access year-round, enhancing its appeal for hospitality and 
              residential investment alike.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <h2>Experience Tuscany</h2>
          <p className="cta-text">
            Discover the perfect blend of historic elegance and modern comfort in the heart of Tuscany.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;