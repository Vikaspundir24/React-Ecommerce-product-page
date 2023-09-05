import Detail from "./Detail";
import "./HomePage.css";
import Images from "./Images";


function HomePage(props) {
  
  return (
    <div className="home-page">
      <Images mockImages = {props.mockImages} open = {props.open} />
      <Detail/>
    </div>
  );
}

export default HomePage;
