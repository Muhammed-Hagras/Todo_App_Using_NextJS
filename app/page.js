import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <AddTodo />
        </div>
        <TodoList />
      </div>
    </main>
  );
}
