import { useState } from "react";
import "./Modal.css";

function Modal({ mockImages } , closeModal) {
  const [mainImage, setMainImage] = useState(mockImages[0].mainSrc);
  
  return (
    <div className="modal-default">
      <h3 className="close-icon" onClick={() => closeModal()}>X</h3>

      <div className="main-modal">
        <img
          className="previous-icon"
          src={require("../images/icon-previous.svg").default}
        ></img>
        <img className="main-image" src={mainImage}></img>
        <img
          className="next-icon"
          src={require("../images/icon-next.svg").default}
        ></img>
      </div>

      <div className="small-images">
        {mockImages.map((img) => (
          <img
            src={img.thumbnailSrc}
            key={img.id}
            onClick={() => setMainImage(img.mainSrc)}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal;
