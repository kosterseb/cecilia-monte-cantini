import { useEffect, useState } from 'react';
import './Gallery.scss';

// Import hotel gallery images
import img1 from '../assets/gallery/IMG_8714.jpeg';
import img2 from '../assets/gallery/IMG_8768.jpeg';
import img3 from '../assets/gallery/IMG_8838.jpeg';
import img4 from '../assets/gallery/IMG_8846.jpeg';
import img5 from '../assets/gallery/IMG_9696.jpeg';
import img6 from '../assets/gallery/IMG_9723.jpeg';
import img7 from '../assets/gallery/IMG_9752.jpeg';
import img8 from '../assets/gallery/IMG_9753.jpeg';
import img9 from '../assets/gallery/IMG_9762.jpeg';
import img10 from '../assets/gallery/IMG_9767.jpeg';
import img11 from '../assets/gallery/IMG_9769.jpeg';
import img12 from '../assets/gallery/IMG_9770.jpeg';
import img13 from '../assets/gallery/IMG_9772.jpeg';
import img14 from '../assets/gallery/IMG_9778.jpeg';
import img15 from '../assets/gallery/IMG_9780.jpeg';
import img16 from '../assets/gallery/IMG_9783.jpeg';
import img17 from '../assets/gallery/IMG_9785.jpeg';
import img18 from '../assets/gallery/IMG_9786.jpeg';
import img19 from '../assets/gallery/IMG_9787.jpeg';
import img20 from '../assets/gallery/IMG_9799.jpeg';
import img21 from '../assets/gallery/IMG_9802.jpeg';
import img22 from '../assets/gallery/IMG_9889.jpeg';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const galleryImages = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
      img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
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
            Discover Hotel Donatello's elegant accommodations and welcoming atmosphere
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