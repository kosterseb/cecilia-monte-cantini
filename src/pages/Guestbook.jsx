import { useState, useEffect } from 'react';
import './Guestbook.scss';
import bgImage from '../assets/IMG-20250804-WA0206.jpg';
<<<<<<< HEAD
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { db, auth } from '../utils/firebaseConfig';
=======
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { db, auth, GUEST_CODE, ADMIN_CODE } from '../utils/firebaseConfig';
>>>>>>> claude/simple-application-setup-011CV1ynySDcEKhUm2eooZ7C

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: ''
  });
  const [guestCode, setGuestCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
<<<<<<< HEAD
=======
  const [isAdmin, setIsAdmin] = useState(false);
>>>>>>> claude/simple-application-setup-011CV1ynySDcEKhUm2eooZ7C
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
  // The guest code - you can change this to any code you want
  const VALID_GUEST_CODE = 'DONATELLO2025';

=======
>>>>>>> claude/simple-application-setup-011CV1ynySDcEKhUm2eooZ7C
  // Load entries from Firestore on mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedEntries = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().createdAt?.toDate().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      }));
      setEntries(fetchedEntries);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

<<<<<<< HEAD
    if (guestCode.trim().toUpperCase() === VALID_GUEST_CODE) {
      try {
        await signInAnonymously(auth);
        setIsAuthenticated(true);
=======
    const enteredCode = guestCode.trim().toUpperCase();

    if (enteredCode === ADMIN_CODE) {
      try {
        await signInAnonymously(auth);
        setIsAuthenticated(true);
        setIsAdmin(true);
        setError('');
      } catch (error) {
        console.error('Authentication error:', error);
        setError('Authentication failed. Please try again.');
      }
    } else if (enteredCode === GUEST_CODE) {
      try {
        await signInAnonymously(auth);
        setIsAuthenticated(true);
        setIsAdmin(false);
>>>>>>> claude/simple-application-setup-011CV1ynySDcEKhUm2eooZ7C
        setError('');
      } catch (error) {
        console.error('Authentication error:', error);
        setError('Authentication failed. Please try again.');
      }
    } else {
      setError('Invalid guest code. Please check with the hotel reception.');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const newEntry = {
        ...formData,
        createdAt: Timestamp.now(),
        userId: auth.currentUser?.uid || 'anonymous'
      };

      await addDoc(collection(db, 'guestbook'), newEntry);

      // Reset form
      setFormData({
        name: '',
        location: '',
        message: ''
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      // Refresh entries
      await fetchEntries();
    } catch (error) {
      console.error('Error adding entry:', error);
      setError('Failed to submit your message. Please try again.');
    }
    setLoading(false);
<<<<<<< HEAD
=======
  };

  const handleDelete = async (entryId) => {
    if (!isAdmin) {
      setError('You do not have permission to delete entries.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'guestbook', entryId));
      await fetchEntries();
    } catch (error) {
      console.error('Error deleting entry:', error);
      setError('Failed to delete entry. Please try again.');
    }
>>>>>>> claude/simple-application-setup-011CV1ynySDcEKhUm2eooZ7C
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
              {!isAuthenticated ? (
                <>
                  <h2>Guest Access</h2>
                  <p className="auth-info">
                    Please enter the guest code provided by Hotel Donatello to leave a review.
                  </p>
                  <form onSubmit={handleCodeSubmit} className="guestbook-form">
                    <div className="form-group">
                      <label htmlFor="guestCode">Guest Code *</label>
                      <input
                        type="text"
                        id="guestCode"
                        name="guestCode"
                        value={guestCode}
                        onChange={(e) => setGuestCode(e.target.value)}
                        required
                        placeholder="Enter your guest code"
                        className="guest-code-input"
                      />
                    </div>

                    {error && (
                      <div className="error-message">
                        {error}
                      </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? 'Verifying...' : 'Verify Code'}
                    </button>
                  </form>
                </>
              ) : (
                <>
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
                        placeholder="Share your thoughts about your stay at Hotel Donatello..."
                        rows="5"
                      ></textarea>
                    </div>

                    {error && (
                      <div className="error-message">
                        {error}
                      </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit Message'}
                    </button>

                    {submitted && (
                      <div className="success-message">
                        Thank you for your message! ✓
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>

            <div className="guestbook-entries">
              <h2>Guest Messages</h2>
              {isAdmin && (
                <p className="admin-badge">
                  🔑 Admin Mode - You can delete entries
                </p>
              )}
              {entries.length === 0 ? (
                <p className="no-entries">Be the first to leave a message!</p>
              ) : (
                <div className="entries-list">
                  {entries.map((entry) => (
                    <div key={entry.id} className="entry-card">
                      <div className="entry-header">
                        <div>
                          <h3>{entry.name}</h3>
                          <span className="entry-location">{entry.location}</span>
                        </div>
                        {isAdmin && (
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(entry.id)}
                            title="Delete entry"
                          >
                            🗑️
                          </button>
                        )}
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