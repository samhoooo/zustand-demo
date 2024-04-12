import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useRenderCount } from "../../hook/useRenderCount";
import { ConfigContext } from "../../context/configContext";

export const Delivery = () => {
  const renderCount = useRenderCount();
  const cartContext = useContext(CartContext);
  const configContext = useContext(ConfigContext);

  if (cartContext == null) {
    return null;
  }

  return (
    <div className="container">
      {configContext?.enableRenderCount && (
        <div className="render-count">{renderCount}</div>
      )}
      <div className="delivery-message">
        {cartContext.deliveryCost === 0
          ? "FREE delivery"
          : `Standard delivery £${cartContext.deliveryCost}`}
      </div>
      {cartContext.deliveryCost > 0 && (
        <div className="delivery-description">
          We offer FREE DELIVERY on all orders above £200
        </div>
      )}
    </div>
  );
};
