import './Contact.scss';
import bgImage from '../assets/IMG-20250804-WA0208.jpg';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
      {/* Decorative sun element */}
      <div className="decorative-sun top-right">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="20" fill="#D4956C" opacity="0.3" />
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
                opacity="0.3"
              />
            );
          })}
        </svg>
      </div>

      <section className="section">
        <div className="container">
          <h1 className="page-title text-center">Contact Us</h1>
          <p className="page-subtitle text-center">
            For business reservations and group bookings
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3>Address</h3>
                <p>Viale Giacomo Puccini n.16</p>
                <p>51016 Montecatini Terme</p>
                <p>Provincia: Pistoia, Italy</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>Email</h3>
                <h4>For info:</h4>
                <p>casa@donatello.dk</p>
                <h4>For reservations:</h4>
                <p>hotel@donatello.dk</p>
              </div>

              <div className="info-card highlight">
                <h3>Business & Group Reservations</h3>
                <p>
                  Hotel Donatello specializes in hosting business groups, conferences,
                  and large party bookings. Our dedicated team is ready to assist you
                  in planning your corporate event or group stay.
                </p>
                <p className="cta-text">
                  Contact us directly for customized packages and special rates for groups.
                </p>
              </div>
            </div>

            <div className="map-section">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.486939399826!2d10.770839!3d43.883333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a7f6b4b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sViale%20Giacomo%20Puccini%2C%2016%2C%2051016%20Montecatini%20Terme%20PT%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Donatello Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative lines */}
      <div className="decorative-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default Contact;
