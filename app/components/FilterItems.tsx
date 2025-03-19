'use client';
import React, { useEffect, useState } from 'react';
import { fetchTodoList } from '../utils/TodoUtils';
import { useTodoStore } from '../store/TodoStore';

const FilterItems = () => {
  const { todos, getTodoList, completeTodo, unCompleteTodo } = useTodoStore();
  const [unCompleteTodoLength, setUnCompleteTodoLength] = useState<number>(0);
  useEffect(() => {
    const getUnCompleteTodo = async (): Promise<void> => {
      const data = await fetchTodoList();
      const unCompleteTodo = data.filter((todo: { complete: boolean }) => todo.complete === false);
      setUnCompleteTodoLength(unCompleteTodo.length);
    };
    getUnCompleteTodo();
  }, [todos]);

  const getEachTodolist = (e: React.MouseEvent<HTMLButtonElement>, kind: number): void => {
    e.preventDefault();
    if (kind == 1) getTodoList();
    if (kind == 2) unCompleteTodo();
    if (kind == 3) completeTodo();
  };

  return (
    <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
      <div className="text-sm text-gray-400">{unCompleteTodoLength}件の未完了タスク</div>
      <div className="flex space-x-2">
        <button
          onClick={(e) => getEachTodolist(e, 1)}
          className="placeholder:px-3 py-1 rounded-md text-xs"
        >
          すべて
        </button>
        <button onClick={(e) => getEachTodolist(e, 2)} className="px-3 py-1 rounded-md text-xs">
          未完了
        </button>
        <button onClick={(e) => getEachTodolist(e, 3)} className="px-3 py-1 rounded-md text-xs">
          完了済み
        </button>
      </div>
    </div>
  );
};

export default FilterItems;
