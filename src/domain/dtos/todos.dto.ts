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
 * Interface for AddTodoDTO
 *
 * @export
 */
export type AddTodoDTO = {
  readonly title: string;
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
 * Interface for AddTodoDTO
 *
 * @export
 */
export type UpdateTodoRequest = {
  readonly todo: Todo;
};
