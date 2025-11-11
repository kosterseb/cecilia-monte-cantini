import { useEffect, useState } from 'react';
import './Explore.scss';

const Explore = () => {
  const attractions = [
    {
      title: 'Piazza del Popolo',
      description: 'This lively square sits at the heart of Montecatini Terme and is the ideal place to have breakfast and indulge in people-watching. The combination of arcades, cafés and passing life creates a vibrant urban space.',
      image: 'https://source.unsplash.com/600x400/?italian-plaza,piazza'
    },
    {
      title: 'Terme Tettuccio (Thermal Baths)',
      description: 'Experience the historic thermal baths that have made Montecatini Terme famous. These elegant spa facilities offer wellness treatments in stunning Art Nouveau architecture.',
      image: 'https://source.unsplash.com/600x400/?thermal-spa,luxury'
    },
    {
      title: 'Funicolare di Montecatini & Montecatini Alto',
      description: 'Take the historic funicular railway up to Montecatini Alto, the medieval hilltop village offering breathtaking views of the Tuscan countryside and charming narrow streets.',
      image: 'https://source.unsplash.com/600x400/?funicular,cable-car'
    },
    {
      title: 'Basilica di Santa Maria Assunta',
      description: 'Built in the 1950s on the site of a 19th-century church, this basilica is noted for its architectural interest with its octagonal plan and travertine construction. It adds to the cultural and architectural depth of the town centre.',
      image: 'https://source.unsplash.com/600x400/?italian-church,basilica'
    },
    {
      title: 'Grotta Maona',
      description: 'A fascinating subterranean experience: this karst cave near Montecatini Terme is 200m long and deep, featuring impressive stalactites and stalagmites. Perfect for a unique day-trip.',
      image: 'https://source.unsplash.com/600x400/?cave,stalactite'
    },
    {
      title: 'Corso Giacomo Matteotti',
      description: 'The main shopping street lined with designer stores like Gucci and other high-quality boutiques. Perfect for retail therapy and experiencing Italian fashion.',
      image: 'https://source.unsplash.com/600x400/?shopping-street,luxury-boutique'
    },
    {
      title: 'Teatro Verdi',
      description: 'A beautiful venue for culture and events, offering operas, concerts and other performances throughout the year. Experience authentic Italian cultural life.',
      image: 'https://source.unsplash.com/600x400/?opera-house,theater'
    },
    {
      title: 'MO.C.A. Museum of Contemporary Art',
      description: 'A free-to-visit modern art museum showcasing Italian and international contemporary art. Perfect for art lovers and those interested in design and culture.',
      image: 'https://source.unsplash.com/600x400/?contemporary-art,museum'
    }
  ];

  return (
    <div className="explore-page">
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

      <section className="section map-section">
        <div className="container">
          <h2 className="text-center">Find Us</h2>
          <p className="text-center map-subtitle">
            Viale Giacomo Puccini n.16, 51016 Montecatini Terme, Provincia: Pistoia, Italy
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.486939399826!2d10.770839!3d43.883333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a7f6b4b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sViale%20Giacomo%20Puccini%2C%2016%2C%2051016%20Montecatini%20Terme%20PT%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Donatello Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;