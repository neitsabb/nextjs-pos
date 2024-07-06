import {
  AddTodoDTO,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "../dtos/todos.dto";
import { Todo } from "../models/todo.model";

/**
 * Interface for TodoRepository
 */
export interface ITodosRepository {
  fetchTodos(): Promise<Todo[]>;
  fetchTodoById(request: FetchTodoByIdRequest): Promise<Todo | null>;
  addTodo(request: AddTodoDTO): Promise<Todo>;
  deleteTodoById(request: DeleteTodoByIdRequest): Promise<void>;
}
