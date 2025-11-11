import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import Guestbook from './pages/Guestbook';
import './styles/main.scss';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={400}
      >
        <div className="page-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

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
          <AnimatedRoutes />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;