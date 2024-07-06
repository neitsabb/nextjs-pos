import { Order } from "@/domain/models/order.model";
import { fetchOrders } from "./actions.service";

type UseOrdersData = {
  getOrders: () => Promise<Order[]>;
};

export const useOrdersData = (): UseOrdersData => {
  const getOrders = async () => {
    return fetchOrders();
  };

  return {
    getOrders,
  };
};
