import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useRenderCount } from "../../hook/useRenderCount";
import { ConfigContext } from "../../context/configContext";

export const Product = () => {
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
      <div className="product-description">Rilakkuma Plush</div>
      <div className="product-image">
        <img src="./image.png" alt="rilakkuma" />
      </div>
      <div className="product-description">£49.99</div>
      <button
        onClick={() =>
          cartContext.setCount((count) => {
            if (count > 0) count--;
            return count;
          })
        }
      >
        -
      </button>
      <span className="count">{cartContext.count}</span>
      <button onClick={() => cartContext.setCount((count) => count + 1)}>
        +
      </button>
    </div>
  );
};
