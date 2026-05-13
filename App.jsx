import React from "react";
import { StoreProvider } from "./storeContent";
import ProductList from "./productList";
import CartView from "./cartView";

function App() {
  return (
    <StoreProvider>
      <div style={{maxWidth: "800px", margin: "0 auto"}}>
        <h1>El store</h1>
        <ProductList />
        <CartView />
      </div>
    </StoreProvider>
  );
}

export default App;