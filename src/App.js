import Navbar from "./Components/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage";
import Modal from "./Components/Modal";
import { useState } from "react";

const mockImages = [
  {
    id: 1,
    thumbnailSrc: require("./images/image-product-1-thumbnail.jpg"),
    mainSrc: require("./images/image-product-1.jpg"),
  },
  {
    id: 2,
    thumbnailSrc: require("./images/image-product-2-thumbnail.jpg"),
    mainSrc: require("./images/image-product-2.jpg"),
  },
  {
    id: 3,
    thumbnailSrc: require("./images/image-product-3-thumbnail.jpg"),
    mainSrc: require("./images/image-product-3.jpg"),
  },
  {
    id: 4,
    thumbnailSrc: require("./images/image-product-4-thumbnail.jpg"),
    mainSrc: require("./images/image-product-4.jpg"),
  },
];

function App() {

  const[modalIsOpen , setModalIsOpen] = useState(false)

  function closeModalHandler() {
    setModalIsOpen(false)
  }
  
  function openModalHandler() {
    setModalIsOpen(true)
  }


  return (
    <div className="app">
      <Navbar />
      <HomePage mockImages={mockImages} open = {openModalHandler}/>
      {modalIsOpen ?   <Modal mockImages={mockImages} open = {openModalHandler} close = {closeModalHandler}  /> : "" }
    
    </div>
  );
}

export default App;
