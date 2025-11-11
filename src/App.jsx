import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Explore from './pages/Explore';
import Guestbook from './pages/Guestbook';
import './styles/main.scss';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Only use basename in production (GitHub Pages)
  const basename = import.meta.env.MODE === 'production' ? '/cecilia-monte-cantini' : '';

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <Router
          basename={basename}
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/guestbook" element={<Guestbook />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;