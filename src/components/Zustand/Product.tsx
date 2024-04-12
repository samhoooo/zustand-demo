import { useContext } from "react";
import { useCartStore } from "../../context/cartStore";
import { useRenderCount } from "../../hook/useRenderCount";
import { ConfigContext } from "../../context/configContext";

export const Product = () => {
  const renderCount = useRenderCount();
  const { count, setCount } = useCartStore();
  const configContext = useContext(ConfigContext);

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
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>
      <span className="count">{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
