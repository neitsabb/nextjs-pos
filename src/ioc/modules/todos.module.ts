import { ITodosRepository } from "@/domain/repositories/todos.repository";
import { ContainerModule, interfaces } from "inversify";
import { applyDependencies } from "../common/utils";
import { TodosRepository } from "@/infrastructure/repositories/todos.repository";
import { InfrastructureDataSymbols } from "@/infrastructure/symbols";

const initializeModule = (bind: interfaces.Bind) => {
  bind<ITodosRepository>("TodosRepository").toConstantValue(
    applyDependencies(TodosRepository, [
      InfrastructureDataSymbols.SupabaseClient,
    ])
  );
};

export const TodosModule = new ContainerModule(initializeModule);
