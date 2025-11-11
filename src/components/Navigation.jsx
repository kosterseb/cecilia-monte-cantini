import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/explore', label: 'Explore' },
    { path: '/guestbook', label: 'Guestbook' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    // Fetch weather data for Montecatini Terme
    const fetchWeather = async () => {
      try {
        // Using Open-Meteo API (free, no API key required)
        // Montecatini Terme coordinates: 43.8833, 10.7667
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=43.8833&longitude=10.7667&current=temperature_2m,weather_code&timezone=Europe/Rome'
        );
        const data = await response.json();

        if (data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            code: data.current.weather_code
          });
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (code) => {
    // Weather code mapping based on WMO codes
    if (code === 0) {
      // Clear sky
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    }
    if (code <= 3) {
      // Partly cloudy
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    }
    if (code <= 48) {
      // Fog
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 15h18M3 9h18M3 12h18" strokeLinecap="round" />
        </svg>
      );
    }
    if (code <= 67) {
      // Rain
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="8" y1="19" x2="8" y2="21" strokeLinecap="round" />
          <line x1="8" y1="13" x2="8" y2="15" strokeLinecap="round" />
          <line x1="16" y1="19" x2="16" y2="21" strokeLinecap="round" />
          <line x1="16" y1="13" x2="16" y2="15" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
          <line x1="12" y1="15" x2="12" y2="17" strokeLinecap="round" />
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        </svg>
      );
    }
    if (code <= 77) {
      // Snow
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
          <line x1="8" y1="16" x2="8" y2="16" strokeLinecap="round" />
          <line x1="8" y1="20" x2="8" y2="20" strokeLinecap="round" />
          <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
          <line x1="12" y1="22" x2="12" y2="22" strokeLinecap="round" />
          <line x1="16" y1="16" x2="16" y2="16" strokeLinecap="round" />
          <line x1="16" y1="20" x2="16" y2="20" strokeLinecap="round" />
        </svg>
      );
    }
    if (code <= 86) {
      // Rain showers
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="8" y1="19" x2="8" y2="21" strokeLinecap="round" />
          <line x1="16" y1="19" x2="16" y2="21" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        </svg>
      );
    }
    // Thunderstorm
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
        <polyline points="13 11 9 17 15 17 11 23" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navigation ${isOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className={`logo-wrapper ${isOpen ? 'menu-open' : ''}`}>
          <div className="nav-sun">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="18" fill="#D4956C" />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 50 + Math.cos(angle) * 22;
                const y1 = 50 + Math.sin(angle) * 22;
                const x2 = 50 + Math.cos(angle) * 32;
                const y2 = 50 + Math.sin(angle) * 32;

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#D4956C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </div>
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-name">Donatello</span>
            <div className="logo-subtitle-wrapper">
              <span className="logo-subtitle">Montecatini Terme</span>
              {weather && (
                <div className="weather-info">
                  <div className="weather-icon">{getWeatherIcon(weather.code)}</div>
                  <span>{weather.temp}°C</span>
                </div>
              )}
            </div>
          </Link>
        </div>

        <button 
          className={`burger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <div className="mobile-menu-footer">
            <div className="mobile-sun">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="18" fill="#D4956C" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 50 + Math.cos(angle) * 22;
                  const y1 = 50 + Math.sin(angle) * 22;
                  const x2 = 50 + Math.cos(angle) * 32;
                  const y2 = 50 + Math.sin(angle) * 32;

                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#D4956C"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="mobile-menu-branding">
              <h2>Donatello</h2>
              <p>Montecatini Terme</p>
            </div>
            <Link to="/contact" className="contact-link" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;