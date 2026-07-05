import { useParams } from "react-router-dom";



const ProductDetailPage = () => {
  const {id} = useParams();
  const product = products.find((product) => Number(id) === product.id );
  return (
    <div className="product_item" style={{width:"100%"}}>
      <img src={product.image} alt="" />
      <span style={{ display: "block" }}>{product.price} $</span>
        <h2>{product.title}</h2>
      <button onClick={() => alert(`${product.title} added to cart`)}>
        Add To Cart
      </button>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetailPage;