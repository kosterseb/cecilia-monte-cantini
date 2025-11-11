import { useState, useEffect } from 'react';
import './Guestbook.scss';
import bgImage from '../assets/IMG-20250804-WA0206.jpg';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('guestbookEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEntry = {
      ...formData,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      id: Date.now()
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('guestbookEntries', JSON.stringify(updatedEntries));

    // Reset form
    setFormData({
      name: '',
      location: '',
      message: ''
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="guestbook-page">
      <div className="page-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <section className="section">
        <div className="container">
          <h1 className="page-title text-center">Guestbook</h1>
          <p className="page-subtitle text-center">
            Share your experience and leave a message for future guests
          </p>

          <div className="guestbook-content">
            <div className="guestbook-form-container">
              <h2>Leave a Message</h2>
              <form onSubmit={handleSubmit} className="guestbook-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Where are you from?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Share your thoughts about Montecatini Terme..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Message
                </button>

                {submitted && (
                  <div className="success-message">
                    Thank you for your message! ✓
                  </div>
                )}
              </form>
            </div>

            <div className="guestbook-entries">
              <h2>Guest Messages</h2>
              {entries.length === 0 ? (
                <p className="no-entries">Be the first to leave a message!</p>
              ) : (
                <div className="entries-list">
                  {entries.map((entry) => (
                    <div key={entry.id} className="entry-card">
                      <div className="entry-header">
                        <h3>{entry.name}</h3>
                        <span className="entry-location">{entry.location}</span>
                      </div>
                      <p className="entry-message">{entry.message}</p>
                      <span className="entry-date">{entry.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guestbook;