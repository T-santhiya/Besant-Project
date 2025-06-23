import React, { useEffect, useState } from "react";
import './mainmenu.css'
import Nav from "./nav";
import {useNavigate } from "react-router-dom";

function Elec() {
  const [category, setCategory] = useState([]);

  const navigate=useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setCategory(json))
  }, []);

  const getIdData = (a)=>{
    navigate(`/prodDetails/${a}`);
  }

 return (
  <>
  <Nav />
   <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
  <div className="row m-5 w-100">
    {category.map((data) => (
      <div className="col-md-3 mb-4" onClick={()=> getIdData(data.id)}>
        <div className="card h-100 text-center p-3 category-card">
          <img
            src={data.image}
            alt={data.title}
            className="img-fluid mx-auto"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
          <h5 className="card-title text-capitalize">{data.title}</h5>
          <div><strong>Price:</strong> ${data.price}</div>
          {/* <div>
          <div><strong>Category:</strong> {data.category}</div>
          <div><strong>Description:</strong> {data.description}</div>
          <div><strong>Rating:</strong> {data.rating.rate} ({data.rating.count} reviews)</div>
          </div> */}
        </div>
      </div>
    ))}
  </div>
</div>
</>

  );
}

export default Elec;