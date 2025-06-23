  import React, { useEffect, useState } from "react";
  import './mainmenu.css'
  import electronic from '../../Assests/electronic.jpg';
  import jewl from '../../Assests/jewelery.avif';
  import menswear from '../../Assests/mens wear.avif';
  import womenswear from '../../Assests/WomensWear.avif';
  import { Link } from "react-router-dom";


  function Categories() {
    const [category, setCategory] = useState([]);


    const categoriesImages={
      "electronics": electronic,
      "jewelery": jewl,   
      "men's clothing" : menswear,
      "women's clothing" : womenswear
    };

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategory(json))
    }, []);

  return (


      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          {category.map((data) => (
            <Link to={data}>
            <div className="container">
            <div className="row">
              <div className="col">
                <img 
                  src={categoriesImages[data]} 
                  alt={data}
                  className="card-img-top img-fluid mb-3"
                  style={{ height: "180px", objectFit: "contain" }}
                />
                <h5 className="card-title text-capitalize">{data}</h5>

              </div>

                  </div>
            </div>
            </Link>    
              
            
          ))}
        </div>
    );
  }

  export default Categories;