import { IDatabaseAdapter } from "@/application/services/database.interface";
import { Order } from "@/domain/models/order.model";

const table = "orders";

/**
 * Repository for Orders
 * @param {IDatabaseAdapter} adapter
 */
export const OrdersRepository = (adapter: IDatabaseAdapter) => ({
  fetchOrders: async () => {
    return adapter.all<Order>(table);
  },
});
