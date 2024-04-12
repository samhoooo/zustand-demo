import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ConfigContext } from "../../context/configContext";
import { useRenderCount } from "../../hook/useRenderCount";

export const Checkout = () => {
  const renderCount = useRenderCount();
  const cartContext = useContext(CartContext);
  const configContext = useContext(ConfigContext);
  if (cartContext == null) {
    return null;
  }

  return (
    <div className="container checkout">
      {configContext?.enableRenderCount && (
        <div className="render-count">{renderCount}</div>
      )}
      {cartContext.count < 1 ? (
        <div>You do not have any orders</div>
      ) : (
        <>
          <div className="checkout-price">
            <div className="price">
              Subtotal:
              <span>£{cartContext.subTotal}</span>
            </div>
            <div className="price">
              Delivery:
              <span>£{cartContext.deliveryCost}</span>
            </div>
            <div className="price">
              Order Total:
              <span>£{cartContext.payTotal}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
