import { TodoItem } from "./components/TodoItem";
import { useTodos } from "./hooks";
import { CreateTodoForm } from "./components/CreateTodoForm";

export const TodosView = async () => {
  const { todos, createTodo } = await useTodos();

  return (
    <div className="bg-white border rounded shadow p-6 m-4 w-full max-w-lg">
      <div className="mb-4">
        <h1 className="text-grey-darkest">Todolist</h1>
        <CreateTodoForm createTodo={createTodo} />
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem {...todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
