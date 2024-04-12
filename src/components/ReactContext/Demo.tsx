import { CartContextProvider } from "../../context/cartContext";
import { Product } from "./Product";
import { Checkout } from "./Checkout";
import { Delivery } from "./Delivery";

export const ReactContextDemo = () => {
  return (
    <>
      <CartContextProvider>
        <div className="layout">
          <div className="column">
            <Product />
          </div>
          <div className="column">
            <Delivery />
            <Checkout />
          </div>
        </div>
      </CartContextProvider>
    </>
  );
};
