import { create } from 'zustand';
import { Todo } from '../types/type';
import { fetchAddTodo, fetchDeleteTodo, fetchEditTodo, fetchTodoList } from '../utils/TodoUtils';

type TodoStore = {
  todos: Todo[];
  getTodoList: () => void;
  addTodo: (task: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (task: string, complete: boolean, id: string) => void;
  completeTodo: () => void;
  unCompleteTodo: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  // タスク取得
  getTodoList: async () => {
    const data = await fetchTodoList();
    set(() => ({ todos: data }));
  },
  // タスク追加
  addTodo: async (task: string) => {
    const data = await fetchAddTodo(task);
    set((state) => ({
      todos: [...state.todos, data],
    }));
  },
  // タスク削除
  removeTodo: async (id: string) => {
    const data = await fetchDeleteTodo(id);
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== data.id),
    }));
  },
  // タスク編集
  editTodo: async (task: string, complete: boolean, id: string) => {
    const data = await fetchEditTodo(task, complete, id);
    set((state) => ({
      todos: state.todos.map((todo) => {
        return todo.id === data.id ? data : todo;
      }),
    }));
  },
  completeTodo: async () => {
    const data = await fetchTodoList();
    set(() => ({
      todos: data.filter((todo) => todo.complete === true),
    }));
  },
  unCompleteTodo: async () => {
    const data = await fetchTodoList();
    set(() => ({
      todos: data.filter((todo) => todo.complete === false),
    }));
  },
}));
