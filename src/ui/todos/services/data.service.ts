import { Todo } from "@/domain/models/todo.model";
import { addTodo, fetchTodos } from "./actions.service";
import { AddTodoDTO } from "@/domain/dtos/todos.dto";

type UseTodosData = {
  getTodos: () => Promise<Todo[]>;
  createTodo: (todo: AddTodoDTO) => Promise<Todo>;
};

export const useTodosData = (): UseTodosData => {
  const getTodos = async () => {
    return fetchTodos();
  };

  const createTodo = async (todoDTO: AddTodoDTO) => {
    "use server";
    return addTodo(todoDTO);
  };

  return {
    getTodos,
    createTodo,
  };
};
