import { useEffect, useState } from 'react';
import './SplashScreen.scss';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Call onComplete after fade animation
      setTimeout(onComplete, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="sun-container">
        <svg className="italian-sun" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Center circle */}
          <circle cx="100" cy="100" r="40" fill="#D4956C" />
          
          {/* Sun rays - minimalist lines */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + Math.cos(angle) * 50;
            const y1 = 100 + Math.sin(angle) * 50;
            const x2 = 100 + Math.cos(angle) * 75;
            const y2 = 100 + Math.sin(angle) * 75;
            
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
        <h1 className="hotel-name">Donatello</h1>
        <p className="location">Montecatini Terme, Toscana</p>
      </div>
    </div>
  );
};

export default SplashScreen;