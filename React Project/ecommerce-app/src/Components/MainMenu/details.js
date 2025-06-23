import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import AllProducts from "./allproducts";

function Details() {
  const [category, setCategory] = useState([]);
  const {id}=useParams();
 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((category) => setCategory(category));
  }, []);

  return (
    <>
<div><Link to="/products">AllProducts</Link></div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}>
        <div className="row m-5 w-100">
            
        
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-3 category-card">
                 <img
                src={category.image}
                alt={category.title}
                className="img-fluid mx-auto"
                style={{ maxHeight: "350px", objectFit: "contain" }}
                 />
                      <div><strong>Category:</strong> {category.category}</div>
                      <div><strong>Description:</strong> {category.description}</div>
                      {/* <div><strong>Rating:</strong> {category.rating.rate} ({category.rating.count} reviews)</div> */}
                  
            <div>
            <button type="button" class="btn btn-success">Add to cart</button> 
            <button type="button" class="btn btn-primary">Buy Now</button>
            </div>
                
                </div>
              </div>

        </div>
      </div>
    </>
  );
}

export default Details;