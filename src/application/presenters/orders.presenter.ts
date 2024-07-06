import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import { Order } from "@/domain/models/order.model";

/**
 * Presenter that returns an object with methods to interact with the Orders use cases
 *
 * @param fetchOrdersUseCase
 * @param fetchTodoByIdUseCase
 * @param addTodoUseCase
 * @param deleteTodoByIdUseCase
 * @returns
 */
export const OrdersPresenter = (
  fetchOrdersUseCase: IUseCase<void, Promise<Order[]>>
) => ({
  fetchOrders: async () => fetchOrdersUseCase.execute(),
});
