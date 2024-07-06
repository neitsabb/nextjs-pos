import { Order } from "@/domain/models/order.model";

/**
 * Interface for OrdersPresenter
 *
 * @export
 * @interface IOrdersPresenter
 */
export interface IOrdersPresenter {
  fetchOrders: () => Promise<Order[]>;
}
