import { TodosLayout } from "@/ui/common/layouts/TodosLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <TodosLayout>{children}</TodosLayout>;
};

export default Layout;
