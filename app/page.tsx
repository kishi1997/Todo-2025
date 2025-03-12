import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}
