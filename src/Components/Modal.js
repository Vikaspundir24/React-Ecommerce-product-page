import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const mockImages = props.mockImages;
  const length = mockImages.length;
  const [index, setIndex] = useState(0);
  const [mainImage, setMainImage] = useState(mockImages[index].mainSrc);

  const imageChangeHandler = (event) => {
    let id = event.target.id
    setIndex(id);
    setMainImage(mockImages[id].mainSrc);
   
  };

  const prevImage = () => {
    if (index === 0) {
      setMainImage(mockImages[length-1].mainSrc);
      setIndex(length-1)
    }
    else{
      setMainImage(mockImages[index-1].mainSrc);
      setIndex(index === 0 ? length - 1 : index - 1);
    }
   
  };
  const nextImage = () => {
    if (index === 3) {
      setMainImage(mockImages[length-3].mainSrc);
      setIndex(length-3)
    }
    else{
      setMainImage(mockImages[index+1].mainSrc);
      setIndex(index === 3 ? length - 3 : index + 1);
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
          onClick={() => nextImage()}
          className="next-icon"
          src={require("../images/icon-next.svg").default}
        ></img>
      </div>

      <div className="small-images">
        {mockImages.map((img) => (
          <img
            id={img.id}
            key={img.id}
            src={img.thumbnailSrc}
            onClick={(e) => imageChangeHandler(e)}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal;
