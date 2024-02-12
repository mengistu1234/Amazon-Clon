import React, { useState, useEffect } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} flex={true} />}
    </LayOut>
  );
}

export default ProductDetail;
