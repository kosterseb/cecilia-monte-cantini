import './Guestbook.scss';
import bgImage from '../assets/IMG-20250804-WA0208.jpg';
import img1 from '../assets/gallery/IMG_0657.jpeg';
import img2 from '../assets/gallery/IMG_0662.jpeg';
import img3 from '../assets/gallery/IMG_0668.jpeg';
import img4 from '../assets/gallery/IMG_8041.jpeg';
import img5 from '../assets/gallery/IMG_9757.jpeg';
import img6 from '../assets/gallery/IMG_9795.jpeg';

const Guestbook = () => {
  return (
    <div className="property-page">
      <div className="page-background" style={{ backgroundImage: `url(${bgImage})` }}></div>

      <section className="section">
        <div className="container">
          <div className="property-header">
            <h1 className="property-title">Charming Italian B&B – Montecatini Terme</h1>
            <p className="property-subtitle">A Rare Blend of Classic Italian Charm and Modern Comfort</p>
          </div>

          <div className="property-content">
            {/* Main Description Section */}
            <div className="description-section">
              <div className="description-card">
                <h2>About This Property</h2>
                <p>
                  Located on one of Montecatini Terme's most picturesque and historic streets,
                  shaded by beautiful plane trees, this elegant <strong>675 m²</strong> estate offers
                  a rare blend of classic Italian charm and modern comfort. Its exceptionally central
                  position places cafés, shops, parks, and transport within easy walking distance,
                  making it an ideal setting for an inviting and refined B&B.
                </p>
              </div>

              <div className="description-card">
                <h2>Accommodation</h2>
                <p>
                  Across three floors, the property features <strong>20 comfortable double rooms</strong>,
                  each with its own private bathroom equipped with toilet, shower, and bidet. The
                  atmosphere throughout is warm, authentic, and beautifully preserved, reflecting
                  the building's original Italian character.
                </p>
              </div>

              <div className="description-card">
                <h2>Common Areas & Amenities</h2>
                <p>
                  The ground floor provides a welcoming flow of shared spaces, including a stylish
                  lounge, an elegant dining room, and a newly installed professional kitchen fitted
                  with <strong>Ilve, Gaggenau, and Bosch</strong> appliances, as well as a dedicated wine
                  refrigerator. A charming terrace facing the tree-lined street offers the perfect
                  spot for guests to enjoy breakfast or unwind in the evening.
                </p>
                <p>
                  Efficient new heating system, installed by Danish engineers.
                </p>
              </div>

              <div className="description-card">
                <h2>Additional Facilities</h2>
                <p>
                  A full basement includes an industrial kitchen and service rooms that are fully
                  functional but suitable for upgrading. A first-floor terrace also presents potential
                  for enhancement, offering additional outdoor space for guest relaxation or future
                  expansion.
                </p>
              </div>

              <div className="description-card highlight">
                <p className="closing-statement">
                  This centrally located B&B property combines history, atmosphere, and opportunity
                  — an exceptional offering in the heart of Montecatini Terme.
                </p>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="property-gallery">
              <h2>Property Gallery</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src={img1} alt="Property exterior view" />
                </div>
                <div className="gallery-item">
                  <img src={img2} alt="Interior room" />
                </div>
                <div className="gallery-item">
                  <img src={img3} alt="Common area" />
                </div>
                <div className="gallery-item">
                  <img src={img4} alt="Dining area" />
                </div>
                <div className="gallery-item">
                  <img src={img5} alt="Guest room" />
                </div>
                <div className="gallery-item">
                  <img src={img6} alt="Terrace view" />
                </div>
              </div>
            </div>

            {/* PDF Download Section */}
            <div className="pdf-section">
              <div className="pdf-card">
                <h2>Property Documentation</h2>
                <p>Download the complete property prospectus for detailed information, floor plans, and specifications.</p>
                <a href="property-pdf/property-prospectus.pdf" className="pdf-download-btn" download>
                  <span className="pdf-icon">📄</span>
                  Download Property Prospectus (PDF)
                </a>
              </div>
            </div>

            {/* Disclaimer Section */}
            <div className="disclaimer-section">
              <h3>Disclaimer</h3>
              <div className="disclaimer-content">
                <p>
                  All stated measurements are approximate. The seller accepts no responsibility for inaccuracies.
                </p>
                <p>
                  All areas, measurements, and specifications are provided for guidance only and are not guaranteed.
                  The seller shall not be held liable for any errors or omissions.
                </p>
                <p>
                  All square meters, dimensions, and technical details are approximate and subject to verification
                  by the buyer. The seller disclaims any and all liability for inaccuracies, errors, or omissions.
                </p>
                <p>
                  Measurements and specifications are believed to be correct but are not warranted. Prospective
                  buyers must verify all information independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guestbook;
