"use client";

import {
  CreateTodoInput,
  CreateTodoSchema,
} from "@/application/schemas/todo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { useServerAction } from "zsa-react";

export const CreateTodoForm = ({ createTodo }: { createTodo: any }) => {
  const { isError, isPending, executeFormAction, error } =
    useServerAction(createTodo);

  return (
    <form action={executeFormAction}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        name="title"
        placeholder="Add Todo"
      />
      {isError && error?.fieldErrors && <p>{error.fieldErrors.title}</p>}
      <button
        type="submit"
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-gray-100"
      >
        {isPending ? "Adding..." : "Add"}
      </button>
    </form>
  );
};
