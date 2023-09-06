import Detail from "./Detail";
import "./HomePage.css";
import Images from "./Images";


function HomePage(props) {
  
  return (
    <div className="home-page">
      <Images mockImages = {props.mockImages} open = {props.open} />
      <Detail openCart = {props.openCart} updateCart = {props.updateCart} />
    </div>
  );
}

export default HomePage;
