import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import { Order } from "@/domain/models/order.model";
import { Todo } from "@/domain/models/todo.model";
import { IOrdersRepository } from "@/domain/repositories/orders.interface";

/**
 * Use case for fetching Orders
 *
 * @param OrdersRepository
 * @returns
 */
export const fetchOrdersUseCase = (
  ordersRepository: IOrdersRepository
): IUseCase<void, Promise<Order[]>> => ({
  execute: async () => ordersRepository.fetchOrders(),
});
