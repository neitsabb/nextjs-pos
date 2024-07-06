import {
  AddTodoDTO,
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
  addTodo: (request: AddTodoDTO) => Promise<Todo>;
  deleteTodo: (request: DeleteTodoByIdRequest) => Promise<void>;
}
