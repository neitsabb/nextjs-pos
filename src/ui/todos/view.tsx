"use server";

import { Todo } from "@/domain/models/todo.model";
import { TodoItem } from "./components/TodoItem";
import { useTodos } from "./hooks";
import { AddTodoDTO } from "@/domain/dtos/todos.dto";

export const TodosView = async () => {
  const { todos, createTodo } = await useTodos();

  return (
    <div className="bg-white border rounded shadow p-6 m-4 w-full max-w-lg">
      <div className="mb-4">
        <h1 className="text-grey-darkest">Todolist</h1>
        <form
          className="flex mt-4"
          action={async (formData: FormData) => {
            "use server";
            const rawFormData = {
              title: formData.get("title"),
            };

            if (!rawFormData.title) return;

            await createTodo(rawFormData as AddTodoDTO);
          }}
        >
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            name="title"
            placeholder="Add Todo"
          />
          <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
            Add
          </button>
        </form>
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
