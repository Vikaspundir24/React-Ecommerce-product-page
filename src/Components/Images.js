import { useState } from "react";
import "./Images.css";

function Images(props) {
  const [mainImage, setMainImage] = useState(props.mockImages[0].mainSrc);
 
  return (
    <div className="left-images">
      <div className="big-image">
        <img className="big-img" onClick={props.open} src={mainImage}></img>
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

export default Images;
