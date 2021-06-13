import React from "react";

export default function Tabs(){

    return(
        <div className="Tabs">
            <ul className="nav nav-tabs justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact Info</a>
  </li>
</ul>
        </div>
    )
}