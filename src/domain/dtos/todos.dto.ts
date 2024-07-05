import { Todo } from "@/domain/models/todo.model";

/**
 * Interface for FetchTodoRequest
 *
 * @export
 */
export type FetchTodoByIdRequest = {
  readonly todoId: string;
};

/**
 * Interface for AddTodoRequest
 *
 * @export
 */
export type AddTodoRequest = {
  readonly todo: Todo;
};

/**
 * Interface for DeleteTodoRequest
 *
 * @export
 */
export type DeleteTodoByIdRequest = {
  readonly todoId: string;
};

/**
 * Interface for AddTodoRequest
 *
 * @export
 */
export type UpdateTodoRequest = {
  readonly todo: Todo;
};
