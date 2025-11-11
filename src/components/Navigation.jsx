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
    if (code === 0) return '☀️'; // Clear sky
    if (code <= 3) return '⛅'; // Partly cloudy
    if (code <= 48) return '🌫️'; // Fog
    if (code <= 67) return '🌧️'; // Rain
    if (code <= 77) return '🌨️'; // Snow
    if (code <= 86) return '🌦️'; // Rain showers
    return '⛈️'; // Thunderstorm
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo-wrapper">
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
                <span className="weather-info">
                  <span className="weather-icon">{getWeatherIcon(weather.code)}</span>
                  <span>{weather.temp}°C</span>
                </span>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;