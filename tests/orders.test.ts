import { IOrdersPresenter } from "@/application/presenters/interfaces/orders.interface";
import { ApplicationPresentersSymbols } from "@/application/symbols";
import { inject } from "@/ui/common/utils/inject";

const presenter = inject<IOrdersPresenter>(
  ApplicationPresentersSymbols.OrdersPresenter
);

test("fetchOrders should return orders successfully", async () => {
  // Utilisation d'Inversify pour injecter les dépendances

  const orders = await presenter.fetchOrders();

  expect(orders).toEqual([]);
});
