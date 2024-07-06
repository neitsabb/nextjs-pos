import { Todo } from "@/domain/models/todo.model";
import { useTodosData } from "./services/data.service";
import { AddTodoDTO } from "@/domain/dtos/todos.dto";

type UseTodos = {
  todos: Todo[];
  createTodo: (todo: AddTodoDTO) => Promise<Todo>;
};

export const useTodos = async (): Promise<UseTodos> => {
  const { getTodos, createTodo } = useTodosData();
  const todos = await getTodos();

  return {
    todos,
    createTodo,
  };
};
