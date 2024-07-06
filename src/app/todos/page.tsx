import { TodosView } from "@/ui/todos/view";
import React from "react";

export const revalidate = 3600;

export const TodosPage = () => {
  return <TodosView />;
};

export default TodosPage;
