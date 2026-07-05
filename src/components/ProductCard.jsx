import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

function ProductCard(props) {
  const { product } = props;
  const {cart , addToCart} = useContext(CartContext);
  console.log("cart in product card comp",cart);
  return (
    <div className="product_item">
      <img src={product.image} alt="" />
      <span style={{ display: "block" }}>{product.price} $</span>
      <Link to={`/products/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <button onClick={() => {
         addToCart(product);
        alert(`${product.title} added to cart`);
      }}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
