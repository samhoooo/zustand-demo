import { useContext } from "react";
import { useCartStore } from "../../context/cartStore";
import { useShallow } from "zustand/react/shallow";
import { useRenderCount } from "../../hook/useRenderCount";
import { ConfigContext } from "../../context/configContext";

export const Delivery = () => {
  const renderCount = useRenderCount();
  // re-renders the component only when state.deliveryCost change
  const { deliveryCost } = useCartStore(
    useShallow((state) => ({ deliveryCost: state.deliveryCost }))
  );
  const configContext = useContext(ConfigContext);

  return (
    <div className="container">
      {configContext?.enableRenderCount && (
        <div className="render-count">{renderCount}</div>
      )}
      <div className="delivery-message">
        {deliveryCost === 0
          ? "FREE delivery"
          : `Standard delivery £${deliveryCost}`}
      </div>
      {deliveryCost > 0 && (
        <div className="delivery-description">
          We offer FREE DELIVERY on all orders above £200
        </div>
      )}
    </div>
  );
};
