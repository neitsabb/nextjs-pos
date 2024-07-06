import { ContainerModule, interfaces } from "inversify";

import {
  ApplicationPresentersSymbols,
  ApplicationUseCasesSymbols,
} from "@/application/symbols";
import {
  InfrastructureAdaptersSymbols,
  InfrastructureDataSymbols,
} from "@/infrastructure/symbols";

import { ITodosPresenter } from "@/application/presenters/interfaces/todos.interface";
import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import { ITodosRepository } from "@/domain/repositories/todos.interface";

import { TodosListPresenter } from "@/application/presenters/todos.presenter";

import {
  addTodoUseCase,
  deleteTodoByIdUseCase,
  fetchTodosUseCase,
} from "@/application/useCases/todos.useCases";

import {
  AddTodoDTO,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "@/domain/dtos/todos.dto";

import { Todo } from "@/domain/models/todo.model";
import { TodosRepository } from "@/infrastructure/repositories/todos.repository";

import { applyDependencies } from "../common/utils";

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
    ApplicationUseCasesSymbols.FetchTodosUseCase
  ).toConstantValue(
    applyDependencies(fetchTodosUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );
  bind<IUseCase<FetchTodoByIdRequest, Promise<Todo | null>>>(
    ApplicationUseCasesSymbols.FetchTodoByIdUseCase
  ).toConstantValue(
    applyDependencies(fetchTodosUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );
  bind<IUseCase<AddTodoDTO, Promise<Todo>>>(
    ApplicationUseCasesSymbols.AddTodoUseCase
  ).toConstantValue(
    applyDependencies(addTodoUseCase, [
      InfrastructureDataSymbols.TodosRepository,
    ])
  );
  bind<IUseCase<DeleteTodoByIdRequest, Promise<void>>>(
    ApplicationUseCasesSymbols.DeleteTodoByIdUseCase
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
      ApplicationUseCasesSymbols.FetchTodosUseCase,
      ApplicationUseCasesSymbols.FetchTodoByIdUseCase,
      ApplicationUseCasesSymbols.AddTodoUseCase,
      ApplicationUseCasesSymbols.DeleteTodoByIdUseCase,
    ])
  );
};

export const TodosModule = new ContainerModule(initializeModule);
