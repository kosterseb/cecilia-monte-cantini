import { useEffect, useState } from 'react';
import './Gallery.scss';
import img1 from '../assets/IMG-20250804-WA0090.jpg';
import img2 from '../assets/IMG-20250804-WA0094.jpg';
import img3 from '../assets/IMG-20250804-WA0196.jpg';
import img4 from '../assets/IMG-20250804-WA0201.jpg';
import img5 from '../assets/IMG-20250804-WA0206.jpg';
import img6 from '../assets/IMG-20250804-WA0208.jpg';
import img7 from '../assets/IMG-20250804-WA0233.jpg';
import img8 from '../assets/IMG-20250804-WA0405.jpg';
import img9 from '../assets/IMG-20250804-WA0412.jpg';
import img10 from '../assets/IMG-20250804-WA0413.jpg';
import img11 from '../assets/IMG-20250804-WA0417.jpg';
import img12 from '../assets/IMG-20250804-WA0418.jpg';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const galleryImages = [
      img1, img2, img3, img4, img5, img6,
      img7, img8, img9, img10, img11, img12
    ];

    setImages(galleryImages);
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="gallery-page">
      <section className="section">
        <div className="container">
          <h1 className="page-title text-center">Gallery</h1>
          <p className="page-subtitle text-center">
            Explore the beauty of Montecatini Terme and the surrounding Tuscan region
          </p>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            ‹
          </button>
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            ›
          </button>
          <img 
            src={images[selectedImage]} 
            alt={`Gallery ${selectedImage + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-counter">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;