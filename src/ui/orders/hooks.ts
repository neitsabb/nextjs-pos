import { useOrdersData } from "./services/data.service";
import { Order } from "@/domain/models/order.model";

type UseOrders = {
  orders: Order[];
};

export const useOrders = async (): Promise<UseOrders> => {
  const { getOrders } = useOrdersData();
  const orders = await getOrders();

  return {
    orders,
  };
};
