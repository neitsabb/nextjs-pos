import { Order } from "../models/order.model";

/**
 * Interface for TodoRepository
 */
export interface IOrdersRepository {
  fetchOrders(): Promise<Order[]>;
}
