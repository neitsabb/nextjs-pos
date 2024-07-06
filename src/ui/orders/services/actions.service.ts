import { IOrdersPresenter } from "@/application/presenters/interfaces/orders.interface";
import { ApplicationPresentersSymbols } from "@/application/symbols";
import { inject } from "@/ui/common/utils/inject";

const { fetchOrders } = inject<IOrdersPresenter>(
  ApplicationPresentersSymbols.OrdersPresenter
);

export { fetchOrders };
