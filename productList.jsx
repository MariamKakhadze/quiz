import { useContext } from "react";
import { StoreContent } from "./storeContent";
const ProductList = () => {
    const {products, addToCart} = useContext(StoreContent);
    return(
        <div style={{display: "flex", gap:"20px", padding:"20px"}}>
            {products.map((product) => (
                <div key={product.id} style={{border: "1px solid #ccc", padding: "10px", width: "150px"}}>
                    <img src={product.Image} alt={product.title} style={{width: "100%"}} />
                    <h3>{product.title}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;