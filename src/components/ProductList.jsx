import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";

//export const products = [
//


function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="product_container">
      {products.map((product) => {
        return (

          <ProductCard product={product} />
        );
      })}
    </div>
  );
}

export default ProductList;
