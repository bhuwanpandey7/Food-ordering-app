import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {

  const [cartVisibility, setCartVisibility] = useState(false);

  const setCartVisisble = () => {
    setCartVisibility(true);
  }

  const setCartHidden = () => {
    setCartVisibility(false);
  }

  return (
    <CartContextProvider>
      {cartVisibility && <Cart onClick={setCartHidden} />}
      <Header onClick={setCartVisisble}/>
      <Meals />
    </CartContextProvider>
  );
}

export default App;
