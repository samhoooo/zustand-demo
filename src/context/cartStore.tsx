import { create } from "zustand";

interface CountState {
  count: number;
  setCount: (count: number) => void;
  deliveryCost: number;
  subTotal: number;
  payTotal: number;
}

const DEFAULT_DELIVERY_COST = 4.99;
const PRODUCT_PRICE = 49.99;

export const useCartStore = create<CountState>((set) => ({
  count: 0,
  setCount: (count: number) =>
    set(() => {
      const subTotal = Math.round(count * PRODUCT_PRICE * 100) / 100;
      const deliveryCost = subTotal > 200 ? 0 : DEFAULT_DELIVERY_COST;
      const payTotal = Math.round((subTotal + deliveryCost) * 100) / 100;

      return {
        count,
        subTotal,
        deliveryCost,
        payTotal,
      };
    }),
  deliveryCost: 0,
  subTotal: 0,
  payTotal: 0,
}));
