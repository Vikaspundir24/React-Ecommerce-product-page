import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [index, setIndex] = useState(0);
  const [mainImage, setMainImage] = useState(props.mockImages[index].mainSrc);

  const prevImage = () => {
    console.log("prev");
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      setMainImage(props.mockImages[index].mainSrc);
      console.log("prev");
    } else if (index < 1) {
      setIndex((prevIndex) => prevIndex + 3);
      console.log("prev");
      setMainImage(props.mockImages[index].mainSrc);
    }
  };
  const nextImage = () => {
    if (index > 2) {
      setIndex(0);
      setMainImage(props.mockImages[index].mainSrc);
      console.log("next");
      return index
    } else if (index >= 0) {
      setIndex((prevIndex) => prevIndex + 1);
      setMainImage(props.mockImages[index].mainSrc);
      console.log("next");
      return index
    }
  };
  
  return (
    <div className="modal-default">
      <h3 className="close-icon" onClick={props.close}>
        X
      </h3>

      <div className="main-modal">
        <img
          onClick={prevImage}
          className="previous-icon"
          src={require("../images/icon-previous.svg").default}
        ></img>
        <img className="main-image" src={mainImage}></img>
        <img
          onClick={nextImage}
          className="next-icon"
          src={require("../images/icon-next.svg").default}
        ></img>
      </div>

      <div className="small-images">
        {props.mockImages.map((img) => (
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
