import { AddTodoDTO } from "@/domain/dtos/todos.dto";
import { Todo } from "@/domain/models/todo.model";
import { IDatabaseAdapter } from "@/application/services/database.interface";

const table = "todos";

/**
 * Repository for Todos
 * @param {IDatabaseAdapter} adapter
 */
export const TodosRepository = (adapter: IDatabaseAdapter) => ({
  fetchTodos: async () => {
    return adapter.all<Todo>(table);
  },
  fetchTodoById: async (id: string) => {
    return adapter.find<Todo>(table, id);
  },
  addTodo: async (todoDTO: AddTodoDTO) => {
    return adapter.create<AddTodoDTO>(table, todoDTO);
  },
  deleteTodoById: async (id: string) => {
    return adapter.delete<Todo>(table, id);
  },
});
