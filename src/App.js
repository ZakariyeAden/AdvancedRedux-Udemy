import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Shop/Products";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch("https://http-eb00c-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
