import {
  InfrastructureAdaptersSymbols,
  InfrastructureDataSymbols,
} from "@/infrastructure/symbols";
import { ContainerModule, interfaces } from "inversify";
import { applyDependencies } from "../common/utils";
import { IOrdersRepository } from "@/domain/repositories/orders.interface";
import { OrdersRepository } from "@/infrastructure/repositories/orders.repository";
import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import { Order } from "@/domain/models/order.model";
import {
  ApplicationPresentersSymbols,
  ApplicationUseCasesSymbols,
} from "@/application/symbols";
import { fetchOrdersUseCase } from "@/application/useCases/orders.useCases";
import { IOrdersPresenter } from "@/application/presenters/interfaces/orders.interface";
import { OrdersPresenter } from "@/application/presenters/orders.presenter";

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
  bind<IOrdersPresenter>(
    ApplicationPresentersSymbols.OrdersPresenter
  ).toConstantValue(
    applyDependencies(OrdersPresenter, [
      ApplicationUseCasesSymbols.FetchOrdersUseCase,
    ])
  );
};

export const OrdersModule = new ContainerModule(initializeModule);
