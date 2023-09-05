import Detail from "./Detail";
import "./HomePage.css";
import Images from "./Images";


function HomePage({mockImages}) {
  return (
    <div className="home-page">
      <Images mockImages = {mockImages}/>
      <Detail/>
    </div>
  );
}

export default HomePage;
