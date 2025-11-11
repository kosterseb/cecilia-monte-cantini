import './Explore.scss';

const Explore = () => {
  const attractions = [
    {
      title: 'Piazza del Popolo',
      description: 'This lively square sits at the heart of Montecatini Terme and is the ideal place to have breakfast and indulge in people-watching. The combination of arcades, cafés and passing life creates a vibrant urban space.',
      image: 'https://picsum.photos/600/400?random=13'
    },
    {
      title: 'Terme Tettuccio (Thermal Baths)',
      description: 'Experience the historic thermal baths that have made Montecatini Terme famous. These elegant spa facilities offer wellness treatments in stunning Art Nouveau architecture.',
      image: 'https://picsum.photos/600/400?random=14'
    },
    {
      title: 'Funicolare di Montecatini & Montecatini Alto',
      description: 'Take the historic funicular railway up to Montecatini Alto, the medieval hilltop village offering breathtaking views of the Tuscan countryside and charming narrow streets.',
      image: 'https://picsum.photos/600/400?random=15'
    },
    {
      title: 'Basilica di Santa Maria Assunta',
      description: 'Built in the 1950s on the site of a 19th-century church, this basilica is noted for its architectural interest with its octagonal plan and travertine construction. It adds to the cultural and architectural depth of the town centre.',
      image: 'https://picsum.photos/600/400?random=16'
    },
    {
      title: 'Grotta Maona',
      description: 'A fascinating subterranean experience: this karst cave near Montecatini Terme is 200m long and deep, featuring impressive stalactites and stalagmites. Perfect for a unique day-trip.',
      image: 'https://picsum.photos/600/400?random=17'
    },
    {
      title: 'Corso Giacomo Matteotti',
      description: 'The main shopping street lined with designer stores like Gucci and other high-quality boutiques. Perfect for retail therapy and experiencing Italian fashion.',
      image: 'https://picsum.photos/600/400?random=18'
    },
    {
      title: 'Teatro Verdi',
      description: 'A beautiful venue for culture and events, offering operas, concerts and other performances throughout the year. Experience authentic Italian cultural life.',
      image: 'https://picsum.photos/600/400?random=19'
    },
    {
      title: 'MO.C.A. Museum of Contemporary Art',
      description: 'A free-to-visit modern art museum showcasing Italian and international contemporary art. Perfect for art lovers and those interested in design and culture.',
      image: 'https://picsum.photos/600/400?random=20'
    }
  ];

  return (
    <div className="explore-page">
      {/* Decorative sun element */}
      <div className="decorative-sun top-left">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" fill="#D4956C" opacity="0.25" />
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
                opacity="0.25"
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

      <section className="section">
        <div className="container">
          <h1 className="page-title text-center">Explore Montecatini Terme</h1>
          <p className="page-subtitle text-center">
            Discover the rich culture, history, and natural beauty surrounding our hotel
          </p>

          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.title} loading="lazy" />
                </div>
                <div className="attraction-content">
                  <h3>{attraction.title}</h3>
                  <p>{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;