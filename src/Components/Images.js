import { useState } from "react";
import "./Images.css"


const mockImages = [
  {
    id: 1,
    thumbnailSrc: require("../images/image-product-1-thumbnail.jpg"),
    mainSrc: require("../images/image-product-1.jpg"),
  },
  {
    id: 2,
    thumbnailSrc: require("../images/image-product-2-thumbnail.jpg"),
    mainSrc: require("../images/image-product-2.jpg"),
  },
  {
    id: 3,
    thumbnailSrc: require("../images/image-product-3-thumbnail.jpg"),
    mainSrc: require("../images/image-product-3.jpg"),
  },
  {
    id: 4,
    thumbnailSrc: require("../images/image-product-4-thumbnail.jpg"),
    mainSrc: require("../images/image-product-4.jpg"),
  },
];


function Images() {
    const[mainImage, setMainImage] = useState(mockImages[0].mainSrc)

    
  return (
    <div className="left-images">
      <div className="big-image">
        <img className="big-img" src={mainImage}></img>
      </div>
      <div className="small-images">
        {mockImages.map(img => <img src={img.thumbnailSrc}   key={img.id} onClick={() => setMainImage(img.mainSrc)}/>)}
      </div>
    </div>
  );
}

export default Images;
