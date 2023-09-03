import "./Detail.css"

function Detail() {
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
          <span>-</span>0<span>+</span>
        </p>
        <button className="add-btn">Add To Cart</button>
      </div>
    </div>
  );
}
export default Detail;
