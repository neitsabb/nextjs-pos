import { ITodosRepository } from "@/domain/repositories/todos.repository";
import { ContainerModule, interfaces } from "inversify";
import { applyDependencies } from "../common/utils";
import { TodosRepository } from "@/infrastructure/repositories/todos.repository";
import {
  InfrastructureAdaptersSymbols,
  InfrastructureDataSymbols,
} from "@/infrastructure/symbols";
import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import { Todo } from "@/domain/models/todo.model";
import { DomainModuleSymbols } from "@/domain/symbols";
import {
  addTodoUseCase,
  deleteTodoByIdUseCase,
  fetchTodosUseCase,
} from "@/application/useCases/todos.useCase";
import {
  AddTodoDTO,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "@/domain/dtos/todos.dto";
import { ITodosPresenter } from "@/application/presenters/interfaces/todos.interface";
import { ApplicationPresentersSymbols } from "@/application/symbols";
import { TodosListPresenter } from "@/application/presenters/todos.presenter";

const initializeModule = (bind: interfaces.Bind) => {
  // Bind repositories
  bind<ITodosRepository>(
    InfrastructureDataSymbols.TodosRepository
  ).toConstantValue(
    applyDependencies(TodosRepository, [
      InfrastructureAdaptersSymbols.DatabaseAdapter,
    ])
  );

  // Bind use cases
  bind<IUseCase<void, Promise<Todo[]>>>(
    DomainModuleSymbols.FetchTodosUseCase
  ).toConstantValue(
    applyDependencies(fetchTodosUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );
  bind<IUseCase<FetchTodoByIdRequest, Promise<Todo | null>>>(
    DomainModuleSymbols.FetchTodoByIdUseCase
  ).toConstantValue(
    applyDependencies(fetchTodosUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );
  bind<IUseCase<AddTodoDTO, Promise<Todo>>>(
    DomainModuleSymbols.AddTodoUseCase
  ).toConstantValue(
    applyDependencies(addTodoUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );
  bind<IUseCase<DeleteTodoByIdRequest, Promise<void>>>(
    DomainModuleSymbols.DeleteTodoByIdUseCase
  ).toConstantValue(
    applyDependencies(deleteTodoByIdUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );

  // Bind presenters
  bind<ITodosPresenter>(
    ApplicationPresentersSymbols.TodosPresenter
  ).toConstantValue(
    applyDependencies(TodosListPresenter, [
      DomainModuleSymbols.FetchTodosUseCase,
      DomainModuleSymbols.FetchTodoByIdUseCase,
      DomainModuleSymbols.AddTodoUseCase,
      DomainModuleSymbols.DeleteTodoByIdUseCase,
    ])
  );
};

export const TodosModule = new ContainerModule(initializeModule);
