import React, { useState } from "react";
import "./Gallery.scss";
import { galleryImgs } from "../../assets/gallery-imgs/index";

const Gallery = () => {
  const [modalStyle, setModalStyle] = useState(null);
  const [imgSrc, setImgSrc] = useState("");

  const openModal = (e) => {
    setModalStyle({ display: "block" });
    setImgSrc(e.target.src);
  };

  const closeModal = (e) => {
    setModalStyle({ display: "none" });
  };

  const generateGalleryImg = () => {
    return galleryImgs.map((img, index) => {
      return (
        <div className="mItem" onClick={openModal}>
          <img
            key={index}
            className="gallery-img"
            src={img}
            alt={`Abbey and David ${index}`}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="modal" style={modalStyle} onClick={closeModal}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-img" src={imgSrc} />
        </div>
      </div>

      <div className="masonry">{generateGalleryImg()}</div>
    </>
  );
};

export default Gallery;
