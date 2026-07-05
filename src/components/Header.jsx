import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src="logo.png" alt="" width={70} />
        </Link>
      </div>
      <nav className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Dashboard">Dashboard</Link>
      </nav>
      <div style={{display:"flex",justifyItems:"center",gap:"1rem"}}>
      <Link to ="/login"style={{textDecoration:"none", color:"white"}}>login</Link>
       <Link to ='/profile' style={{textDecoration:"none", color:"white"}}>profile</Link> 
      <Link to="/cart">
          <img src="cart-icon.png" alt="" width={40} />
      </Link>
     
      </div>
    </header>
  );
};

export default Header;
