'use client';

import { useEffect, useState } from 'react';
import FilterItems from './components/FilterItems';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/type';

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[] | null>([]);
  // todo追加時にリストを更新する関数
  const updataTodoList = async (newTodo: Todo): Promise<void> => {
    setTodoList((prevTodos) => {
      if (prevTodos == null) {
        return [newTodo];
      }
      return [...prevTodos, newTodo];
    });
  };
  // todoリストの取得
  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/todos`);
        const todos = await res.json();
        setTodoList(todos);
      } catch (error) {
        console.error('エラーが発生しました', error);
      }
    };
    fetchTodoList();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="p-6">
          {/* タイトル */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-blue-400">
              TODO<span className="text-white">TASKS</span>
            </h1>
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse"></div>
          </div>
          <NewTodoForm updataTodoList={updataTodoList}></NewTodoForm>
          <TodoList todoList={todoList}></TodoList>
          <FilterItems></FilterItems>
        </div>
        {/* 完了タスククリアボタン */}
        <div className="px-6 py-4 bg-gray-900 bg-opacity-60 flex justify-between items-center">
          <button className="text-gray-400 hover:text-blue-400 text-sm">完了済みをクリア</button>
          <div className="flex space-x-1">
            <div className="w-1 h-8 rounded-full bg-blue-600 animate-pulse"></div>
            <div className="w-1 h-8 rounded-full bg-blue-500 animate-pulse delay-75"></div>
            <div className="w-1 h-8 rounded-full bg-blue-400 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
