import {
  AddTodoRequest,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "@/domain/dtos/todos.dto";
import { Todo } from "@/domain/models/todo.model";

/**
 * Interface for TodosPresenter
 *
 * @export
 * @interface ITodosPresenter
 */
export interface ITodosPresenter {
  fetchTodos: () => Promise<Todo[]>;
  fetchTodo: (request: FetchTodoByIdRequest) => Promise<Todo>;
  addTodo: (request: AddTodoRequest) => Promise<Todo>;
  deleteTodo: (request: DeleteTodoByIdRequest) => Promise<void>;
}
