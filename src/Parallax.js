import React, {Component,useState,useEffect} from "react";
import M  from "materialize-css";
const Parallax = (props) => {
useEffect(() => {
  let elements = document.querySelectorAll(".parallax")
  M.Parallax.init(elements);
},[])
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={props.src} alt="" className="responsive-img" />
      </div>
    </div>
  );
}
export default Parallax