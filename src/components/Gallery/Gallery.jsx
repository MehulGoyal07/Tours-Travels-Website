import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import GalleryImg1 from '../../assets/images/gallery/g1.jpg';
import GalleryImg3 from '../../assets/images/gallery/g3.jpg';
import GalleryImg4 from '../../assets/images/gallery/g4.jpg';
import GalleryImg6 from '../../assets/images/gallery/g6.jpg';
import GalleryImg7 from '../../assets/images/gallery/g7.jpg';

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    {
      src: GalleryImg1,
      desc: 'Person wearing shoes',
      sub: 'Gift Habeshaw',
    },
    {
      src: GalleryImg3,
      desc: 'Blonde woman wearing sunglasses smiling at the camera',
      sub: 'Dmitriy Frantsev',
    },
    {
      src: GalleryImg6,
      sub: 'Harry Cunningham',
    },
    {
      src: GalleryImg4,
      desc: 'Jaipur, Rajasthan India',
      sub: 'Liam Baldock',
    },
    {
      src: GalleryImg7,
      sub: 'Verne Ho',
    },
    {
      src: GalleryImg6,
      desc: 'Rann of Kutch, India',
      sub: 'Hari Nandakumar',
    },
  ];

  const imageSrcs = images.map((image) => image.src);

  return (
    <div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.desc || 'Gallery image'}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            style={{ cursor: 'pointer', margin: '10px', maxWidth: '100%', height: 'auto' }}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={imageSrcs[photoIndex]}
          nextSrc={imageSrcs[(photoIndex + 1) % imageSrcs.length]}
          prevSrc={imageSrcs[(photoIndex + imageSrcs.length - 1) % imageSrcs.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageSrcs.length - 1) % imageSrcs.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageSrcs.length)
          }
          imageTitle={images[photoIndex].sub}
          imageCaption={images[photoIndex].desc}
        />
      )}
    </div>
  );
};

export default Gallery;
