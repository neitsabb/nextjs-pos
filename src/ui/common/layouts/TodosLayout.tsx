export const TodosLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-teal-lightest font-sans">
      {children}
    </div>
  );
};
