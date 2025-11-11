import './Home.scss';

const Home = () => {
  // Using Picsum Photos for placeholder images (CORS-friendly alternative to Unsplash)
  const heroImage = 'https://picsum.photos/1600/900';

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
                src="https://picsum.photos/600/800"
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
              <div className="location-icon">🏛️</div>
              <h3>Florence</h3>
              <p>30 minutes</p>
            </div>
            <div className="location-card">
              <div className="location-icon">🏰</div>
              <h3>Lucca</h3>
              <p>30 minutes</p>
            </div>
            <div className="location-card">
              <div className="location-icon">✈️</div>
              <h3>Pisa Airport</h3>
              <p>30 minutes</p>
            </div>
            <div className="location-card">
              <div className="location-icon">🌊</div>
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