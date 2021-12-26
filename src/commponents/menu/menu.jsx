import React from "react";
 import { Link } from "react-router-dom";

const Navbar=()=> {
  

    return (
        <>
        <div className="ui pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/product" className="item">
          Add
        </Link>
     
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
   
      
      </>
    );
  
}
export default Navbar