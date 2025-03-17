import React from 'react';
import { Todo } from '../types/type';

type FilterItemsProps = {
  initialTodoList: Todo[] | null;
  setFilterdTodoList: (status: string) => void;
};
const FilterItems = (props: FilterItemsProps) => {
  const showAllTasks = () => {
    props.setFilterdTodoList('all');
  };
  const showUncompleteTasks = () => {
    props.setFilterdTodoList('uncomplete');
  };
  const showCompleteTasks = () => {
    props.setFilterdTodoList('complete');
  };
  // 未完成のタスク数取得
  const getUnCompleteTaskNumber = () => {
    if (props.initialTodoList == null) return 0;
    const UnCompleteTaskList = props.initialTodoList.filter((todo) => todo.complete !== true);
    return UnCompleteTaskList.length;
  };
  return (
    <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
      <div className="text-sm text-gray-400">{getUnCompleteTaskNumber()}件の未完了タスク</div>
      <div className="flex space-x-2">
        <button onClick={showAllTasks} className="placeholder:px-3 py-1 rounded-md text-xs">
          すべて
        </button>
        <button onClick={showUncompleteTasks} className="px-3 py-1 rounded-md text-xs">
          未完了
        </button>
        <button onClick={showCompleteTasks} className="px-3 py-1 rounded-md text-xs">
          完了済み
        </button>
      </div>
    </div>
  );
};

export default FilterItems;
