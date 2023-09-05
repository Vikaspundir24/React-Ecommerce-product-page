import { useState } from "react";
import "./Images.css";

function Images({ mockImages }, {openModal} ) {
  const [mainImage, setMainImage] = useState(mockImages[0].mainSrc);

  return (
    <div className="left-images">
      <div className="big-image">
        <img className="big-img" src={mainImage} onClick={() => openModal()}></img>
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

export default Images;
