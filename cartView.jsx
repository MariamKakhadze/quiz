import React,{useContext} from "react";
import { StoreContent } from "./storeContent";
const CartView = () => {
    const {cart, totalPrice} = useContext(StoreContent);
    return(
        <div style={{padding:"20px", backgroundColor: "#f9f9f9", 
            marginTop:"20px", borderRadius: "5px"
        }}>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>${item.price.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
};

export default CartView;