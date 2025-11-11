import { useEffect, useState } from 'react';
import './Gallery.scss';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Generate Unsplash images for the gallery
    const galleryImages = [
      'https://source.unsplash.com/800x600/?tuscany,landscape',
      'https://source.unsplash.com/800x600/?montecatini,italy',
      'https://source.unsplash.com/800x600/?thermal-spa,italy',
      'https://source.unsplash.com/800x600/?italian-architecture',
      'https://source.unsplash.com/800x600/?tuscany,sunset',
      'https://source.unsplash.com/800x600/?italian-garden',
      'https://source.unsplash.com/800x600/?florence,italy',
      'https://source.unsplash.com/800x600/?tuscan-countryside',
      'https://source.unsplash.com/800x600/?italian-plaza',
      'https://source.unsplash.com/800x600/?tuscany,villa',
      'https://source.unsplash.com/800x600/?lucca,italy',
      'https://source.unsplash.com/800x600/?pisa,italy',
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