import { Todo } from "@/domain/models/todo.model";

export const TodoItem = ({ id, title, completed }: Todo) => {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest">
        Add another component to Tailwind Components
      </p>
      <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
        Done
      </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
        Remove
      </button>
    </div>
  );
};
