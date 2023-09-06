import Navbar from "./Components/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage";
import Modal from "./Components/Modal";
import { useState } from "react";
import Cart from "./Components/Cart";

const mockImages = [
  {
    id: 0,
    thumbnailSrc: require("./images/image-product-1-thumbnail.jpg"),
    mainSrc: require("./images/image-product-1.jpg"),
  },
  {
    id: 1,
    thumbnailSrc: require("./images/image-product-2-thumbnail.jpg"),
    mainSrc: require("./images/image-product-2.jpg"),
  },
  {
    id: 2,
    thumbnailSrc: require("./images/image-product-3-thumbnail.jpg"),
    mainSrc: require("./images/image-product-3.jpg"),
  },
  {
    id: 3,
    thumbnailSrc: require("./images/image-product-4-thumbnail.jpg"),
    mainSrc: require("./images/image-product-4.jpg"),
  },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartValue, setCartValue] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  function updateCartValue(totalItem) {
    console.log(totalItem);
    setCartValue(totalItem);
    setCartPrice(totalItem * 125);
  }

  function deleteCartValue() {
    console.log(cartValue);
    setCartValue(0);
    setCartPrice(0);
    console.log(cartValue);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function openCartHandler(totalItem) {
    if (totalItem != 0) {
      setCartIsOpen(true);
    } else if(totalItem == 0) {
      setCartIsOpen(false);
    }
  }

  function openCartNavHandler() {
    if(cartIsOpen){
      setCartIsOpen(false)
    }
    else(
      setCartIsOpen(true)
    )
  }

  return (
    <div className="app">
      <Navbar openCart={openCartNavHandler} />
      {cartIsOpen ? (
        <Cart
          cartValue={cartValue}
          deleteCartValue={deleteCartValue}
          cartPrice={cartPrice}
        />
      ) : (
        ""
      )}
      <HomePage
        mockImages={mockImages}
        updateCart={updateCartValue}
        open={openModalHandler}
        openCart = {openCartHandler}
      />
      {modalIsOpen ? (
        <Modal
          mockImages={mockImages}
          open={openModalHandler}
          close={closeModalHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
