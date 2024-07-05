import { IUseCase } from "@/domain/common/usesCases/usesCases.interface";
import {
  AddTodoRequest,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "@/domain/dtos/todos.dto";
import { Todo } from "@/domain/models/todo.model";

/**
 * Presenter that returns an object with methods to interact with the todos use cases
 *
 * @param fetchTodosUseCase
 * @param fetchTodoByIdUseCase
 * @param addTodoUseCase
 * @param deleteTodoByIdUseCase
 * @returns
 */
export const TodosListPresenter = (
  fetchTodosUseCase: IUseCase<void, Promise<Todo[]>>,
  fetchTodoByIdUseCase: IUseCase<FetchTodoByIdRequest, Promise<Todo | null>>,
  addTodoUseCase: IUseCase<Todo, Promise<Todo>>,
  deleteTodoByIdUseCase: IUseCase<DeleteTodoByIdRequest, Promise<void>>
) => ({
  fetchTodos: async () => fetchTodosUseCase.execute(),
  fetchTodo: async ({ todoId }: FetchTodoByIdRequest) =>
    fetchTodoByIdUseCase.execute({ todoId }),
  addTodo: async ({ todo }: AddTodoRequest) => addTodoUseCase.execute(todo),
  deleteTodo: async ({ todoId }: DeleteTodoByIdRequest) =>
    deleteTodoByIdUseCase.execute({ todoId }),
});
