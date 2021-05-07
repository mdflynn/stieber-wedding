import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = () => {
  const [modalStyle, setModalStyle] = useState(null)
  const [imgSrc, setImgSrc] = useState("")

  const openModal = (e) => {
    setModalStyle({display: "block"})
    setImgSrc(e.target.src)
  }

  const closeModal = (e) => {
    setModalStyle({display: "none"})
  }

  return (
    <>
      <div className="modal" style={modalStyle}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-img" src={imgSrc} />
        </div>
      </div>

      <div className="masonry">
        <div className="mItem" onClick={openModal}>
          <img
            className="gallery-img"
            src="https://source.unsplash.com/random/300"
            alt="stock 1"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img
            className="gallery-img"
            src="https://source.unsplash.com/random/100"
            alt="stock 2"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img
            className="gallery-img"
            src="https://source.unsplash.com/random/50"
            alt="stock 3"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img
            className="gallery-img"
            src="https://source.unsplash.com/random/600"
            alt="stock 4"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/200"
            alt="stock 5"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/500"
            alt="stock 6"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/400"
            alt="stock 7"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/30"
            alt="stock 8"
          />
        </div>
        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/10"
            alt="stock 9"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/20"
            alt="stock 10"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/60"
            alt="stock 11"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/80"
            alt="stock 12"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/300"
            alt="stock 13"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/200"
            alt="stock 14"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/100"
            alt="stock 15"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/50"
            alt="stock 16"
          />
        </div>
        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/600"
            alt="stock 17"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/500"
            alt="stock18"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/400"
            alt="stock 19"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/30"
            alt="stock 20"
          />
        </div>
        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/10"
            alt="stock 21"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/20"
            alt="stock 22"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/60"
            alt="stock 23"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/80"
            alt="stock 24"
          />
        </div>
        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/300"
            alt="stock 25"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/200"
            alt="stock 26"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/100"
            alt="stock 27"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/50"
            alt="stock 28"
          />
        </div>
        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/600"
            alt="stock 29"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/500"
            alt="stock 30"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/400"
            alt="stock 31"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/30"
            alt="stock 32"
          />
        </div>
        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/10"
            alt="stock 33"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/20"
            alt="stock 34"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/60"
            alt="stock 35"
          />
        </div>

        <div className="mItem" onClick={openModal}>
          <img 
            className="gallery-img"
            src="https://source.unsplash.com/random/80"
            alt="stock 36"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
