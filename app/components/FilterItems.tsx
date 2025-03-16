import React from 'react';
interface FilterItemsProps {
  setFilterdTodoList: (status: string) => void;
}
const FilterItems = ({ setFilterdTodoList }: FilterItemsProps) => {
  const showAllTasks = () => {
    setFilterdTodoList('all');
  };
  const showUncompleteTasks = () => {
    setFilterdTodoList('uncomplete');
  };
  const showCompleteTasks = () => {
    setFilterdTodoList('complete');
  };
  return (
    <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
      <div className="text-sm text-gray-400">「」件の未完了タスク</div>
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
