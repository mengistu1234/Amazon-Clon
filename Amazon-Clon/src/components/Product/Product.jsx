import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        setError(err); 
        setIsLoading(false); 
      });
  }, []);

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className={classes.products_container}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
  );
}

export default Product;
