import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Donatello</h3>
            <p>Your home away from home in the heart of Tuscany</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Viale Giacomo Puccini n.16</p>
            <p>51016 Montecatini Terme</p>
            <p>Provincia: Pistoia, Italy</p>
          </div>
          
          <div className="footer-section">
            <h4>Location</h4>
            <p>30 minutes from Florence</p>
            <p>30 minutes from Lucca</p>
            <p>30 minutes from Pisa Airport</p>
          </div>
        </div>
        
        {/* Credits */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hotel Donatello. Montecatini Terme, Tuscany.</p>
          <div className="footer-credits">
            <p className="photographer-credit">
              Photography by{' '}
              <a
                href="https://www.instagram.com/stefreynaert"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stefanie Reynaert
              </a>
            </p>
            <p className="developer-credit">
              Website by{' '}
              <a
                href="https://sebastiankoster.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sebastian Køster
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;