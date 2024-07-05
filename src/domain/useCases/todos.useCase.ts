import { IUseCase } from "../common/usesCases/usesCases.interface";
import {
  AddTodoRequest,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "../dtos/todos.dto";
import { Todo } from "../models/todo.model";
import { ITodosRepository } from "../repositories/todos.repository";

/**
 * Use case for fetching todos
 *
 * @param todosRepository
 * @returns
 */
export const fetchTodosUseCase = (
  todosRepository: ITodosRepository
): IUseCase<void, Promise<Todo[]>> => ({
  execute: async () => todosRepository.fetchTodos(),
});

/**
 * Use case for fetching todo by id
 *
 * @param todosRepository
 * @returns
 */
export const fetchTodoByIdUseCase = (
  todosRepository: ITodosRepository
): IUseCase<FetchTodoByIdRequest, Promise<Todo | null>> => ({
  execute: async ({ todoId }) => todosRepository.fetchTodoById({ todoId }),
});

/**
 * Use case for adding a todo
 *
 * @param todosRepository
 * @returns
 */
export const addTodoUseCase = (
  todosRepository: ITodosRepository
): IUseCase<AddTodoRequest, Promise<Todo>> => ({
  execute: async ({ todo }) => todosRepository.addTodo({ todo }),
});

/**
 * Use case for deleting a todo by id
 *
 * @param todosRepository
 * @returns
 */
export const deleteTodoByIdUseCase = (
  todosRepository: ITodosRepository
): IUseCase<DeleteTodoByIdRequest, Promise<void>> => ({
  execute: async ({ todoId }) => todosRepository.deleteTodoById({ todoId }),
});
