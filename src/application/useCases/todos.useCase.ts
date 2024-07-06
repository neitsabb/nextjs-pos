import { IUseCase } from "../../domain/common/usesCases/usesCases.interface";
import {
  AddTodoDTO,
  DeleteTodoByIdRequest,
  FetchTodoByIdRequest,
} from "../../domain/dtos/todos.dto";
import { Todo } from "../../domain/models/todo.model";
import { ITodosRepository } from "../../domain/repositories/todos.interface";

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
): IUseCase<AddTodoDTO, Promise<Todo>> => ({
  execute: async (dto: AddTodoDTO) => todosRepository.addTodo({ ...dto }),
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
