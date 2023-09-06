import { useState } from "react";
import "./Detail.css";

function Detail(props) {
  const [totalItem, setTotalItem] = useState(0);

  const decreaseValue = () => {
    if (totalItem == 0) {
      alert("Already 0");
    } else {
      setTotalItem((prevTotalItem) => prevTotalItem - 1);
    }
  };
  const increaseValue = () => {
    setTotalItem((prevTotalItem) => prevTotalItem + 1);
  };

  const addToCart = () => {
    if(totalItem != 0)
    {
      props.updateCart(totalItem)
      props.openCart(totalItem)
    }
    else{
      props.updateCart(totalItem)
      alert("Add Something to cart")
    }
    
  };

  return (
    <div className="right-data">
      <h6>SNEAKER COMPANY</h6>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        wearher can offer
      </p>
      <div className="price-tag">
        <h5>$125.00</h5>
        <p>50%</p>
      </div>
      <p className="original-price">$250.00</p>
      <div className="total-items-buttons">
        <p>
          <span onClick={decreaseValue}>-</span>
          {totalItem}
          <span onClick={increaseValue}>+</span>
        </p>
        <button onClick={addToCart} className="add-btn">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default Detail;
