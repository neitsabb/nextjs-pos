import { Todo } from "@/domain/models/todo.model";
import { createTodoAction, fetchTodos } from "./actions.service";
import { AddTodoDTO } from "@/domain/dtos/todos.dto";
import { CreateTodoInput } from "@/application/schemas/todo.schema";

type UseTodosData = {
  getTodos: () => Promise<Todo[]>;
  createTodo: (todo: CreateTodoInput) => Promise<any | null>;
};

export const useTodosData = (): UseTodosData => {
  const getTodos = async () => {
    return fetchTodos();
  };

  const createTodo = async (todo: AddTodoDTO) => {
    "use server";
    return createTodoAction(todo);
  };

  return {
    getTodos,
    createTodo,
  };
};
