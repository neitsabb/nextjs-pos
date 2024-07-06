import { useOrders } from "./hooks";

export const OrdersView = async () => {
  const { orders } = await useOrders();

  return (
    <div className="bg-white border rounded shadow p-6 m-4 w-full max-w-lg">
      Hello world
    </div>
  );
};
