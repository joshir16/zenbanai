import { LayoutDashboard, Plus } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="col-span-1 row-span-2 flex flex-col gap-8 h-full w-full bg-dark px-4 py-4 ">
      <div>
        <h1 className="w-full text-center text-3xl font-bold tracking-tight mb-5">
          zenban <span className="text-green-400">ai</span>
        </h1>
      </div>

      <div className="border-b-[0.7] border-stone-600 pb-8">
        <button className="flex gap-2 items-center">
          <LayoutDashboard size={16} className="text-stone-400" />
          <p className="text-sm text-stone-400">All Board</p>
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-stone-400" htmlFor="createboard">
            Create new Board
          </label>
          <div className="flex gap-2 p-1 text-sm w-full border-[0.7] border-stone-600 rounded-md">
            <Plus size={24} className="text-stone-300" />
            <input
              type="text"
              placeholder="New Board Title..."
              name="createboard"
              className="text-sm w-full outline-0 text-stone-400"
            />
          </div>
        </div>

        <nav>
          <p className="text-sm text-stone-400">Board List</p>
        </nav>
      </div>

      <div className="justify-self-end">
        <p className="text-xs text-stone-500 font-bold text-center tracking-wide">
          <span className="">Copyright © 2026, Rishabh Joshi</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
