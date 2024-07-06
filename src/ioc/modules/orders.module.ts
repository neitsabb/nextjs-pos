import {
  InfrastructureAdaptersSymbols,
  InfrastructureDataSymbols,
} from "@/infrastructure/symbols";
import { interfaces } from "inversify";
import { applyDependencies } from "../common/utils";
import { IOrdersRepository } from "@/domain/repositories/orders.interface";
import { OrdersRepository } from "@/infrastructure/repositories/orders.repository";
import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import { Order } from "@/domain/models/order.model";
import { fetchTodosUseCase } from "@/application/useCases/todos.useCases";
import { ApplicationUseCasesSymbols } from "@/application/symbols";
import { fetchOrdersUseCase } from "@/application/useCases/orders.useCases";

const initializeModule = (bind: interfaces.Bind) => {
  // Bind repositories
  bind<IOrdersRepository>(
    InfrastructureDataSymbols.OrdersRepository
  ).toConstantValue(
    applyDependencies(OrdersRepository, [
      InfrastructureAdaptersSymbols.DatabaseAdapter,
    ])
  );

  // Bind use cases
  bind<IUseCase<void, Promise<Order[]>>>(
    ApplicationUseCasesSymbols.FetchOrdersUseCase
  ).toConstantValue(
    applyDependencies(fetchOrdersUseCase, [
      InfrastructureDataSymbols.OrdersRepository,
    ])
  );
  // Bind presenters
};
