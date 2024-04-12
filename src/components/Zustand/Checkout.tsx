import { useContext } from "react";
import { useCartStore } from "../../context/cartStore";
import { ConfigContext } from "../../context/configContext";
import { useRenderCount } from "../../hook/useRenderCount";

export const Checkout = () => {
  const renderCount = useRenderCount();
  const { count, subTotal, deliveryCost, payTotal } = useCartStore();
  const configContext = useContext(ConfigContext);

  return (
    <div className="container checkout">
      {configContext?.enableRenderCount && (
        <div className="render-count">{renderCount}</div>
      )}
      {count < 1 ? (
        <div>You do not have any orders</div>
      ) : (
        <>
          <div className="checkout-price">
            <div className="price">
              Subtotal:
              <span>£{subTotal}</span>
            </div>
            <div className="price">
              Delivery:
              <span>£{deliveryCost}</span>
            </div>
            <div className="price">
              Order Total:
              <span>£{payTotal}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
