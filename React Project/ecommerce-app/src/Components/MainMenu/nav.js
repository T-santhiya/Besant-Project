import { Link } from "react-router-dom";
import React from "react";


function Nav() {
   return (
        <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="nav-link active" aria-current="page" to="/">Categories</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jewelery">Jewellary</Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/men's clothing"> MensClothing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/women's clothing">WomensClothing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </>
        );
}

export default Nav;