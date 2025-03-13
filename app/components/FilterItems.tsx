import React from 'react';

const FilterItems = () => {
  return (
    <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
      <div className="text-sm text-gray-400">「」件の未完了タスク</div>
      <div className="flex space-x-2">
        <button className="placeholder:px-3 py-1 rounded-md text-xs">すべて</button>
        <button className="px-3 py-1 rounded-md text-xs">未完了</button>
        <button className="px-3 py-1 rounded-md text-xs">完了済み</button>
      </div>
    </div>
  );
};

export default FilterItems;
