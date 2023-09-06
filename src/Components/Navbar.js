import logo from  "../images/logo.svg"
import cartLogo from "../images/icon-cart.svg"
import profileLogo from "../images/image-avatar.png"
import "./Navbar.css"


function Navbar({openCart}) {
  return (
    <div className="nav">
      <div className="left-nav">
        <img src= {logo}></img>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>Amout</p>
        <p>Contact</p>
      </div>
      <div className="right-nav">
        <img src={cartLogo} onClick={openCart}></img>
        <img className="profile-logo" src={profileLogo}  onClick={openCart}></img>
      </div>
    </div>
  );
}

export default Navbar;
