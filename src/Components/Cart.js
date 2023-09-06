import deleteLogo from "../images/icon-delete.svg";
import "./Cart.css";

function Cart(props) {
   
  let cartDiv;
  if (props.cartValue != 0) {
    cartDiv = (
      <>
        <img
          className="center-image"
          src={require("../images/image-product-1-thumbnail.jpg")}
        />
        <div className="main-cart">
          <p className="faded">Fall Limited Edition Sneakers</p>
          <p className="faded">
            $125 x <span>{props.cartValue}</span>
            <span> ${props.cartPrice}</span>
          </p>
        </div>
        <img className="delete-logo"  onClick={props.deleteCartValue} src={deleteLogo}></img>
      </>
    );
  } else {
    cartDiv = (
      <>
        <p>Cart is Empty</p>
      </>
    );
  }
  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cart</p>
      </div>
      <div className="cart-center">
        {cartDiv}
      </div>
      <div>
        <button className="delete-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
